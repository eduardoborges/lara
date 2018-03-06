import { mock } from "./_utils";
import lockr from "lockr";
import { filter } from 'underscore';

const TABLE_NAME = 'items';

class DashboardItemService {

    static all(){
        return mock(
            lockr.get(TABLE_NAME)
        ,2000)
    }

    static get(id = 1){
        return mock(
            lockr.get(TABLE_NAME).find( item => item.id === id)
        ,2000)
    }

    static create(dashboard = {}){
        return mock(
            lockr.sadd(TABLE_NAME, dashboard)
        ,2000)
    }

    static update(){
        
    }

    static delete(id){
        const newList = filter( lockr.get(TABLE_NAME), item => item.id != id )
        return mock(
            lockr.set(TABLE_NAME, newList)
        ,500)
    }
}

export default DashboardItemService;
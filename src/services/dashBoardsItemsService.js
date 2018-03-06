import { mock } from "./_utils";
import lockr from "lockr";

const TABLE_NAME = 'itens';

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
        mock(
            lockr.srem(TABLE_NAME, id)
        ,2000)
    }
}

export default DashboardItemService;
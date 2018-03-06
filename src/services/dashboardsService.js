import { mock, all, add, del, get } from "./_utils";
import lockr from "lockr";
import { filter } from 'underscore';

class Dashboards {

    static all(){
        return mock(
            lockr.get('dashboards', [])
        ,2000)
    }

    static get(id = 1){
        return mock(
            lockr.get('dashboards', []).find( item => item.id == id)
        ,2000)
    }

    static create(dashboard = {}){
        return mock(
            lockr.sadd('dashboards', dashboard)
        ,2000)
    }

    static update(){
        
    }

    static delete(id){
        const newList = filter( lockr.get('dashboards'), item => item.id != id )
        return mock(
            lockr.set('dashboards', newList)
        ,500)
    }

    static getItems(dashboardID){
        return mock(
            filter( lockr.get('items', []), item => item.dashboardId == dashboardID)
        ,1000)
    }
}

export default Dashboards;
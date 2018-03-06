import { mock, all, add, del, get } from "./_utils";
import lockr from "lockr";

class Dashboards {

    constructor(){
        this.TABLE_NAME = 'dashboards';
    }

    static all(){
        return mock(
            lockr.get('dashboards')
        ,2000)
    }

    static get(id = 1){
        return mock(
            lockr.get('dashboards').find( item => item.id == id)
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
        mock(
            lockr.srem('dashboards', id)
        ,2000)
    }

    static getItems(dashboardID){
        mock(
            lockr.get('items').filter( item => item.id == dashboardID )
        ,2000)
    }
}

export default Dashboards;
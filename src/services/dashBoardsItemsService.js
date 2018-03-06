import { mock, all, add, del, get } from "./_utils";

class DashboardItem {

    constructor(){
        this.TABLE_NAME = 'dashboard_items';
    }

    static all(){
        return mock(
            all(this.TABLE_NAME)
        ,2000)
    }

    static get(id = 1){
        return mock(
            get(this.TABLE_NAME, id)
        ,2000)
    }

    static create(dashboard = {}){
        return mock(
            add(this.TABLE_NAME, dashboard)
        ,2000)
    }

    static update(){

    }

    static delete(id){
        mock(
            del(this.TABLE_NAME, id)
        ,2000)
    }
}

export default Dashboards;
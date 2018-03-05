// import http from "axios";
import { mock } from './_utils';

// products mock test

class Auth {

    token = 'app_token';

    static login(login, password){
        return mock({
            logged: true
        }, 2000)
    }

    static logout(){

    }

    static isLogged(){

    }
}


export default Auth;
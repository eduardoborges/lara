// import http from "axios";
import { mock } from './_utils';

// products mock test

class Auth {

    token = 'app_token';

    static login(login, password){
        return mock({
            logged: true,
            token: '24283745827634875263874572345'
        }, 2000)
    }

    static logout(){

    }

    static isLogged(){

    }
}


export default Auth;
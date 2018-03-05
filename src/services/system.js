
import { mock } from './_utils';


class System {

    static status(){
        return mock({
            status: 500,
            mensage: "System normal e operante"
        }, 2000);
    }

}

export default System;
import axios from "axios";

class Api {
    private static _server = axios.create({
        baseURL: 'https://api.rawg.io/api/',
        params: {
            key: 'd50639df9cfa4b5989f352c3e8f4e0d6',
        }
    })

    static get server () {
        return Api._server;
    }
}

export default Api;
import { AxiosRequestConfig } from "axios";
import Api from "../config/axios-config";

class Request {
    public async getData (endpoint: string , requestConfig: AxiosRequestConfig | undefined) {
        const response = await Api.server.get(endpoint , {...requestConfig});
        return response.data;
    }
}

export default new Request;
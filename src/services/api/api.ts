import Api from "../config/axios-config";

class Request {
    public async getData (endpoint: string) {
        const response = await Api.server.get(endpoint);
        return response.data;
    }
}

export default new Request;
import Api from "../config/axios-config";

class Request {
    public async getGames () {
        const response = await Api.server.get('games');
        return response.data;
    }

    public async getGenres () {
        const response = await Api.server.get('genres');
        return response.data;
    }
}

export default new Request;
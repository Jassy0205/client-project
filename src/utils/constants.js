const SERVER_IP = "http://localhost:3000"
const API_URL = `${SERVER_IP}/api/v1`;

export const ENV = {
    //BASE_API: SERVER_IP, 
    BASE_API: API_URL,
    API_ROUTES: {
        REGISTER: "users/new-user"
    }
}
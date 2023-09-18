import api from "../axios";

const useAuth = {
    register: (data) => api.post("/user/register", data),
    login: (data) => api.post("/user/login", data)
};


export default useAuth;
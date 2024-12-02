import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class AuthService {
    // Método de login
    login(credentials) {
        return axios.post(`${API_BASE_URL}/login`, credentials)
            .then(response => {
                // Suponiendo que el token JWT está en response.data.token
                if (response.data.token) {
                    // Guarda el token en localStorage o sessionStorage
                    console.log("Se guardo el token:",response.data.token);
                    localStorage.setItem("user-token", response.data.token);
                }
                return response.data;
            });
    }

    // Método para obtener el token
    getToken() {
        return localStorage.getItem("user-token");
    }


    // Método para agregar el token a las cabeceras de la solicitud
    setAuthHeader() {
        const token = this.getToken();
        if (token) {
            return { Authorization: `Bearer ${token}` }; // Incluye el token en la cabecera
        }
        return {};
    }

    // Método para hacer solicitudes protegidas (requiere autenticación)
    getProtectedData() {
        return axios.get(`${API_BASE_URL}/protected`, {
            headers: this.setAuthHeader()
        });
    }
}

export default new AuthService();

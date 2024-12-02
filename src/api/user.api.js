import axios from "axios";
import AuthService from "../api/AuthService"; // Asegúrate de importar AuthService correctamente

const usersAPI = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  withCredentials: true
});

// Interceptor para agregar el token a todas las solicitudes
usersAPI.interceptors.request.use(
  (config) => {
    // Obtener el token del AuthService
    const token = AuthService.getToken();

    if (token) {
      // Agregar el token en la cabecera de autorización
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Funciones para realizar solicitudes a la API
export const getAllUsers = () => usersAPI.get('/usuarios');

export const createUser = (user) => usersAPI.post('/usuarios', user);

export const getUserById = (id) => usersAPI.get(`/usuarios/${id}`);

export const updateUser = (id, user) => usersAPI.put(`/usuarios/${id}`, user);

export const deleteUser = (id) => usersAPI.delete(`/usuarios/${id}`);


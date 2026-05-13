import api from "../api/axios";
export const getUsers= async()=> {
    try {
        const response = await api.get('/users')
        return response.data

    } catch(error){
        console.error("Error fetching users:",error);
        throw error

    }
}
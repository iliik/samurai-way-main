import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf '
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 2) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize} `)
            .then(response => {
                return response.data
            })
    }


}

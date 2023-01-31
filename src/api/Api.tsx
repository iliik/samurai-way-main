import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '45e010e4-6515-4f44-948c-de88f0fc6daf '
    }
})

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`/profile/` + userId)
    },
    getStatus(userId: number){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status:string){
        return instance.put(`status/`,{status})
    }


}
export const authAPI = {
    me() {
        return instance.get(`/auth/me `)
    }
}


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 2) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize} `)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`/follow/${userId} `)
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId} `)
    },
    getProfile(userId: number) {
        console.warn('is error profileAPI')
        return profileAPI.getProfile(userId)
    }

}
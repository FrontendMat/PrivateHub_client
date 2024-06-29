import axios from "axios";
import {USER_LOCALSTORAGE_KEY} from "shared/consts/localstorage";

export const $api = axios.create({
    withCredentials: true,
    baseURL: __API__,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(USER_LOCALSTORAGE_KEY ) || ''} `
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        try {
            originalRequest._isRetry = true
            const response = await axios.get(`${__API__}/refresh`, {withCredentials: true})
            localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.accessToken)
            console.log(response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
            console.log('Не авторизований', e)
        }
    }
    throw error;
})
import axios from 'axios'



export const axiosAuth = () => {
    const token = localStorage.getItem('useToken');

    return axios.create({
        headers: {
            'Authorization': `${token}`
        }
    })
}
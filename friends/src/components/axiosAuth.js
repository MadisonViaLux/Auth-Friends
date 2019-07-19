import axios from 'axios'



export const axiosAuth = () => {
    const token = localStorage.getItem('useToken');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },

        baseUrl: 'http://localhost:5000/api'
    })
}
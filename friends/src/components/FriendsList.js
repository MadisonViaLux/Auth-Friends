import React, { useState, useEffect } from 'react'
import {axiosAuth} from '../utils/axiosAuth'

export const FriendsList = props => {
    // console.log(props)

    const [friends, setFriends] = useState([])
    // console.log(friends)
    
    const getFriends = () => {
        axiosAuth().get('/friends')
            .then(res => {
                console.log('THIS IS INSIDE GET', res.data)
                setFriends(res.data);
            })
            .catch(err => console.log(err))
    }    
    // console.log(getFriends())

    useEffect(() => {
        getFriends()
    }, [])




    return(
        <div>
            HeLlO tHeRe
        </div>
    )
}
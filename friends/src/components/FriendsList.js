import React, { useState, useEffect } from 'react'

import Loader from "react-loader-spinner";
import {axiosAuth} from '../utils/axiosAuth'
import { CardList } from './CardList'



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


    const LoadCard = () => {
        if(friends === []){
            return (
                <div>
                    <Loader
                        type="Ball-Triangle"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    />
                </div>
            )
         } else {
            return (
                <div>
                    {friends.map(item => (
                        <CardList 
                        key={item.id}
                        name={item.name}
                        email={item.email}
                        age={item.age}
                    />))}
                </div>
                )
         }
    } 

    return(
        <div>

            {LoadCard()}

            {/* {friends.map(item => (
                <CardList 
                    key={item.id}
                    name={item.name}
                    email={item.email}
                    age={item.age}
            />))} */}

        </div>
    )
}
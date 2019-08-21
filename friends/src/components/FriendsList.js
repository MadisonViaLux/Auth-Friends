import React from 'react'

export const FriendsList = ({age, email,name, id}) => {
    return(
        <>
            <h2>{name}</h2>

            <div>
                <p>Personal number: {id}</p>
                <p>Contact info: {email}</p>
                <p>Years Survived: {age}</p>
            </div>
        </>
    )
}
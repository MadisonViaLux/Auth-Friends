import React from 'react'

export const CardList = ({name, age, email}) => {


    return(
        <div className='friendCard'>
            <h3>Name: {name}</h3>

            <h3>Age: {age}</h3>

            <h3>Email: {email}</h3>
        </div>
    )
}
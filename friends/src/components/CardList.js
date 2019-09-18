import React from 'react'

export const CardList = ({name, age, email}) => {


    return(
        <div>
            <h3>Name: {name}</h3>
            <br/>
            <h3>Age: {age}</h3>
            <br/>
            <h3>Email: {email}</h3>

        </div>
    )
}
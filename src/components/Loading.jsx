import React from 'react'



export const Loading = ({ message }) => {
    return (
        <div className="alert alert-info text-center">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
            <p>
                {message}
            </p>
        </div>
    )
}


import React from 'react'

const Input = (props) => {
    return (
        <div><input id={props.id}
            placeholder={props.placeholder}
            width={props.width}
            type={props.type} className='m-3 p-3'/></div>
    )
}

export default Input
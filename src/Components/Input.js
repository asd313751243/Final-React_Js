import React from 'react'

const Input = (props) => (
    <div className="input-group">
        <input 
        type={props.type} aria-label={props.title} 
        className="form-control"
        title={props.title}
        onChange={props.handleChange}
        placeholder={props.holder}
        value={props.data}
        required />
    </div>
)

export default Input;
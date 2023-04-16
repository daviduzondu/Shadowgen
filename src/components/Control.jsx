import React, { useState } from 'react'
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful'

function Control({ label, type, onChangeHandler, value }) {
    return (
        <div className={`control ${type}`}>
            <div className='label'>
                <label htmlFor={label}>{label}</label>
                {((type && type !== "checkbox") 
                || (typeof value === 'number')) 
                && <span className='value'>{value}</span>}
            </div>
            {
                type === 'color' ? <HexAlphaColorPicker color={value} onChange={onChangeHandler} />
                    :
                    (type && <input type={type} name={label} value={value} min={(label === 'Spread' || label === "Blur") ? 0 : -350} max={(label === 'Spread' || label === "Blur") ? 100 : 350} onChange={onChangeHandler} />)
            }
        </div>
    )
}

export default Control
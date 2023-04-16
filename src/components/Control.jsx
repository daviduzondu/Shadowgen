import React from 'react'
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful'

function Control({ label, type, onChangeHandler, value }) {
    return (
        <div className={`paneChild ${type}`}>
            <div className='label'>
                <label htmlFor={label}>{label}</label>
                {label !== "Inset"
                    &&
                    <span className='value'>{value}</span>}
            </div>
            {
                type === 'color' ? <HexAlphaColorPicker color={value} onChange={onChangeHandler} />
                    :
                    <input type={type} name={label} value={value} min={(label === 'Spread' || label === "Blur") ? 0 : -350} max={(label === 'Spread' || label === "Blur") ? 100 : 350} onChange={onChangeHandler} />
            }
        </div>
    )
}

export default Control
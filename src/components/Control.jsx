import React, { useState } from 'react'
import { HexAlphaColorPicker, HexColorInput } from 'react-colorful'

function ControlPane({ label, type, onChangeHandler, value, children }) {
    return (
        <div className={label !== "Inset" ? "control" : "controlCheckbox"}>
            <div className='label'>
                {/* <div></div> */}
                <label htmlFor={label}>{label}</label>
                {type !== "checkbox" && <span>{value}</span>}
            </div>
            {children &&
                <div className='codeOutput'>
                    {children}
                </div>
            }
            {
                type === 'color' ? <HexAlphaColorPicker color={value} onChange={onChangeHandler} />
                    :
                    (type && <input type={type} name={label} value={value} min={(label === 'Spread' || label === "Blur") ? 0 : -350} max={(label === 'Spread' || label === "Blur") ? 100 : 350} onChange={onChangeHandler} />)
            }
        </div>
    )
}

export default ControlPane
import React, { useState, useEffect } from 'react'
import Control from './Control'
function Container() {
    const [boxShadow, setBoxShadow] = useState([10, 10, 10, 10, " ", "#53535377"])

    function onChangeHandler(e, index) {
        if (index === 5) {
            setBoxShadow(boxShadow.map((c, i) => {
                if (i === index) {
                    return e;
                } else {
                    return c;
                }
            }))
        } else if (index === 4) {
            setBoxShadow(boxShadow.map((c, i) => {
                if (i === index) {
                    if (e.target.checked) {
                        return 'inset';
                    } else {
                        return '';
                    }
                } else {
                    return c;
                }
            }))
        } else {
            setBoxShadow(boxShadow.map((c, i) => {
                if (i === index) {
                    return +e.target.value;
                } else {
                    return c;
                }
            }))
        }
    }

    const shadowArrayToString =
        (element) => {
            if (typeof element === "number") {
                return element + "px";
            }
            return element;
        }



    return (
        <>
            <div className='controlPane'>
                <Control label="Color" type="color" value={boxShadow[5]} onChangeHandler={e => onChangeHandler(e, 5)} />
                <Control label="Offset X" type="range" value={boxShadow[0]} onChangeHandler={e => onChangeHandler(e, 0)} />
                <Control label="Offset Y" type="range" value={boxShadow[1]} onChangeHandler={e => onChangeHandler(e, 1)} />
                <Control label="Spread" type="range" value={boxShadow[2]} onChangeHandler={e => onChangeHandler(e, 2)} />
                <Control label="Blur" type="range" value={boxShadow[3]} onChangeHandler={e => onChangeHandler(e, 3)} />
                <Control label="Inset" type="checkbox" value={boxShadow[4]} onChangeHandler={e => onChangeHandler(e, 4)} />
            </div>
            <div>
                <div className='square'
                    style={{
                        boxShadow: boxShadow.map(shadowArrayToString).join(" "),
                        backgroundColor: "#ffffff",
                        border: "solid 0.2px"
                    }}></div>
            </div>
            <div className='controlPane'>
                <Control label="Output">
                    box-shadow: {
                        boxShadow.map((element) => {
                            if (typeof element === 'number') {
                                return element + "px";
                            }
                            return `${element}`;
                        }).join(" ")
                    }
                </Control>
            </div>
        </>
    )
}

export default Container
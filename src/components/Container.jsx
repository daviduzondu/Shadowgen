import React, { useState } from 'react'
import Control from './Control'
import CodeOutput from './CodeOutput'
function Container() {
    const [boxShadow, setBoxShadow] = useState([23, 23, 0, 10, " ", "#00000045"])

    function onChangeHandler(e, index) {
        switch (index) {
            case 5:
                setBoxShadow(boxShadow.map((c, i) => i === index ? e : c));
                break;
            case 4:
                setBoxShadow(boxShadow.map((c, i) => i === index ? e.target.checked ? 'inset' : '' : c));
                break;
            default:
                setBoxShadow(boxShadow.map((c, i) => i === index ? +e.target.value : c));
                break;
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
            <div className='controlPane controls'>
                <Control label="Color" type="color" value={boxShadow[5]} onChangeHandler={e => onChangeHandler(e, 5)} />
                <Control label="Offset X" type="range" value={boxShadow[0]} onChangeHandler={e => onChangeHandler(e, 0)} />
                <Control label="Offset Y" type="range" value={boxShadow[1]} onChangeHandler={e => onChangeHandler(e, 1)} />
                <Control label="Blur" type="range" value={boxShadow[2]} onChangeHandler={e => onChangeHandler(e, 2)} />
                <Control label="Spread" type="range" value={boxShadow[3]} onChangeHandler={e => onChangeHandler(e,3)} />
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
                <CodeOutput shadow={boxShadow} />
            </div>
        </>
    )
}

export default Container
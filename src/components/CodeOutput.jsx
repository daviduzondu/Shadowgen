import React from 'react'

function CodeOutput({ shadow }) {
    return (
        <div className='paneChild'>
            <div className='label'>
                <span>CSS Output</span>
            </div>
            <div className='codeOutput'>
                box-shadow: {
                    shadow.map((element) => {
                        if (typeof element === 'number') {
                            return element + "px";
                        }
                        return `${element}`;
                    }).join(" ")
                };
            </div>
        </div>
    )
}

export default CodeOutput
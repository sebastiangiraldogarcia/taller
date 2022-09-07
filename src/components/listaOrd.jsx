import React, { useState } from 'react';

const Lista = () => {

    const [num, setNum] = useState([])
    const [n, setN] = useState()

    const onAddNum = () => {
        setNum(list => [...list, n])
        setN('')
    }

    const onSetN = (evt) => {
        setN(evt.target.value)
    }

    const sorted = num.slice().sort((a,b) => a-b)

    return (
        <>
            <ol>
                <h2>5. Lista ordenada</h2>
                <input type="text" value={n} onChange={(event) => onSetN(event)} />
                <br />
                <button onClick={() => onAddNum()}>Añadir</button>               
                <br />
                <ol>{
                    sorted.map(
                        (n, key) => {
                            return <li>{n}</li>
                        }
                    )
                }
                </ol>
            </ol>
        </>
    )

}

export default Lista
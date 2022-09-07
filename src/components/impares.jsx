import React, { useState } from 'react';

const Impares = () => {

    const [n, setN] = useState()
    const [odd, setOdd] = useState([])

    const onSetNum = (evt) => {
        setN(evt.target.value)
    }

    const onSetOdd = (props) => {
        setOdd(list => [...list, props])
        console.log(props)
    }

    /*const numImpares = (n) => {

        var x
        var o = []
        if (n % 2 == 0) {
            x = Number(1) + Number(n)
            for (let i = 0; i <= x; i++) {
                o += (x - Number(2))
            }
            return console.log(o)
        }
    }*/

    return (
        <div>
            <ol>
                <h2>6. Números impares</h2>
                <input type="text" value={n} onChange={(event) => onSetNum(event)} />
                <br />
                <button onClick={() => numImpares(n)}>Mostrar impares</button>
                <br />
                <label>{odd}</label>
            </ol>
        </div>
    )

}

export default Impares
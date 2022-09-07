import React, { useState } from 'react'

const Repetidos = () => {

    const [x1, setX1] = useState()
    const [x2, setX2] = useState()
    const [x3, setX3] = useState()
    const [msg, setMsg] = useState([])

    const onSetX1 = (evt) => {
        setX1(evt.target.value)
    }
    const onSetX2 = (evt) => {
        setX2(evt.target.value)
    }
    const onSetX3 = (evt) => {
        setX3(evt.target.value)
    }

    const onSetMsg = (props) => {
        setMsg(props +" numeros iguales")
    }

    function NoRepetidos(x1, x2, x3) {

        var n = [x1, x2, x3]
        var repetidos = []

        n.forEach(function (numero) {
            repetidos[numero] = (repetidos[numero] || 0) + 1
        });

        return onSetMsg(repetidos)

    }

    return (
        <div>
            <ol>
                <h2>4. Números repetidos</h2>
                <input placeholder="No1" value={x1} onChange={(event) => onSetX1(event)} />
                <br/>
                <input placeholder="No2" value={x2} onChange={(event) => onSetX2(event)} />
                <br/>
                <input placeholder="No3" value={x3} onChange={(event) => onSetX3(event)} />
                <br></br>
                <button onClick={() => NoRepetidos(x1, x2, x3)}>Verificar</button>
                <br></br>
                <label>{msg}</label>
            </ol>
        </div>
    )
}

export default Repetidos
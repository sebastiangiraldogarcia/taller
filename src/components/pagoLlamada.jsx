import React, { useState } from 'react';

const Llamadas = () => {

    const [min, setMin] = useState('')
    const [pago, setPago] = useState()

    const onSetMin = (evt) => {
        setMin(evt.target.value)
    }

    const onSetPago = (props) => {
        setPago(props)
    }

    function Minutos(m) {

        if (m < 4) {
            return onSetPago(m * 100)
        } else {
            return onSetPago(300 + ((m - 3) * 50))
        }

    }

    return (
        <div className="calculo">
            <ol>
                <h2>2. Calcular valor llamada</h2>
                <input placeholder="Minutos" value={min} onChange={(event) => onSetMin(event)} />
                <button onClick={() => Minutos(min)}>Calcular pago</button>
                <div className="resultado">
                    <label placeholder="Cobro" >Pago: {pago}</label>
                </div>
            </ol>
        </div>
    )

}

export default Llamadas
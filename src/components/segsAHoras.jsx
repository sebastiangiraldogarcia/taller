import React, { useState } from 'react';

import '../App.css';

const SecondsToHms = () => {

    const [segs, setSegs] = useState('')
    const [hora, setHora] = useState('')

    const onSetSegs = (evt) => {
        setSegs(evt.target.value)
    }

    const setHoras = (props) => {
        setHora(props)
    }

    function Segs(d) {

        var date = new Date(null);
        date.setSeconds(d);
        setHoras(date.toISOString().substr(11, 8))

        return (
            console.log(date.toISOString().substr(11, 8))
        )

    }
    return (

        < div className="calculo" >
            <h2>1. Calcular Horas</h2>
            <ol>
                <input type="text" placeholder="Segundos" value={segs} onChange={(event) => onSetSegs(event)} />
                <button onClick={() => Segs(segs)}>Calcular horas</button>
                <div className="resultado">
                    <label placeholder="Horas" >Tiempo en horas: {hora}</label>
                </div>
            </ol>
        </div >
    )
}
export default SecondsToHms;
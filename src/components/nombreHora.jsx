import React, { useState } from 'react'

const NombreHora = () => {

    const [name, setName] = useState()
    const [hora, setHora] = useState()
    const [saludo, setSaludo] = useState("")

    const onSetName = (evt) => {
        setName(evt.target.value)
    }

    const onSetHora = (evt) => {
        setHora(evt.target.value)
        Saludo(hora)
    }

    const onSetSaludo = (props) => {
        setSaludo(props)
    }

    function Saludo(f) {

        if (f >= 0 && f < 12) {
            return onSetSaludo("Buenos Días,")
        }

        if (f >= 12 && f < 18) {
            return onSetSaludo("Buenos Tardes,")
        }

        if (f >= 18 && f < 24) {
            return onSetSaludo("Buenos Noches,")
        }

    }

    return (
        <div>
            <ol>
                <h2>3. Saludo</h2>
                <input type="Hora" placeholder="¿Qué hora es?"
                    onChange={(event) => onSetHora(event)} />
                <br></br>
                <input type="Nombre" placeholder="¿Cómo te llamas?"
                    onChange={(event) => onSetName(event)} />
                <br></br>
                <label>{saludo} {name}</label>
            </ol>
        </div>
    )
}

export default NombreHora
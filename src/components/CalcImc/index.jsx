import { useState } from "react"
import './calcImc.css'

const CalcImc = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const renderizaResultado = () => {
        const average = weight / (height ** 2);

        if (average < 18.5) {
            return (
                <p className="resultP">IMC: {average.toFixed(2)} - Você está abaixo do peso.</p>
            )
        } else {
            if (average < 25) {
                return (
                    <p className="resultP">IMC: {average.toFixed(2)} - Você está no peso adequado.</p>
                )
            } else {
                if (average < 30) {
                    return (
                        <p className="resultP">IMC: {average.toFixed(2)} - Você está acima do peso.</p>
                    )
                } else {
                    if (average > 30) {
                        return (
                            <p className="resultP">IMC: {average.toFixed(2)} - Cuidado. Você está obeso.</p>
                        )
                    }
                }
            }
        }
    }

    return (
        <form className="calc-form">
            <input className="dados-input" type="number" placeholder="Insira seu Peso (Kg)" onChange={evento => setWeight(evento.target.value)} />
            <input className="dados-input" type="number" placeholder="Insira sua Altura (M)" onChange={evento => setHeight(evento.target.value)} />
            {renderizaResultado()}
        </form>
    )
}

export default CalcImc
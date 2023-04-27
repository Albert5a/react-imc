import './imc.css'

const Imc = ({ weight, height }) => {
    const dadosImc = {
        weight: 72,
        height: 1.78
    }

    return (
        <div className='imc-header'>
            <h1 className='imc-titulo'>Calculando IMC</h1>
        </div>
    )
}

export default Imc
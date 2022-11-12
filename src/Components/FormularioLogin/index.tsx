import CampoTexto from '../CampoTexto'
import './FormularioLogin.css'

const FormularioLogin = () => {
    return (
        <section className='formularioLogin'>
            <form>
                <h2>LOGIN</h2>
                <CampoTexto />
                <CampoTexto />
            </form>
        </section>
    )
}

export default FormularioLogin
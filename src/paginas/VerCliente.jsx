import { useParams } from 'react-router-dom'

const VerCliente = () => {

    const { id } = useParams()

    console.log(id)
    return (
        <div>
            <h1>VerCliente.jsx</h1>
        </div>
    )
}

export default VerCliente

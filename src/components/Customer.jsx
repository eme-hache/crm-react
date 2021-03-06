import { useNavigate } from 'react-router-dom'

const Customer = ({ customer, handleDeleteCustomer }) => {
    const { name, company, email, phone, notes, id } = customer
    const navigate = useNavigate()

    return (
        <tr className='border-b hover:bg-gray-50'>
            <td className='p-3 text-center'>{name}</td>
            <td className='p-3 text-center'>
                <p><span className='text-gray-800 uppercase font-bold'>E-Mail:</span>{email}</p>
                <p><span className='text-gray-800 uppercase font-bold'>Teléfono:</span>{phone}</p>
            </td>
            <td className='p-3 text-center'>{company}</td>
            <td className='p-3'>
                <button
                    className='mt-3 bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs rounded'
                    type='button'
                    onClick={() => navigate(`/customers/${id}`)}
                >
                    Ver
                </button>
                <button
                    className='mt-3 bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs rounded'
                    type='button'
                    onClick={() => navigate(`/customers/edit/${id}`)}
                >
                    Editar
                </button>
                <button
                    className='mt-3 bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs rounded'
                    type='button'
                    onClick={() => handleDeleteCustomer(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Customer
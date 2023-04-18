const Paciente = ({paciente, setPaciente, eliminarPaciente}) =>{

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar al paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl mb-8">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de ingreso: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between md:justify-evenly">
                <button
                    type="button"
                    className="py-2 px-12 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md mt-5 font-bold uppercase"
                    onClick={()=>setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-12 bg-red-500 hover:bg-red-700 text-white rounded-md mt-5 font-bold uppercase"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
        
    )

}

export default Paciente
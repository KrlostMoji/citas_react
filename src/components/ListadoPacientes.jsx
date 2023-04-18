import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    return(

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="mt-12 text-center mb-8"><span className="text-indigo-400">Administra</span>{''} pacientes y citas</p>
                
                {
                    pacientes.map(paciente => (
                        <Paciente 
                            key = {paciente.id}
                            paciente = {paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente = {eliminarPaciente}
                        />
                    
                ))}
            </>
            ) : (
            <>
                <h2 className="font-black text-3xl text-center">Sin pacientes</h2>
                <p className="mt-12 text-center mb-8"><span className="text-indigo-400">Añade </span>{''} pacientes y citas</p>
            </>


            )}
           
            
        </div>  
        
        
    )


}

export default ListadoPacientes
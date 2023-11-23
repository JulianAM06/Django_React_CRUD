
import{Link} from 'react-router-dom';

export function Navigation(){
    return(
      <div className='flex justify-between py-6'>
        <Link to='/tasks'>
        <h1 className='text-center text-4xl hover:text-cyan-700 ml-4'>App Tareas</h1>
        </Link>
        <Link to='/tasks-create'><button className='text-center text-1xl mt-4 mr-4 bg-cyan-700 rounded-lg hover:bg-cyan-600 p-2'>Crear Tarea Nueva</button></Link>
      </div>
    )
  }
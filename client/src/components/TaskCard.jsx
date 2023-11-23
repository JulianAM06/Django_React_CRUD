import {useNavigate} from 'react-router-dom'


export function TaskCard({ task }){

    const navigate = useNavigate()

    return(
    <div className='bg-cyan-700 text-center rounded-md cursor-pointer hover:bg-cyan-600'
    
        onClick={() => {

            navigate('/tasks/' + task.id)
        }}
    >
        <h1 className='font-bold uppercase'>{task.title}</h1>
        <p>{task.descripction}</p>

    </div>
    )
  }
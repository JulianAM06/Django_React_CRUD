import {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {createTask, deleteTask, updateTask, getTask} from '../api/tasks.api'
import {useNavigate, useParams} from 'react-router-dom'


export function TaskFormPage(){

    const {register, handleSubmit, formState: {errors}, setValue} = useForm()

    const navigate = useNavigate()

    const params = useParams()

    const onSubmit = handleSubmit(async data =>{

      if (params.id){
        await updateTask(params.id, data);
        window.confirm("Tarea Actualizada Exitosamente")
      } else {

        await createTask(data);
        window.confirm("Tarea Creada Exitosamente") 
      }
        navigate('/tasks');
         
    })

    useEffect(() => {

      async function loadTask(){

        if(params.id){
          const res = await getTask(params.id)
          setValue('title', res.data.title)
          setValue('descripction', res.data.descripction) 
        }
      }

      loadTask()

    }, [])

    return(
      <div className='max-w-xl mx-auto'>
        <form onSubmit={onSubmit}>
          <input className='bg-cyan-700 text-white rounded-lg p-3 w-full mb-4 text-lg' type="text" placeholder="Titulo" {...register("title", {required: true})} />
          {errors.title && <span>Este Campo es Obligatorio</span>}
          <textarea className='bg-cyan-700 text-white rounded-lg p-3 block w-full mb-4 text-base' rows="3" placeholder="Descripcion" {...register("descripction", {required: true})}></textarea>
          {errors.descripction && <span>Este Campo es Obligatorio</span>}
          <button className='bg-cyan-700 rounded-lg mb-4 p-2'>Guardar</button>
        </form>
        {params.id && <button className='bg-red-700 rounded-lg flex p-2' onClick={ async () => {

          const acept = window.confirm("Estas seguro de eliminar Tarea?")
          if (acept){
            await deleteTask(params.id);
            window.confirm("Tarea Eliminada Exitosamente")
            navigate("/tasks");
          }
        }}>Eliminar</button>}
      </div>
    )
  }
  

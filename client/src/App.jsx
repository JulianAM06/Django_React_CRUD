import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TaskPage } from './pages/TaskPage';
import {TaskFormPage} from './pages/TaskFormPage';
import{Navigation} from './components/Navigation';


function App(){
  return(
    <BrowserRouter className='container mx-auto'>

      <div className='container mx-auto w-auto'>

      <Navigation />
    <Routes>
      <Route path='/' element={<Navigate to="/tasks" />} />
      <Route path='/tasks' element={<TaskPage/>}/>
      <Route path='/tasks-create' element={<TaskFormPage/>}/>
      <Route path='/tasks/:id' element={<TaskFormPage/>}/>
    </Routes>

      </div>
    
    
    </BrowserRouter>
  )
}

export default App
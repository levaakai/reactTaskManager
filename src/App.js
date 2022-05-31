import {useState, useEffect} from 'react' 
import Header from './components/Header' 
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  const [tasks, setTasks] = useState([])

const [showFormPane, setShowFormPane] = useState(false) 

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map(task => task.id === id ? {...task, reminder: data.reminder } : task)
  ) }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      'method': 'DELETE'
    })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'   
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1 
    // const newTask = {id, ...task} 
    // setTasks([...tasks, newTask]) 
  }


  // useEffect(()=>{
  //   const g = JSON.parse(localStorage.getItem('tasks'))
  //   if (g !==null) setTasks(g);

  // }, [])

  // useEffect(()=>{
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks])



  useEffect(() => {
  const getTasks = async () =>{
    const fetchedTasks = await fetchTasks()
    setTasks(fetchedTasks)
  }
  getTasks()
}, [])


// function for retrieve tasks from database api
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  return data
}
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}

return (
      <Router>
        <div className="container">
          <Header onAdd={()=>{setShowFormPane(!showFormPane)}} showForm={showFormPane}/>
          {/* {showFormPane && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ?
            <Tasks 
              tasks={tasks} 
              onDelete={deleteTask} 
              onToggle={toggleReminder} /> : <p><i>List is empty</i></p>
          } */}
            <Routes>
              <Route path="/" element={
                <>
                  {showFormPane && <AddTask onAdd={addTask} />}
                  {tasks.length > 0 ?
                    <Tasks 
                      tasks={tasks} 
                      onDelete={deleteTask} 
                      onToggle={toggleReminder} /> : <p><i>List is empty</i></p>
                  }
                </>
              } />
              <Route path="/about" element={ <About /> } />
            </Routes>
          <Footer />
        </div>
      </Router>
  ) 
}

export default App 

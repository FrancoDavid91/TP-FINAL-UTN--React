import { useState }  from 'react'
import './TaskForm.css'

const TaskForm = ({onSubmitted = (form) =>{}}) => {
  
  const [form, setForm] = useState({
    title: "",
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const resetForm = () => {
    setForm({
      title: '',
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitted(form)
    resetForm()
    
  }

  return (
    
    <section>
    <form
        onSubmit={handleSubmit}
    >
        <input 
        name = "title"
        value={form.title}
        onChange={handleChange}
        type="text" 
        placeholder="Escribe una tarea..." 
        />
        <button className='btn' type="submit">Agregar Tarea</button>
    </form>
</section>
  )
}

export default TaskForm
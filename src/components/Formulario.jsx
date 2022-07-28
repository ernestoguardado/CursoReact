import React, {useState} from "react"

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  })

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const {todoName, todoDescripcion} = todo

    if (!todoDescripcion.trim() || !todoName.trim()) {
      setError(true)
      return
    }
    setError(false)

    console.log(todo)
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    // setTodo({ ...todo, [e.target.name]: e.target.value })
    // console.log(e.target.type)

    const {name, value, checked, type} = e.target

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const PintarError = () => (
    <div className="alert alert-danger">Campos Obligatorios</div>
  )
  return (
    <>
      <h2>No Controlado</h2>
      {error && <PintarError />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripcion del todo"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
        >
          value={todo.todoEstado}
          <option value="pendiente">Pendientes</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="todoCheck"
            onChange={handleChange}
            checked={todo.todoCheck}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar Prioridad
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  )
}

export default Formulario

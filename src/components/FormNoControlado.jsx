import { useRef } from "react"

const FormNoControlado = () => {

	const formulario = useRef(null)
    
	const handleSubmit = e => {
		e.preventDefault();
		// console.log('procesando...')

		const datos = new FormData(formulario.current)
		console.log(...datos.entries())

		const objetoDatos = Object.fromEntries([...datos.entries()])
		console.log(objetoDatos)

		const {todoDescripcion, todoname} = objetoDatos
		if(!todoDescripcion.trim() || !todoname.trim()){
			console.log('nooooooo esta vacio')
			return
		}
		console.log('paso validaciones')

	}


	return (
		<>
			<h2>No Controlado</h2>
			<form ref={formulario} onSubmit={handleSubmit}>
				<input 
				type="text" 
				placeholder="Ingrese Todo" 
				name="todoname" 
				className='form-control mb-2'
				defaultValue='Tarea #01'
				/>
				<textarea
				name="todoDescripcion"
				className='form-control mb-2'
				placeholder='Ingrese descripcion del todo'
				defaultValue='Descripcion Tarea #01'
				/>
				<select 
				name="todoEstado"
				className='form-control mb-2'
				defaultValue='pendiente'
				>
					<option value="pendiente">Pendientes</option>
					<option value="completada">Completada</option>
				</select>
				<button 
				className='btn btn-primary'
				>Agregar
				</button>
			</form>
		</>
	)
}

export default FormNoControlado

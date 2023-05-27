import React from 'react'
import "./Main.css"

const listaAlumnos=["jorge Carraza","Christian Garrett","Manuel Gonzales","Gustavo Lopez","Gabriel Ardiles","Javier Carranza","Analia Legrand","Elver Galorgo"];
const Main = (props) =>{
    return (
        <div className='Main'>
            <h2 className='AlumnoIntegrante'>Alumnos y Integrantes</h2>
            <ul>
                {
                    listaAlumnos.map((alumno)=>{
                    const isIntegrante = props.integrantes.includes(alumno)
                    return isIntegrante ? <li className="tachado">{alumno}</li>:<li>{alumno}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Main;
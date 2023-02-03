import styles from './ListaDeTareas.module.css';
import React, { useState } from 'react'
import Tarea from '../../Tarea/Tarea';
import { useEffect } from 'react';


const ListaDeTareas = () => {
    const [tarea, setTarea] = useState([]);
    const [nuevatarea, setNuevatarea] = useState("")

    const handleNuevaTarea = (e) => {
        e.preventDefault();
        let aux = [...tarea];
        aux.push({name: nuevatarea, status: false})
        setTarea([...aux]);
        console.log("tareas: ", aux);
        setNuevatarea(""); 
    }

    const handleStatusChange = (value, idx) => {
        let aux = [...tarea];
        aux[idx].status = value;
        setTarea([...aux]);
    }

    const handleDeleteTarea = (idx) => {
        let aux = [...tarea];
        let filtered =aux.filter((value, index, array)=> index !== idx)
        setTarea([...filtered]);
    }
    useEffect (()=>{
        if (tarea.length>5){
            alert("Ya creó 5 componentes")
        }
    },[tarea])

    return (
        <div className={styles.general}>
            <form onSubmit={handleNuevaTarea}>
                <input  className={styles.input}type="text" value={nuevatarea} onChange={(e)=>setNuevatarea(e.target.value)}/>
                <button className={styles.btn} >Agregar</button>
            </form>
            <ul>
                {tarea.map((item, idx, lista)=> {
                    return (
                        <Tarea key={"tarea" + item +idx} {...item} handleStatus={handleStatusChange} index={idx} handleDelete={handleDeleteTarea}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListaDeTareas;
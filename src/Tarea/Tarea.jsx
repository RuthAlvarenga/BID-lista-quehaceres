import React from 'react'
import styles from './Tarea.module.css';

const Tarea = (props) => {
    return (
        <div className={styles.general}>
            <li className={styles.li}>{props.status == true ? 
            <s>{props.name}</s>
            :  props.name }
                <input type='checkbox' checked={props.status} onChange={(e)=>props.handleStatus(e.target.checked, props.index)}/>
                <button className={styles.btn} onClick={(e)=> props.handleDelete(props.index)}>Borrar</button>
            </li>
        </div>
    )
}

export default Tarea;
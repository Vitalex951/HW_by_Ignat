import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        console.log(props.affair._id)
        return props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <span>{props.affair.name}</span>
            <span className={s.someClass}>{props.affair.priority}</span>
            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

import React from 'react'
import {AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css';

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        console.log(props.affair._id)
        return props.deleteAffairCallback(props.affair._id)
    }
    // const someClassMain = (priority: string) => {
    //     return s.someClass + ' ' +  (s.priority)
    // }


    const someClassMain = s.someClass + ' ' + s[props.affair.priority]

    return (
        <div className={s.divPriorities}>
            <span>{props.affair.name}</span>
            <span className={someClassMain}>{props.affair.priority}</span>
            {/*<span className={someClassMain(props.affair.priority)}>{props.affair.priority}</span>*/}
            <button className={s.button} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair

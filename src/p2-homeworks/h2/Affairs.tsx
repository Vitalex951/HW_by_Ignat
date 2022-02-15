import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from "./HW2";
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix an
    filter: FilterType;
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void

}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />))


    const setAll = (() => props.setFilter('all'))
    const setHigh = (() => props.setFilter('high'))
    const setMiddle = (() => props.setFilter('middle'))
    const setLow = (() => props.setFilter('low'))

     const addClassButton = (filter: FilterType) => {
        return s.mainButton + ' ' + (filter === props.filter ? s.mainButtonPriority: '')
    }

    return (
        <div>

            {mappedAffairs}

            <button className={addClassButton('all')} onClick={setAll}>All</button>
            <button className={addClassButton('high')} onClick={setHigh}>High</button>
            <button className={addClassButton('middle')} onClick={setMiddle}>Middle</button>
            <button className={addClassButton('low')} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

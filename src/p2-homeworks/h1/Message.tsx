import React from 'react'
import s from './Message.module.css';

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.grid}>
            <img src={props.avatar} className={s.img}/>
            <div className={s.answer}>
                <div className={s.nameGrid}>{props.name}</div>
                <div className={s.gridInside}>
                    <div className={s.messageGrid}>{props.message}</div>
                    <div className={s.timeGrid}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
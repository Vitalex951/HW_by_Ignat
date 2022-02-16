import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: () => void // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = ()// need to fix with (?:)

    return (
        <div className={s.main}>
            <input value={name} onChange={setNameCallback} className={s.inputName}/>
            <button className={s.addButton} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>
                <span className={s.textError}>{error}</span>
            </div>

        </div>
    )
}

export default Greeting

import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    // let onStyle = {
    //     width: "150px",
    //     backgroundColor: "#e6abed",
    //     border: {error === 'Error'? ("3px solid red"): ("1px solid black")},
    //     borderRadius: "5px"
    // }
    //
    let input = error? s.inputError: s.inputName
    let disabled = error? true: false

    return (
        <div className={s.main}>
            <input value={name} onChange={setNameCallback} className={input}/>
            <button disabled={disabled} className={s.addButton} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>
                <span className={s.textError}>{error}</span>
            </div>

        </div>
    )
}

export default Greeting

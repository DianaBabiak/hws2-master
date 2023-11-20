import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: (error:string)=>void, setName: (name:string)=>void, addUserCallback: (name:string)=>void) => {
   if (name.replace(/\s/g, '')===''){
       setError("Ошибка! Введите имя!")
   } else {
       addUserCallback(name)
       setName('')
   }


    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
    if (name.replace(/\s/g, '')===''){
        setError("Ошибка! Введите имя!")
    }

}

export const pureOnEnter = (e: {key: string}, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    if(e.key === 'Enter'){
        addUser()
    }

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [totalUsers, setTotalUsers]=useState<number>(0)

    const setNameCallback = (e:string) => { // need to fix any
        setName(e) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
        setTotalUsers(r=>r+1)
        setName('')
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: string) => {
        pureOnEnter({key: e}, addUser)
    }


    const lastUserName = users.length ? users[users.length-1].name :''// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

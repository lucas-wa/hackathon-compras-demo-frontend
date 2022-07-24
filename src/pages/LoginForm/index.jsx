import { useState } from "react";
import api from "../../services/api";
import "./styles.scss"

export function LoginForm({handleUserLogin}){

    const [userLogin, setuserLogin] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(event, handleUserLogin){
        event.preventDefault();

        const response = await api.post("/login", {
            userLogin,
            password
        });

        const user = response.data;

        if(user) handleUserLogin(user)


    }

    return (
        <div className="LoginFormContent" onSubmit={(event) => handleSubmit(event, handleUserLogin)}>
            <form method="POST">
                <p>Digite CNPJ ou email da empresa</p>
                <input type="text" 
                placeholder="Digite seu CNPJ ou email" 
                onChange={(event) => setuserLogin(event.target.value)} 
                required/>

                <p>Digite sua senha</p>
                <input type="password" 
                name="" 
                id="" 
                placeholder="Crie uma senha" 
                onChange={(event) => setPassword(event.target.value)} 
                required/>


                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
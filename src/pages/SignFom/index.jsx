import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./styles.scss";

export function SignForm() {

    const [cnpj, setCnpj] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    async function handleSubmit(event) {
        event.preventDefault();

        // await api.post("/users", {
        //     cnpj,
        //     email,
        //     password
        // })

        // console.log()

    }

    return (
        <div className="SignFormContent">



            <form method="POST" onSubmit={(event) => handleSubmit(event)}>
                <h2>Insira seus dados</h2>
                <section className="fields">
                    <label className="dadosolicitado" htmlFor="entrada1">CNPJ: </label>
                    <input
                        id="entrada1"
                        className="dadoextraido"
                        type="text"
                        onChange={(event) => setCnpj(event.target.value)}
                    />
                </section>


                <section className="fields">

                    <label className="dadosolicitado" htmlFor="entrada2">E-mail: </label>
                    <input
                        id="entrada2"
                        className="dadoextraido"
                        type="text" />
                </section>

                <section className="fields">

                    <label className="dadosolicitado" htmlFor="entrada3">Telefone: </label>
                    <input
                        id="entrada3"
                        className="dadoextraido"
                        type="text" />
                </section>

                <section className="fields">

                    <label
                        className="dadosolicitado"
                        htmlFor="entrada4">Senha: </label>
                    <input
                        id="entrada4"
                        className="dadoextraido"
                        type="password" />
                </section>

                <section className="fields">

                    <label className="dadosolicitado" htmlFor="entrada5">Confirmar Senha: </label>
                    <input
                        id="entrada5"
                        className="dadoextraido"
                        type="password" />
                </section>

                <div className="botoes">

                    <Link
                        to="/dashboard"
                        id="botao_logar"
                        type="button"
                        value="Já sou cadastrado"
                    >
                        <p>
                        Cadastrar

                        </p>

                    </Link>

                    <input
                        id="botao_logar"
                        type="button"
                        value="Já sou cadastrado"
                    // onClick={logar} 
                    />

                </div>

            </form>

        </div>



        // <div className="content" onSubmit={(event) => handleSubmit(event)}>
        //     <form method="POST">
        //         <p>Digite CNPJ da empresa</p>
        //         <input type="text" 
        //         placeholder="Digite seu CNPJ" 
        //         onChange={(event) => setCnpj(event.target.value)} 
        //         required/>

        //         <p>Digite o email cadastrado em seu CNPJ</p>
        //         <input type="text" 
        //         placeholder="Digite o email" 
        //         onChange={(event) => setEmail(event.target.value)} 
        //         required/>

        //         <p>Digite sua senha</p>
        //         <input type="password" 
        //         name="" 
        //         id="" 
        //         placeholder="Crie uma senha" 
        //         onChange={(event) => setPassword(event.target.value)} 
        //         required/>


        //         <button type="submit">Cadastrar</button>
        //     </form>
        // </div>
    )
}
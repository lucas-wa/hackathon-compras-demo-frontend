import { SignForm } from '../SignFom';
import "./styles.scss"

export function Authenticate({ handleUserLogin }) {



    return (
        <div className="AuthenticateContent">

            <header>
                <h2>
                    Bem Vindo ao site de compras rápidas do Governo
                </h2>
            </header>

                <div className="triangulo1" id="superior_esquerdo1"></div>
                <div className="triangulo1" id="inferior_direito1"></div>
                <div className="triangulo2" id="inferior_direito2"></div>
                <div className="triangulo2" id="superior_esquerdo2"></div>
                <div className="triangulo3" id="superior_esquerdo3"></div>
                <div className="triangulo3" id="inferior_direito3"></div>

            <SignForm />




        </div>
    )
}
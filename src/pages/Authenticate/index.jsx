import { useContext } from 'react';
import { Context } from '../../context/Context';
import { SignForm } from '../SignFom';
import { SharedFooter } from '../../components/SharedFooter';
import "./styles.scss"
import { SharedMenu } from '../../components/SharedMenu';

export function Authenticate({ handleUserLogin }) {


    return (
        <div className="AuthenticateContent">
            {/* 
            <header>
                <h2>
                Bem vindo ao site de compras do governo federal Acha Fácil Sicaf
                </h2>
            </header> */}
            {/* 
                <div className="triangulo1" id="superior_esquerdo1"></div>
                <div className="triangulo1" id="inferior_direito1"></div>
                <div className="triangulo2" id="inferior_direito2"></div>
                <div className="triangulo2" id="superior_esquerdo2"></div>
                <div className="triangulo3" id="superior_esquerdo3"></div>
                <div className="triangulo3" id="inferior_direito3"></div> */}


            <header>
                <div className="logo">
                    <img src="/logo.svg" alt="" />
                </div>

                <SharedMenu />
            </header>

            <SignForm />

            <SharedFooter />




        </div>
    )
}
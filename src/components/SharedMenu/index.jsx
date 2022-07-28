import { AiOutlineUser, AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";

import "./styles.scss"

export function SharedMenu() {

    function handleMenu(event){

        const  navBar = document.querySelector(".navBar");

        navBar.classList.toggle("sr-only")

    }
    return (

        <>
            <nav className="navBar sr-only">

                <ul >
                    <li>
                        Home
                    </li>
                    <li>
                        Meus Produtos
                    </li>
                    <li>
                        Meus Serviços
                    </li>
                    <li>
                        Opções
                    </li>
                </ul>
            </nav>
            <AiOutlineMenu
                className="menuSvg"
                onClick={(event) => handleMenu(event)}
            />
        </>

    )
}
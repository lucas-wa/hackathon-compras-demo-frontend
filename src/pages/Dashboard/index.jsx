import { useState } from "react";
import { AiOutlineUser, AiOutlinePlus, AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
import { SharedFooter } from "../../components/SharedFooter";
import { SharedMenu } from "../../components/SharedMenu";
import "./dashboard.scss"


export function Dashboard() {

    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [isModalHidden, setIsModalHidden] = useState(true);
    const [modalAddItem, setModalAddItem] = useState("");

    function handleModal(value){
        setIsModalHidden(value)
    }

    function handleAddItems(value){
        if(modalAddItem == "product") setProducts(prevState => [...prevState, value])
        if(modalAddItem == "service") setServices(prevState => [...prevState, value])
        if(modalAddItem == "contact") setContacts(prevState => [...prevState, value])
    }

    function handleDeleteItem(item, key){

        function deleteItem(prevState){
                const prev = [...prevState];
    
                prev.splice(Number(key), 1);
    
                return prev 
        }

        if(item == "product") setProducts(prevState => deleteItem(prevState))
        if(item == "service") setServices(prevState => deleteItem(prevState))
        if(item == "contact") setContacts(prevState => deleteItem(prevState))
    }

    function handleMenu(event){

        const  navBar = document.querySelector(".navBar");

        navBar.classList.toggle("sr-only")

    }


    return (
        <>
            {
               !isModalHidden 
               && 
               <Modal 
               itemToAdd={modalAddItem} 
               handleAddItems={handleAddItems} 
               handleModal={handleModal}
               />
            }

            <div className="DashboardContent">
                <header>
                    <div className="userInfos">
                        <div className="userUndefined">
                            <AiOutlineUser />

                        </div>
                        <span>
                            <strong>
                                Distribuidora Cerveja {"&"} Cia
                            </strong>
                            <p>
                                Responsável: Daiane Melo
                            </p>
                            <p>
                                CNPJ: 371573840001-80
                            </p>
                        </span>
                    </div>

                    <AiOutlineMenu 
                    className="menuSvg"
                    onClick={(event)=>handleMenu(event)}
                    />

<SharedMenu/>


                </header>
                <main>
                    <section className="products">
                        <span>
                            <h2>Produtos</h2>
                                <AiOutlinePlus
                                 onClick={() => {
                                    setModalAddItem("product")
                                    handleModal(false)
                                }}
                                />
                        </span>

                        {
                            products.map((el, idx) => (
                                <span className="item" key={idx}>
                                    <p>
                                    {`${el[0]}: R$ ${el[1]}`}
                                    </p>
                                    <GrClose 
                                    onClick={() => handleDeleteItem("product", idx)}/>
                                </span>
                            ))
                        }

                    </section>

                    <section className="products">
                        <span>
                            <h2>Serviços</h2>                                <AiOutlinePlus
                                 onClick={() => {
                                    setModalAddItem("service")
                                    handleModal(false)
                                }}
                                />
                        </span>
                        {
                            services.map((el, idx) => (
                                <span className="item" key={idx}>
                                <p>
                                {`${el[0]}: R$ ${el[1]}`}
                                </p>
                                <GrClose 
                                onClick={() => handleDeleteItem("service", idx)}/>
                            </span>
                            ))
                        }
                    </section>

                    <section className="products">
                        <span>
                            <h2>Contatos</h2>
                            <AiOutlinePlus
                                 onClick={() => {
                                    setModalAddItem("contact")
                                    handleModal(false)
                                }}
                                />
                        </span>
                        {
                            contacts.map((el, idx) => (
                                <span className="item" key={idx}>
                                    <p>
                                    {`${el[0]}: ${el[1]}`}
                                    </p>
                                    <GrClose 
                                    onClick={() => handleDeleteItem("contact", idx)}/>
                                </span>
                            ))
                        }
                    </section>
                </main>

                <SharedFooter/>
            </div>
        </>
    )
}
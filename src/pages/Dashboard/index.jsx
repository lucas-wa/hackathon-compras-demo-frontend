import { useState } from "react";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modal";
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
        if(item == "product") setProducts(prevState => {
            const prev = [...prevState];

            prev.splice(Number(key), 1);

            return prev 
        })
        if(item == "service") setServices(prevState => {
            const prev = [...prevState];

            prev.splice(Number(key), 1);

            return prev 
        })
        if(item == "contact") setContacts(prevState => {
            const prev = [...prevState];

            prev.splice(Number(key), 1);

            return prev 
        })
    }


    return (
        <>
            {
               !isModalHidden && <Modal itemToAdd={modalAddItem} handleAddItems={handleAddItems} handleModal={handleModal}/>
            }

            <div className="DashboardContent">
                <header>
                    <div className="userInfos">
                        <div className="userUndefined">
                            <AiOutlineUser />

                        </div>
                        <p>
                            <strong>
                                Empresa
                            </strong>
                        </p>
                    </div>
                    <nav className="navBar">

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
                            <h2>Servicos</h2>                                <AiOutlinePlus
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
                                    {`${el[0]}: R$ ${el[1]}`}
                                    </p>
                                    <GrClose 
                                    onClick={() => handleDeleteItem("contact", idx)}/>
                                </span>
                            ))
                        }
                    </section>
                </main>
                <footer>
                    <p>&copy; AchaFacilSicaf</p>
                    <div className="appInfos">
                        <Link to="#">SICAF</Link>
                        <Link to="#">Governo Federal</Link>
                        <Link to="#">Compras.gov</Link>
                    </div>
                </footer>
            </div>
        </>
    )
}
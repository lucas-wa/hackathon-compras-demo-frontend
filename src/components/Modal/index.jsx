import { useState } from "react";
import "./styles.scss"


export function Modal({ handleModal, handleAddItems, itemToAdd }) {

    const [itemName, setIntemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    const itemAdd = itemToAdd == "product" ? 
    " Produto"
    :
    itemToAdd == "service" ?
    " Serviço"
    :
    " Contato"

    function handleCloseModal(event) {
        event.preventDefault();

        handleModal(true)

    }

    function handleAddAnyItem(value){
        
        handleAddItems(value);
    } 

    return (
        <div className="modalWrapper">
            <div className="modal">
                <h2>
                    Adicione um
                    {
                        itemAdd

                    }
                </h2>

                <form>
                    <span className="fields">
                        <label htmlFor="productName">
                            {
                                itemToAdd == "contact"
                                ?
                                `Adicione a rede social: `
                                :
                                `Nome do ${itemAdd.toLowerCase()}: `
                            } 
                        </label>
                        <input 
                        type="text" 
                        name="productName" 
                        id="productName" 
                        onChange={(event) => setIntemName(event.target.value)}/>
                    </span>

                    <span className="fields">
                        <label htmlFor="productPrice">
                        {
                                itemToAdd == "contact"
                                ?
                                `Adicione seu usuário: `
                                :
                                `Preço do ${itemAdd.toLowerCase()}: `
                            } </label>
                        <input 
                        type="text" 
                        name="productPrice" 
                        id="productPrice" 
                        onChange={(event) => setItemPrice(event.target.value)}/>
                    </span>

                    <div>
                        <button type="submit"
                        onClick={(event) => {
                            handleCloseModal(event)
                            handleAddAnyItem([itemName, itemPrice])
                        }

                        }
                        >
                            Adicionar
                        </button>
                        <button
                        onClick={(event) => {
                            handleCloseModal(event)
                        }}
                        >
                            Cancelar
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}
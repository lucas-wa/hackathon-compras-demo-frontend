import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./styles.scss"


export function Modal({ handleModal, handleAddItems, itemToAdd }) {

    const [itemName, setIntemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");

    let selectOptions;

    const itemAdd = itemToAdd == "product" ? 
    " Produto"
    :
    itemToAdd == "service" ?
    " Serviço"
    :
    " Contato"

    if(itemToAdd == "product"){
        // itemAdd = "product";

        selectOptions = <>
            <option value="alimentos">Alimentos</option>
            <option value="bebidas">Bebidas</option>
            <option value="escritorio">Produtos de Papelaria</option>
            <option value="construcao">Materiais de Construção</option>
            <option value="outros">Outros</option>
        </>;

    }else if(itemToAdd == "service"){
        selectOptions = <>
        <option value="ti">Tecnologia da Informação</option>
        <option value="eletrica">Eletricista</option>
        <option value="tecnico">Serviços Técnicos</option>
        <option value="marketing">Trabalhos com Marketing</option>
        <option value="outros">Outros</option>
    </>;
    }else{
        selectOptions = <>
        <option value="instagram">Instagram</option>
        <option value="twitter">Twitter</option>
        <option value="facebook">Facebook</option>
        <option value="linkedin">Linkedin</option>
        <option value="whatsapp">Whatsapp</option>
        </>;
    }

    function handleCloseModal(event) {
        event.preventDefault();

        handleModal(true)

    }

    function handleAddAnyItem(value){
        
        handleAddItems(value);
    } 

    function handleAddContactName(){
        
    }

    return (
        <div className="modalWrapper">
            <div className="modal">
                <AiOutlineClose
                className="closeModal"
                onClick={(event) => {
                    handleCloseModal(event)
                }} 
                />
                <h2>
                    Adicione um
                    {
                        itemAdd

                    }
                </h2>

                <form>

                    <span className="fields">
                    <label htmlFor="productCategory">
                            {
                                itemToAdd == "contact"
                                ?
                                `Adicione a rede social: `
                                :
                                `Categoria do ${itemAdd.toLowerCase()}: `
                            } 
                        </label>
                        <select 
                        name="" 
                        id="selectCategory"
                        onChange={
                            (event)=>{
                                if(itemToAdd == "contact") {
                        
                                    const select = event.target;
                                    setIntemName(`${select.options[select.selectedIndex].text}`)

                                }
                            }
                        }
                        
                        >
                            {
                                selectOptions
                            }
                        </select>
                    </span>

{
                    itemToAdd != "contact" 
                    &&                 
                    <span className="fields">
                        <label htmlFor="productName">
                            {
                                `Nome do ${itemAdd.toLowerCase()}: `
                            } 
                        </label>
                        <input 
                        type="text" 
                        name="productName" 
                        id="productName" 
                        onChange={(event) => setIntemName(event.target.value)}/>
                    </span>
}
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
                            handleAddContactName()
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
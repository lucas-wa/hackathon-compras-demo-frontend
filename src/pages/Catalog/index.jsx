import { useEffect } from "react";
import { useContext } from "react";
import { SharedFooter } from "../../components/SharedFooter";
import { Context } from "../../context/context";

import "./styles.scss"

export function Catalog() {

    const {handleRootHeight} = useContext(Context);

    const providers = [...new Array(10).keys()].map(el => `Fornecedor ${el}`);



    return (
        <>
            <div className="catalogContent">
                <section id="secao_cima" className="secoes_para_encontrar_compradores">
                    <input id="div_de_pesquisa" placeholder="Pesquise um produto ou serviço" />
                    <div id="secao_de_filtros">

                        <select name="Estado" id="filtro1" className="filtros">
                            <option value="Estado">Estado</option>
                        </select>
                        <select name="Cidade" id="filtro2" className="filtros">
                            <option value="Cidade">Cidade</option>
                        </select>
                        <select name="Atividade econÃ´mica" id="filtro3" className="filtros">
                            <option value="Atividade econÃ´mica">
                                Atividade econÃ´mica
                            </option>
                        </select>
                    </div>
                </section>

                <section id="secao_meio" className="">


                    {
                        providers.map((el, idx) => (
                            <div className="dados_dos_fornecedores" key={idx}>
                                <div className="imagem_fornecedor">
                                    {/* <img src="" alt="" /> */}
                                </div>
                                <strong className="nome_fornecedor">
                                    {el}
                                </strong>
                            </div>
                        ))
                    }

                </section>

                <section id="secao_baixo" className="secoes_para_encontrar_compradores">
                    <div id="voltar_pagina"></div>
                    <div id="paginas_de_vendedores"></div>
                    <div id="avancar_pagina"></div>
                </section>

            </div>
            <SharedFooter />
        </>
    )
}
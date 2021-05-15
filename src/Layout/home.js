import React from 'react'
import './layout.css'
import "bulma";

//componentes
import Header from './../components/header'
import { BiChevronsDown } from "react-icons/bi";

export default function Home() {
    return(
        <nav className="hero is-fullheight background" id="home">
            <div className="hero-head">
                <Header />
            </div>
            
            <div className="hero-body">
                <div className="container has-text-centered " style={{ paddingInline:"10%"}} >
                    <p className="title is-size-2-fullhd is-size-4-mobile is-size-4-touch " style={{color:"#2b2b2b"}} >INTERLOCUÇÃO E AUTONOMIA NAS <br /> PRÁTICAS DE PESQUISAS MARGINAIS</p>
                    <p className="subtitle is-size-5-fullhd is-size-7-mobile is-size-7-touch is-size-6-desktop" style={{color:"#2b2b2b"}} >Visando contribuir para o debate envolvendo gênero, raça e sexualidade, o Grupo de Estudos em Geografia Humana Aplicada, através da metodologia científica de análise de conteúdo, desenvolveu este programa para a elaboração de gráficos que possibilitem uma análise mais ampla e rica das subjetividades contidas em diversas palavras.</p>
                </div>
            </div>

            <div className="hero-foot" style={{ paddingBottom: "15px"}} >
                <div className="container has-text-centered">
                    <BiChevronsDown className="CircleYellon" style={{width:"40px", height:"40px", color:"#fff" }} />
                </div>
            </div>
            
        </nav>
    )
}

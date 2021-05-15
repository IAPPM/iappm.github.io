import React from 'react'

import {SiInstagram } from "react-icons/si";
import {ImYoutube2} from "react-icons/im";
import './layout.css'
import "bulma";

export default function Contato(){
    return(
        <>
        <nav className="is-fluid" id="contato" >
            <div className="backgroundblue" style={{width: '100%', height:'15px'}} ></div>
            <div className="columns">
                <div className="column backgroundblue" >
                    <div className='hero'>
                        {/* <div className=''> */}
                            <div className='is-fluid'>
                                <h1 className='title has-text-centered has-text-primary-light is-size-4-fullhd is-size-4-mobile is-size-4-touch' style={{marginTop: '1%' }} >GRUPO DE PESQUISA EM GEOGRAFIA HUMANA APLICADA</h1>
                                <div className="linhaContato has-background-light"  />
                            </div>
                            <div className='container is-fluid'>
                                <p className='has-text-centered has-text-primary-light is-size-5-fullhd is-size-6-desktop is-size-5-mobile is-size-5-touch' >Local: Universidade Federal de São João Del Rei Campus Tancredo Neves (CTAN)</p>
                                <p className='has-text-centered has-text-primary-light is-size-5-fullhd  is-size-7-desktop is-size-5-mobile is-size-5-touch' >Av. Visconde de Rio Preto S/Nº (BR494KM2) Colônia do Bengo, São João Del-Rei - MG CEP: 36301-36</p>
                                <p className='has-text-centered has-text-primary-light is-size-5-fullhd is-size-6-desktop is-size-5-mobile is-size-5-touch' >Contato: ghap@ufsj.edu.br</p>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="column has-background-light has-text-centered">
                    <div className='container is-fluid has-text-primary-black' style={{width:"100%" , margin:'auto'}} >
                        {/* <a href='http://facebook.com' target='blank' style={{color: '#4a4a4a' }} > <SiFacebook style={{width:'60px', height:'60px', margin: '25px' }}/> </a> */}
                        <a href='https://www.instagram.com/ghap.ufsj/' target='blank' style={{color: '#4a4a4a' }}><SiInstagram style={{width:'60px', height:'60px', margin: '25px' }} href='/#'/> </a>  
                        <a href='https://www.youtube.com/channel/UCaXCHf2YgKM1oaXtLySCIcA' target='blank' style={{color: '#4a4a4a' }}><ImYoutube2 style={{width:'100px', height:'60px', margin: '25px' }} href='/#'/></a>
                        <p style={{marginTop:'1%'}} className='has-text-centered has-text-grey is-size-5-fullhd is-size-5-mobile is-size-5-touch' >
                        Copyright &#169; 2021, GHAP All rights reserved. <br />
                            Emerson Junio Silva Costa - Isadora Silva Araújo
                        </p> 
                        <p className='has-text-centered has-text-grey-lighter is-size-6-fullhd is-size-6-mobile is-size-6-touch'>v1.0 (beta)</p>
                        
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
import {useReducer, useState} from 'react'
import "bulma";

//componentes
import Form from './../components/form'
import {Graph, myChart} from './../graph/Graph'
//graph
import {dataInicial, reducer, addcont} from "./../graph/data"
import MyDocument from "./../components/pdfGenerator";
import { PDFDownloadLink } from '@react-pdf/renderer'


const Metodologia = props => {
    const [state, dispatch] = useReducer(reducer, dataInicial)
    function gettxt(txt, assunto, ignoreWord, swichChoose){
        addcont(dispatch, txt, assunto, ignoreWord, swichChoose)
    }
    //Notificação no grafico
    function toggleGraphModal() {
        document.querySelector('.modal').classList.toggle('is-active');
        setTimeout(()=>{ document.querySelector('.popup').classList.toggle('hide'); }, 1000)
    }
    return(
        
        <nav className="fullheight has-background-white" id="metodologia">
            <div className="backgroundnavbar line" > </div>
              {/* NavBAr */}
            <nav className="container is-fluid" >
                {/* corpo */}
                <div className="container is-fluid">
                    <div className="container is-fluid">
                        <div className="container is-fluid">
                            <h1 className="title is-size-1" style={{marginTop: "1%", color: '#474f67' }} >Metodologia</h1>
                            <div className="linha marginbotton backgroundblue" />
                            <div className="columns" style={{flex: 1, alignItems: 'center',  justifyContent: 'center'}} >
                                <div className="column is-two-fifths">
                                    <Form analisar={gettxt} modal={toggleGraphModal} />
                                </div>
                                <div className="column has-text-centered" style={{maxWidth: '75vh', maxHeight: '75vh', margin:'auto' }}>
                                    <div className="container is-fluid" >
                                        <p className='mb-5 is-size-4' >  </p>
                                        <Graph  data={state} />
                                    </div>
                                    <a href="#Metodologia" className="button mt-5 m-5" onClick={toggleGraphModal} >Mais detalhes</a>
                                    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf" className="button mt-5 m-5" >
                                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Baixar pdf')}
                                    </PDFDownloadLink>
                                    {/* <a    target='blank' className="button mt-5 m-5"  >Gerar pdf</a> */}
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
           
            
                <div className="modal">
                <div className="modal-background " />
                    <div className="modal-content" style={{width: '95%', height: '95%', borderRadius:'25px'}} >  
                        <div className="modal-card"  style={{width: '100%', height: '100%', borderRadius:'25px'}} >
                            <section className="modal-card-body">
                                <div className="notification is-primary popup" style={{position:"absolute", zIndex: 1000 }} >
                                    Clique no <strong>X</strong> para fechar. <br /> Clique em cima da palavra para ocutar-la. <br /> Clique com o botão direito para salvar o grafico. <br /> Use ctrl + P para salvar como PDF.
                                </div>
                                <div className="container is-fluid has-background-white" >
                                    <p className='mb-5 is-size-3' style={{ textAlign:'center' }}  > </p>
                                    <Graph  data={state} /> 
                                </div>
                            </section>
                        </div>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={toggleGraphModal} />
                </div>
            </nav>
        </nav>
        
    )

}

export default Metodologia;
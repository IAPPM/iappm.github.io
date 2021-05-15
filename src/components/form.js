import {useState} from "react"
import { TextField, Switch } from '@material-ui/core';

const Form = props => {
    const [txt, settxt] = useState("")
    const [assunto, setassunto] = useState("")
    const [ignoreWord, setIgnoreWord] = useState("")
    const [swichChoose, setswichChoose] = useState("")
    function handleAnalisar(){
        props.analisar(txt, assunto, ignoreWord, swichChoose)
        toggleLoad()
    }

    function toggleLoad() {
        document.querySelector('#Analisar').classList.toggle('is-loading');
        document.querySelector('#Analisar').classList.toggle('is-warning');
        setTimeout(()=>{ 
            document.querySelector('#Analisar').classList.toggle('is-loading'); 
            document.querySelector('#Analisar').classList.toggle('is-warning');
        },1000)
    }
    return(
        <nav className="forms" >
            <div className="field" >
                <div className="control">
                    <form className="textdforms" noValidate autoComplete="off">
                        <TextField id="standard-basic" fullWidth label="Assunto"  onChange={e => setassunto(e.target.value) } />
                        <TextField id="standard-basic" fullWidth label="Palavras ignoradas" style={{marginTop: '35px'}} onChange={e => setIgnoreWord(e.target.value)} />
                        <p className="is-size-7-fullhd is-size-7-desktop is-size-full-7 mt-2 has-text-danger" >Coloque aqui as palavras que deseja que não seja analisadas no texto. <br />Use entre ponto e virgula, ex.: palavra; palavra; </p>
                        <TextField id="outlined-multiline-static" 
                            fullWidth label="Espaço reservado para o texto" 
                            multiline
                            rows={10}
                            rowsMax={30}
                            variant="outlined"
                            style={{marginTop: '35px', height:'100%' }}
                            value={txt}
                            onChange={e => settxt(e.target.value) }
                        />
                        <p className="is-size-6 mt-2 has-text-danger" ></p>
                        
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <a href="#Metodologia" className="button" style={{marginTop: '35px'}} onClick={e => settxt("") } >Limpar</a>
                                </div>
                            </div>
                            <div className="level-item" style={{marginTop: '35px'}} >
                                <label> Inteiro </label>
                                <Switch color="secondary" onChange={e => setswichChoose(e.target.checked)  } />
                                <label> Porcentagem </label>
                            </div>

                            <div className="level-rigth" id="form" >
                                <div className="level-item">
                                    <a href="#Metodologia" className="button" id="Analisar" style={{marginTop: '35px'}} onClick={handleAnalisar} > Analisar</a>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="notification is-primary mt-5" >
                        Ao trocar entre inteiro e porcentagem, e necessario analisar novamente!
                    </div>
                </div>
            </div>
        </nav>
        
    )
}
export default Form;
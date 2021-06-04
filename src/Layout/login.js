import {useState } from 'react'
import './layout.css' 
import "bulma"; //Bulma
import logo from '../img/logo.png' //Logo
import { TextField } from '@material-ui/core'; //MaterialUi
import { login } from "./../firebase/contextauth"; //Firebase
import {useHistory} from 'react-router-dom' //Router

export default function Login(props){

    const [stateLogin, setloguin] = useState("")
    const [StatePass, setpass] = useState("")
    const [stateerror, seterror] = useState(false) 
    
    let history = useHistory();
    //Função de autenticação.

    const authlogin = () => {
        
        login(stateLogin, StatePass).then(
            () => { props.click(); history.push("/home")},
            
        )
        .catch(
            () => {
                seterror(true)
        })
        
        
    }

    return(
        <nav className="has-background-light" style={{height:'100vh' }} >
            <div className="columns is-centered" >
                <div className="card has-text-centered" style={{minWidth: '25%', width: 'auto', borderRadius:'5%', marginTop:'10%'}} >

                    <div className="card-content has-text-centered has-background-white">
                        <img className="my-5" src={logo} alt="Logo" width="125" height="28" />
                    </div>
                    <div className="card-content has-background-light" >
                        <div className="container pt-5 mx-6 has-text-centered mb-6">
                            {/* <h1 className="title is-size-5" style={{width:'25%'}}> LOGIN </h1> */}
                            <div className="notification is-danger popup" style={{display:'none'}} > Email ou senha incorreta </div>
                            <TextField type="text" className="my-4" id="standard-basic" fullWidth label="Login" onChange={e => setloguin(e.target.value)} error={stateerror} />
                            <TextField type="password" className="my-4" id="standard-basic" fullWidth label="Senha" onChange={e => setpass(e.target.value)} error={stateerror} />
                            <div className="level">
                                <div className="level-left"></div>
                                <div className="level-rigth">
                                    <div className="level-item">
                                        <button className="button has-background-light" onClick={e => authlogin()} >Logar</button>
                                    </div>
                                </div>
                            </div>
                            <h2 className="mt-5" >Não tem cadastro? <br /> Mande um email para <strong><a href="http://ghap@ufsj.edu.br" target="blank" className="has-text-black-bis" >ghap@ufsj.edu.br</a></strong> </h2>
                        </div>

                    </div>
                
                </div>
            </div>
        </nav>
    )

}
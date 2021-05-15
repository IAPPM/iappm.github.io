import react from 'react'
import './layout.css'
import "bulma";
import logo from '../img/logo.png'
export default function Login(){

    return(
        <nav >
            <div className="modal">
                <div className="modal-background" />
                <div className="modal-content backgroundblue" style={{width: '25%', height: '50%', borderRadius: "25px"}} >
                    <div className="has-text-centered has-background-light">
                        <img className="my-5" src={logo} alt="Logo" width="125" height="28" />
                    </div>
                    <div className="container pl-2 pt-2" style={{width:'25%'}}>
                        <h1 className="title is-size-5 has-text-success-light"> LOGIN </h1>
                    </div>

                </div>
            </div>
        </nav>
    )

}
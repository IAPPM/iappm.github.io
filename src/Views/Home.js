import Header from './../Layout/home'
import Metodologia from './../Layout/metodologia'
import Contato from './..//Layout/contato'
import {useHistory} from 'react-router-dom' //Router
//import {Logged} from './../firebase/Data'

export default function Home(props){
    let history = useHistory();
    if(props.logged === false){
        history.push("/Login");
    }
    
    return(
        <div>
            <Header />
            <Metodologia />
            <Contato />
        </div>
        
    )
    
}
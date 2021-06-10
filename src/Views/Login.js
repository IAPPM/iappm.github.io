import Login from './../Layout/login'
import News from './../components/news'
export default function LogIn(props){
    props.setLogger()
    return(
        <div>
            <Login />
            {/* <News /> */}
        </div>
        
    )
}
const Button =(props) =>{
    console.log(props)
    return <button class="btn btn-primary" onClick={props.callback} style={{backgroundColor: '#0c74db', color:'white'}}>{props.label}</button>
}

export default Button
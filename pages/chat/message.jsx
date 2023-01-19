
export default  function Message(props){
    return(<div >
        <hr/>
        user:{props.userId} ,
        {props.message}
    </div>)
}
import Message from "./message";

export default  function Messages(){
    let messages=[{userId:1,message:"tom"},
        {userId:2,message:"rick"}]
    return(<div style={{height:"400px",overflowY:"auto"}}>
        Messages
        {messages.map(e=><Message userId={e.userId} message={e.message}/>)}

    </div>)
}
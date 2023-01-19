const ws = require('ws');

const wss=new ws.Server({
    port:8080,
},()=>console.log("server started on port:8080"))

wss.on("connection",function connection(ws){
    //ws.id=Date.now()-это и будет айдишник комнаты если приватные чаты
    /*ws.send('user with uid connected successfully ')*/
    ws.on("message",function (message){
        message=JSON.parse(message);
        switch (message.event){
            case "message":
                broadcastMessage(message)
                break
            case "connection":
                broadcastMessage(message)
                break
        }
    })
})
function broadcastMessage(message,id){
    wss.clients.forEach(client=>{
        //наша комната
        /*if (client.id===id){
            client.send(JSON.stringify(message))
        }*/
        client.send(JSON.stringify(message))
    })
}

const message={
    event:'message/connection',
    id:1,
    date:"18.01.23",
    username:"Yehor",
    message:"my first message"
}
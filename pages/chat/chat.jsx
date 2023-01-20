import Messages from "./messages";
import AddMessageForm from "./addMessageForm";
import { ReactMediaRecorder } from "react-media-recorder"
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"


export default function Chat() {

  
    const socket = useRef()
    const [connected, setConnected] = useState(false)
    const [messages, setMessages] = useState([])
    const [userName, setUserName] = useState('yehorFirst')
    const [value, setValue] = useState("")
   
    const connect = () => {
        socket.current = new WebSocket("ws://localhost:8080")

        socket.current.onopen = () => {
            setConnected(true)
            console.log("open connect")
            const message = {
                event: "connection",
                username: userName,
                id: Date.now()
            }
            socket.current.send(JSON.stringify(message))
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            setMessages(prev => [message, ...prev])
        }
        socket.current.onclose = () => {
            console.log("socket close")
        }
        socket.current.onerror = () => {
            console.log("socket error")
        }
    }


    const sendMessage = async () => {
        const message = {
            username: userName,
            message: value,
            id: Date.now(),
            event: "message"
        }
        socket.current.send(JSON.stringify(message))
        setValue('')
    }

    if (!connected) {
        return (
            <div>
                <input
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    type="text" placeholder="what is your name" />
                <button onClick={connect}>log-in</button>

                <br />no connected to webSocket<br />
                Try node webSocketServer.js
            </div>
        )
    }


   

    return (<div>
        <div >
            <div>
                <motion.div transition={{ duration: 3, times: [0, 0.2, 1] }} animate={{rotate:2,x: [0, 100, 0],y:5}}  className="form">
                    <input value={value} onChange={e => setValue(e.target.value)} type="text" />
                    <button  onClick={sendMessage}>Отправить</button>
                   

                </motion.div>
                <div style={{ "maxHeight": "100px", "overflow": "auto", "padding": "15px", "backgroundColor": "azure" }} >
                    {messages.map(mess =>
                        <div key={mess.id}>
                            {mess.event === 'connection'
                                ? <div className="connection_message">
                                    Пользователь {mess.username} подключился
                                </div>
                                : <div >
                                    {mess.username}. {mess.message}
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/*<WebSocket url="ws://localhost:8080"
        onMessage={(e)=>setChat(e)}/>*/}
        <hr />
        <Messages />
        <AddMessageForm />
        
    </div>)



}
import { motion } from "framer-motion"

export default  function Message(props){
    return(<motion.div animate={{ color:'#ff2993'}}>
        <hr/>
        user:{props.userId} ,
        {props.message}
    </motion.div>)
}
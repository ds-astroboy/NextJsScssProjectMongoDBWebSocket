import {FcSupport} from 'react-icons/fc'
import Link from "next/link";
import style from "./header.module.scss"
//import { motion } from "framer-motion"
//animate={{fontSize:50}} 
const Header=()=>{
    return(
        <header>
        <div className={style.header}>
           <FcSupport/>
           <nav  className={style.movePage}>
               <Link href="/">home</Link><br/>
               <Link href="/creator">about me</Link><br/>
               <Link href="/chat/chat">chat</Link><br/>
               <Link href="/elements/somethingNew">something new</Link><br/>
               <Link href="/comments">comments</Link><br/>
           </nav>
        </div>
        </header>
    )
}
export default Header;
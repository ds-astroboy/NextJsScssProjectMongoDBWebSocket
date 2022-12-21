import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Err=()=>{
    const routeTo=useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            routeTo.push('/')
        },3000)
    },[]);

    return(
        <div style={{backgroundColor:"red"}}>
            my error<br/>
            <Link href='/'>go to main</Link>
        </div>
    )
}
export default Err;
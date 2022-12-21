import {Head} from "next/document";
import style from "./comments.module.scss"


const Comments=({comments})=>{
    return(<>
         {/* <Head>
              <title>comments | reviews</title>
              <meta name="comments" content="comments about"/>
          </Head>*/}
            <div className={style.allComments}>
                <div>
                    commments:
                </div>
                {comments?comments.map(e=><div className={style.oneComment} key={e.id}>{e.id}{" :"}{`${e.body.slice(0,60)}...`}</div>):<div>no comments</div>}
            </div>
        </>
    )
}

export async function getServerSideProps(){
    const res=await fetch('https://jsonplaceholder.typicode.com/comments')
    const comments=await res.json()
    return {
        props:{
            comments:comments.slice(0,100),
        }
    }
}

export default Comments;
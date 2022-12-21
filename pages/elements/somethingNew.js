import Head from 'next/head'
import Link from "next/link";

export const getStaticProps = async ()=>{
    const res=await fetch("http://localhost:5000/item")
    const data= await res.json();

    return{
        props:{
            data
        }
    }
}

export default function SomethingNew({data}) {
  return (
    <>
      <Head>
        <title>SomethingNew</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
            SomethingNew title
            <h6>
                SomethingNew
            </h6>
            {data.map(e=>{
              return(
                  <div>{e.id}.
                      <Link href={`/elements/${e.id}`} key={e.id}>{e.name}</Link >
                      <br/>
                      {e.desc}
                  </div>
              )
            })}
        </div>
      </main>
    </>
  )
}

import Head from 'next/head'
import Link from "next/link";

export async function getStaticPaths() {
    const res=await fetch("http://localhost:5000/item")
    const data= await res.json();

    const paths = data.map(e=>{
        return{
        params:{country: e.id.toString()}
    }
    })
    return{
        paths,
        fallback:  false  // 404page if no page with our url
    }
}

export const  getStaticProps =async (context)=>{
    const id=context.params.country;

    const res=await fetch(`http://localhost:5000/item/${id}`);
    const data= await res.json();

    return {
        props: {country :data}
    }
}

const oneCountry=({country})=> {
    debugger
    return (
        <>
            <Head>
                <title>Country</title>
                <meta name="Country" content="Country description" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
               <div>
one country
                  Id: {country.id}
               </div>
                <div>
                    {country.name}
                </div>
                <div>
                    {country.desc}
                </div>
            </main>
        </>
    )
}
export default oneCountry;
import Head from 'next/head'
import Link from "next/link";
import {useRouter} from "next/router";

export async function getStaticPaths() {
    const res=await fetch("http://localhost:5000/item")
    const data= await res.json();
    if (!data) {
        return {
            notFound: true
        }
    }
    const paths = data.map(e=>{
        return{
        params:{countryId: e.id.toString()}
    }
    })
    return{paths, fallback:  false }
}

export const  getStaticProps =async (context)=>{
    const id=context.params.countryId;

    const data=await (await fetch(`http://localhost:5000/item/${id}`))?.json();
//    const data= await res.json();
    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: {country :data}
    }
}

const oneCountry=({country})=> {
    const router = useRouter()

    // Если страница еще не сгенерирована, будет отображаться это
    // До тех пор, пока `getStaticProps` не закончит свою работу
    if (router.isFallback) {
        return <div>Загрузка...</div>
    }else return (
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
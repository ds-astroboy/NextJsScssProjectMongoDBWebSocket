import Head from 'next/head'
import Link from "next/link";
import { motion, useCycle } from "framer-motion"



export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/item")
  const data = await res.json();

  return {
    props: {
      data
    }
  }
}


export default function SomethingNew({ data }) {
  //motion variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -400
    },
    visible: {
      opacity: 1,
      marginTop: 30,
      color: "#ff2993",
      x: 30,
      transition: {
        duration: 2, type: "spring", stiffness: 200
        //when:"beforChildren|afterChildren"
        //its we can use if many variants

        //mass:0.4,
        //damping:8,
        //staggerChildren:0.4,
      }
    },
    firstAnimation: {
      marginBottom:100,
      color: "green",
      scale: 2,
      originX: 0,
      whileHover:{
        color:"pink"
      }
      
    },
    secondAnimation: {
      marginBottom:100,
      color: "yellow",
      scale: 3,
      originX: 0,
      
    }
  }

  const [myVariant, changeVariant] = useCycle("firstAnimation", "secondAnimation")

  return (
    <>
      <Head>
        <title>SomethingNew</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <motion.div initial={{x:-400,opacity:0.1}}
         animate={{opacity:1,marginTop:30, color:'#ff2993',x:30}}
         transition={{duration:2 ,type:"spring" ,stiffness:200}}> */}
        <motion.div variants={containerVariants}
          initial="hidden"
          animate="visible">
          <motion.h6 whileHover={{ color: 'red', scale: [1.5, 1, 1.5, 1, 1.5], originX: 0, type: "spring", stiffness: 10 }}>
            SomethingNew
          </motion.h6>
          {data.map(e => {
            return (
              <motion.div animate={{ marginBottom: 10, marginTop: 30, scale: 1.1, x: 150 }}>{e.id}.
                <motion.div whileHover={{ scale: 1.2, originX: 0 }}>
                  <Link href={`/elements/${e.id}`} key={e.id}>{e.name}</Link >
                </motion.div>
                {e.desc}
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div  variants={containerVariants}
          animate={myVariant}
          drag
          onClick={() => changeVariant()}>
          my useCycle
        </motion.div>

<motion.div drag="x">
  drag X
</motion.div>
<motion.div drag="y">
  drag y
</motion.div>
<motion.div drag>
  drag without limits
</motion.div>
<motion.div drag dragElastic={0.3} dragConstraints={{left:0,top:0,right:0,bottom:100}}>
  drag with limits
</motion.div>
        <motion.div whileHover={{ y: [-10, 0, -10, 0, -10, 0, -10, 0] }}>
          jo-jo
        </motion.div>

      </main>
    </>
  )
}

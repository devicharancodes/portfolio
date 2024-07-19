import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import {  motion } from "framer-motion";

const iconVariants = (duration)=>({
    initial :{y:-10},
    animate : {
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
        <motion.h1 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}}
         className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiJavascript1 className="text-7xl bg-yellow-500 text-black" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiNodejs className="text-7xl text-green-400" />
        </motion.div>
        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiMongodb className="text-7xl text-green-300" />
        </motion.div>
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
import eu from "../assets/EUBG.png"
import { motion } from "framer-motion";


const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

function Hero() {
    
    return(
        <div className="relative w-full h-screen flex bg-[#FFFFFF] section-padding overflow-hidden">

            <div className="absolute flex justify-center items-center inset-0 z-0 pointer-events-none overflow-hidden">
                <h1 className="text-[20rem] text-white opacity-60 font-bold -z-10 font-['Montserrat'] whitespace-nowrap select-none" style={{textShadow: `5px 5px 28px rgba(0,0,0,0.08)`}}>developer.</h1>
            </div>

            <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full z-10 h-full absolute right-0 md:w-[45%] pointer-events-none object-cover" 
                src={eu} alt=""
            >
            </motion.img>

            <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="transition-all h-full relative z-20 flex flex-col justify-end gap-2 p-5 md:p-10 text-white md:text-black"
            >

                <motion.p
                    variants={item}
                    className="text-xl hidden tracking-widest text-gray-300 md:text-gray-500 md:inline mb-4 font-['Montserrat']"
                >
                    JOÃO GABRIEL
                </motion.p>

                <motion.h1
                    variants={item}
                    className="text-4xl md:text-6xl font-bold font-['Montserrat']"
                >
                    Desenvolvedor
                    <br />
                    Front-end
                </motion.h1>

                <motion.p 
                    variants={item}
                    className="text-xl mt-6 text-gray-300 md:text-gray-600 font-['Montserrat']"
                >
                    Crio aplicações web utilizando React e
                    Tailwind CSS.
                </motion.p>

                <motion.div 
                    variants={item}
                    className="flex gap-2 mt-5 font-['Montserrat']"
                >

                    <a className="transition-all font-bold border-b-2 border-transparent hover:border-white md:hover:border-black hover:-translate-y-0.5" href="#projects">
                        Ver Projetos
                    </a>

                    <p>ou</p>

                    <a className="transition-all font-bold border-b-2 border-transparent hover:border-white md:hover:border-black hover:-translate-y-0.5" href="#contactMe">
                        Entrar em contato
                    </a>
                    
                </motion.div>

            </motion.div>

            

        </div>
    )
}

export default Hero;
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ContactForm from "./ContactForm"

function ContactMe() {
    return (
        <div id="contactMe" className="w-full section-padding scroll-mt-30">

            <div className="border-t border-black/15 pt-10 mt-10">
                <div className="flex flex-col gap-10 p-5 md:p-10 ">

                    <h1 className="text-center text-4xl md:text-6xl font-bold font-['Montserrat']">Vamos conversar</h1>

                    <p className="font-[Montserrat] text-black/90 text-xl text-center md:text-2xl">
                        Precisa de uma landing page ou um site moderno para o seu projeto?
                    </p>

                    <div className="flex justify-center p-2 gap-2">
                        <a className="transition-all p-4 flex justify-center items-center gap-2 rounded-4xl bg-[#212830] border border-black/40 text-white hover:-translate-y-1 " href="https://github.com/joaogabriel7845" target="_blank">
                            <FontAwesomeIcon className="text-xl" icon={faGithub}/>
                            <p className="hidden md:block font-[Montserrat] font-medium">GitHub</p>
                        </a>
                        <a className="transition-all w-fit p-4 flex justify-center items-center gap-2 rounded-4xl bg-[#212830] border border-black/40 text-white hover:-translate-y-1 " href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-743999342/" target="_blank">
                            <FontAwesomeIcon className="text-xl" icon={faLinkedin}/>
                            <p className="hidden md:block font-[Montserrat] font-medium">Linkedln</p>
                        </a>
                        <a className="transition-all w-fit p-4 flex justify-center items-center gap-2 rounded-4xl bg-[#212830] border border-black/40 text-white hover:-translate-y-1 " href="mailto:joaogabriel8182@gmail.com" target="_blank">
                            <FontAwesomeIcon className="text-xl" icon={faEnvelope}/>
                            <p className="hidden md:block font-[Montserrat] font-medium">Email</p>
                        </a>
                        
                    </div>

                </div>
            </div>

            <div className="flex items-center gap-4 my-8">
                <div className="h-px flex-1 bg-black/15"></div>

                <span className="text-black/50">
                    ou
                </span>

                <div className="h-px flex-1 bg-black/15"></div>
            </div>

            <div className="flex flex-col gap-10 p-5 md:p-10 ">

                <h1 className="text-center text-4xl md:text-6xl font-bold font-['Montserrat']">Solicite um orçamento</h1>

                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}

export default ContactMe
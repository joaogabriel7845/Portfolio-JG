import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faClapperboard, faDumbbell, faNoteSticky, faTooth } from "@fortawesome/free-solid-svg-icons";
import { faCss3, faGithub, faJs, faReact, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import projects from "../data/projects";
import stack from "../data/stack";
import Title from "./Title";

function Projects() {
    return (
        <div id="projects" className="w-full section-padding scroll-mt-35">

            <div className="flex flex-col gap-10 p-5 md:p-10">

                <Title>Meus Projetos</Title>

                <div className="w-full grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(380px,1fr))] gap-5 font-['Montserrat']">

                    {projects.map((p) => (
                        <div key={p.description} className="relative group transition-all flex border border-black/30 shadow-md flex-col flex-1 items-center hover:-translate-y-1 hover:shadow-2xl overflow-hidden rounded-xl" >
                            

                            <a href={p.link} target="_blank" rel="noopener noreferrer" className="relative block w-full">
                                <img className={"w-full h-48 object-cover"} src={p.img} alt="" />
                                <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 flex justify-center items-center">
                                    <FontAwesomeIcon className="transition-all bg-black/50 p-3 py-3.5 rounded-full md:opacity-0 group-hover:opacity-100 text-xl absolute hover:cursor-pointer" icon={faArrowUpRightFromSquare} color="white"/>
                                </div>
                            </a>

                            <a href={p.linkGit} target="_blank" rel="noopener noreferrer" className="hidden md:flex transition-all items-center gap-2 bg-[#212830] border border-[#151B23] px-3 backdrop-blur-md py-1.5 rounded-full md:opacity-0 group-hover:opacity-100 absolute top-2 right-2 hover:cursor-pointer text-white">
                                <FontAwesomeIcon className="text-xl" icon={faGithub} color="white"/>
                                <p className="text-sm">GitHub</p>
                            </a>

                            <div className="w-full flex md:hidden border-t border-black/15 font-medium">
                                <a
                                    href={p.link}
                                    className="flex-1 p-4 flex justify-center items-center gap-2"
                                >
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    Projeto
                                </a>

                                <a
                                    href={p.linkGit}
                                    className="flex-1 p-4 flex justify-center items-center gap-2 border-l border-black/15"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                    GitHub
                                </a>
                            </div>

                            
                            <div className="flex flex-1 flex-col border-t border-black/15">
                                
                                <div className="p-5 flex flex-col gap-4 border-b border-black/15">
                                    <h1 className="text-2xl font-['HelveticaNowDisplay-ExtraBold']">{p.name}</h1>
                                    <p>{p.description}</p>
                                </div>

                                <div className="flex flex-1 gap-3 p-5 justify-center items-center">
                                    {p.stack.map((s) => (
                                        <i key={s} className={`${stack.frontend[s].icon} text-3xl`}></i>
                                    ))}
                                </div>
                                

                            </div>

                        </div>
                    ))}
                </div>

                <div className="w-full flex justify-center border-b border-black/15 pb-10 mb-10">
                    <a className="transition-all w-fit p-4 flex justify-center items-center gap-2 rounded-xl bg-[#212830] backdrop-blur-md border-2 border-black/40 text-white hover:-translate-y-1  hover:shadow-[0px_0px_25px_0px_#151B23]" href="https://github.com/joaogabriel7845" target="_blank">
                        <FontAwesomeIcon className="text-xl" icon={faGithub}/>
                        <p className="font-[Montserrat] font-medium">Ver mais projetos</p>
                    </a>
                </div>

            </div>


        </div>
    )
}

export default Projects;
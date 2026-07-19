import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import stack from "../data/stack"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import tools from "../data/stack"
import StackGrid from "./StackGrid"
import Title from "./Title"

// const frontend = [
//     stack.react,
//     stack.tailwind,
//     stack.html, 
//     stack.css,
//     stack.javascript, 
// ]

// const tools = [
//     stack.tools.git,
//     stack.tools.github,
//     stack.tools.vite,
//     stack.tools.vscode
// ]


function Stack() {
    return (
        <div className="section-padding">
            <div className="flex flex-col gap-10 px-5 md:px-10">

                <Title>Stack</Title>

                <StackGrid 
                    title={"Frontend"}
                    items={Object.values(stack.frontend)}
                />

                <div className="border-t border-black/15 pt-10 mt-10">
                    <StackGrid
                        title={"Ferramentas"}
                        items={Object.values(stack.tools)}
                    />
                </div>

            </div>
        </div>
    )
}

export default Stack
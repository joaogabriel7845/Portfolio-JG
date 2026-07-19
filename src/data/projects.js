import odonto from "../assets/Projects/Odonto.png"
import ironfit from "../assets/Projects/IronFit.png"
import cinesearch from "../assets/Projects/CineSearch.png"
import bloghub from "../assets/Projects/BlogHub.png"
import { faClapperboard, faDumbbell, faNoteSticky, faTooth } from "@fortawesome/free-solid-svg-icons"

const projects = [
    {
        img: odonto,
        name: "OdontoPrime",
        description: "Landing page para clínica odontológica com FAQ, menu responsivo e animações.",
        icon: faTooth,
        link: "https://odonto-prime-eight.vercel.app/",
        linkGit: "https://github.com/joaogabriel7845/OdontoPrime",
        stack: ["react", "tailwind", "framer", "javascript"]
    },
    {
        img: ironfit,
        name: "IronFit",
        description: "Landing page para academia com carousel, planos e formulário WhatsApp.",
        icon: faDumbbell,
        link: "https://iron-fit-umber.vercel.app/",
        linkGit: "https://github.com/joaogabriel7845/IronFIT",
        stack: ["react", "tailwind", "framer", "javascript"]
    },
    {
        img: cinesearch,
        name: "CineSearch",
        description: "Web app de filmes com busca, detalhes e trailers usando a API do TMDB.",
        icon: faClapperboard,
        link: "https://cine-search-jade-three.vercel.app/",
        linkGit: "https://github.com/joaogabriel7845/cinesearch",
        stack: ["html", "css", "javascript"]
    },
    {
        img: bloghub,
        name: "BlogHub",
        description: "Blog com filtro por categoria, tema claro/escuro e carregamento simulado.",
        icon: faNoteSticky,
        link: "https://blog-hub-sepia.vercel.app/",
        linkGit: "https://github.com/joaogabriel7845/BlogHub",
        stack: ["react", "tailwind", "router", "javascript"]
    }
]

export default projects
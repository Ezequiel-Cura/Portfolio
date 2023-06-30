import chatterImage from "../assets/projects/Chatter.png"
import pokemonImage from "../assets/projects/PokemonProject.png"
import finanzasPersonales from "../assets/projects/FinanzasPersonales.png"
import EcommerceImage from "../assets/projects/E-commerce.png"


const data:IProjects[] = [
    // {
    //     id:0,
    //     name:"React JS Application",
    //     image:"",
    //     github:"",
    //     demo:"",
    //     description:""
    // },
    {
        id:1,
        name:"Chat App",
        image:chatterImage,
        github:"https://github.com/Ezequiel-Cura/Chatter",
        demo:"https://chatter-kappa.vercel.app/",
        description:"A basic chat app with Firebase and React"
    },
    {
        id:2,
        name:"E-Commerce",
        image:EcommerceImage,
        github:"https://github.com/Ezequiel-Cura/E-commerce-front",
        demo:"https://e-commerce-front-git-master-ezequiel-cura.vercel.app/",
        description:"A E-Commerce of gastronomic podructs made with React and Node, database MongoDB"
    },
    {
        id:3,
        name:"Finanzas Personal",
        image:finanzasPersonales,
        github:"https://github.com/Ezequiel-Cura/Proyecto-Final",
        demo:"https://proyecto-final-lime-beta.vercel.app",
        description:"Desarrollamos la App trabajando en el Front con React, Redux Toolkit, principalmente CSS puro, y algunas librerías como Material UI, Numeral.js. En el Back, el desarrollo fue con Node.js y Express. La base de datos fue creada usando MongoDb Atlas y Mongoose. Trabajamos con la metodología Scrum y la plataforma Trello. Deployado con Herouku y Vercel."
    },
    {
        id:4,
        name:"PokemonApi",
        image:pokemonImage,
        github:"https://github.com/Ezequiel-Cura/Pi-Pokemon-FT25a",
        demo:"https://pi-pokemon-ft-25a.vercel.app",
        description:"Es una pagina web en donde podras visualizar una lista de pokemons traida de una API, mas los pokemons creados por el usuario. Al entrar a la pagina te encotras con un Landingm que tiene un boton que redirecciona al Home. Aqui esta toda la logica, en el Home es donde se pueden ver todos los Pokemons, tambien se pueden filtrar y ordenar, o buscar un pokemon por nombre en la searchBar. Hay varios botones donde te pueden llevar a una pagina para crear Pokemons, un paginado para ver todos los pokemons, y un boton que te lleva a los detalles del pokemons seleccionado, donde podras ver mas informacion que la vista en el Home."
    },
]

export default data

interface IProjects{
    id:number
    name:string
    image:any
    description:string
    github:string
    demo:string
}
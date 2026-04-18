import {Link} from "react-router-dom"
export default function Amanda(){
    return(
        <article>
        <h2>Amanda Jeanette Slettli</h2>
        <img src="/profil_img/anonym.png" alt="profil bilde"/>
        <section>
             <h3>Informasjon:</h3>
             <p>Epost: <Link>amandajs@hiof.no</Link></p>
             <p>Bachelorstudie: Digitale medier og design</p>
        </section>
        </article>
    )
}
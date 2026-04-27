import { Link } from "react-router-dom";

export default function Louise() {
    return(
        <article>
            <h2>Louise Østensen</h2>
            <img src="/profil_img/profilbilde1.png" alt="profil bilde" />
            <section>
                <h3>Informasjon:</h3>
                <p>E-post: <Link>louiseos@hiof.no</Link></p>
                <p>Studie: Informasjonsteknologi, årsstudium</p>
            </section>
        </article>
    )
}
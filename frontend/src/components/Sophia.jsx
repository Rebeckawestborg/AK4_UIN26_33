import "./sophia.css";
import sophiaImg from "./philippasophia.png";

export default function Sophia() {
  return (
    <>
    <article className="om-meg-innhold">
      <img src={sophiaImg} alt="sophia" className="sophia-img" />
      <p><strong>Sophia Bildsten Helseth</strong></p>
      <p><strong>Bachelorstudium i Digitale medier og design</strong></p>
      <div>
      <p><strong>Min e-post: {" "}</strong></p>
      <a href="mailto:sphelset@hiof.no"><strong>sphelset@hiof.no</strong></a>
      </div>
    </article>
      </>
  );
}
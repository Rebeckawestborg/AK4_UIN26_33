import '../style/sophia.css';
import sophiaImg from '../assets/philippasophia.png';

export default function Sophia() {
  return (
    <>
    <section>
    <article className="om-meg-innhold">
      <h2>Sophia Bildsten Helseth</h2>
      <img src={sophiaImg} alt="sophia" className="sophia-img" />
      <p>Epost: {" "} <a href="mailto:sphelset@hiof.no">sphelset@hiof.no</a></p>
      <p>Bachelorstudium i Digitale medier og design</p>
    </article>
    </section>
      </>
  );
}
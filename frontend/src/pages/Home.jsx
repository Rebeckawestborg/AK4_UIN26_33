import Amanda from '../components/Amanda'
import Rebecka from '../components/Rebecka'
import AssigmentList from '../components/AssigmentList'
export default function Home(){
    return(
        <main>
            <section className='container'>
            <Amanda/>
            <Rebecka/>
            </section>
            <AssigmentList/>
        </main>
    )
}
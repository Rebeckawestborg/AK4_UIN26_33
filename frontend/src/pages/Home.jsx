import Amanda from '../components/Amanda'
import Rebecka from '../components/Rebecka'
import AssigmentList from '../components/AssigmentList'
import Sophia from '../components/Sophia'
import Louise from '../components/Louise'

export default function Home(){
    return(
        <main>
            <section className='container'>
            <Amanda/>
            <Rebecka/>
            <Sophia />
            <Louise/>
            </section>
            <AssigmentList/>
        </main>
    )
}
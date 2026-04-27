import Amanda from '../components/Amanda'
import Rebecka from '../components/Rebecka'
import AssigmentList from '../components/AssigmentList'
import Sophia from '../components/Sophia'

export default function Home(){
    return(
        <main>
            <section className='container'>
            <Amanda/>
            <Rebecka/>
            <Sophia />
            </section>
            <AssigmentList/>
        </main>
    )
}
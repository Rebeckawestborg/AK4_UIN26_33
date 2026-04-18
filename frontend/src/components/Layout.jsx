import {Outlet} from 'react-router-dom'
import Amanda from '../components/Amanda'
export default function Layout(){
    return(
        <>
        <header>
            <h1>Gruppe 33</h1>
        </header>
        <Amanda/>
        <Outlet/>
        </>
    )
}
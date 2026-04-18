import {Outlet} from 'react-router-dom'
import AssigmentList from "./AssigmentList"
export default function Layout(){
    return(
        <>
        <header>
            <h1>Gruppe 33</h1>
        </header>
        <main>
               <Outlet/>
        </main>
        </>
    )
}
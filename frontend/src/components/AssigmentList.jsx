import {useEffect, useState} from 'react'
import client from '../helper/client'
import AssigmentCard from './AssigmentCard'
export default function AssigmentList(){
    const [arbeidskrav, setArbeidskrav] = useState(null)

     useEffect(()=>{
        async function fetchAllArbeidskrav(){
            try{
                //| order(assigmentNumber asc) viser sorterer assigmentNumber fra lavest til høyest. Imens desc tar fra høyest til lavest.
                const allAssigment = await client.fetch("*[_type == 'assigment']| order(assigmentNumber asc){_id, assigmentName, assigmentNumber, assigmentInfo}")
                setArbeidskrav(allAssigment)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchAllArbeidskrav()
    }, [])
    return(
        <section id="AK">
            <h2>Arbeidskravene:</h2>
        {arbeidskrav && arbeidskrav.map(a=>(
           <AssigmentCard key={a._id} a={a}/>
        ))}
        </section>
    )
}
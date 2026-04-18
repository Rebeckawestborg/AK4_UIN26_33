export default function AssigmentCard({a}){
    return(
        <article>
         <h4>{a.assigmentName} {a.assigmentNumber}</h4>
         <p>{a.assigmentInfo}</p>
        </article>
    )
}
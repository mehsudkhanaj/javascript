'use client'
export default function lecture({params}){
    console.log(params)
    return (
        <div className="study">
            <h1>Lecture No: {params.lecture[0]}</h1>
            <h2> Day of College: {params.lecture[1]}</h2>
            
           </div>
    )
}
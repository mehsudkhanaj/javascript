'use client'
const employee = ({params}) => {
  return (
   <div>
    <h1>Employee {params.employee}</h1>
   </div>
  )
}

export default employee
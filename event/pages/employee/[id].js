import { useRouter } from 'next/router'
function Employeedetails () {
  const router = useRouter()
  const empid = router.query.id
  console.log(empid)
  return (
    <div>
      <h1>Employee Details {empid}</h1>
    </div>
  )
}

export default Employeedetails

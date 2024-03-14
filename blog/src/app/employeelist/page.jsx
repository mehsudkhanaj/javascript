'use client'
import Link from 'next/link'
//employee aray
const Employees = () => {
    const employee=['John Doe','Jane Smith', 'Tom Williams', 'Harry Johnson', 'Ronald D.','Sara Davis','Afridi','Dhoni','Imran khan']

  return (
    <div>
        <h1>Employee List</h1>
        <ul>
            <li><Link href='/employeelist/musavir'>Musavir</Link></li>
            <li><Link href='/employeelist/jamshed'>Jamshed</Link></li>
            <li><Link href='/employeelist/saim'>Saim</Link></li>
            <li><Link href='/employeelist/peter'>Peter</Link></li>
            <li><Link href='/employeelist/dada'>Dada</Link></li>
            <li><Link href='/employeelist/uzair'>Uzair</Link></li>
            {/* {
                employee.map((emp,id)=>{
                    return(
                        <div>
                            <li>
                                <Link key={id}href="/employee/">{emp}</Link>
                            </li>
                        </div>
                    )
                })
            } */}
        </ul>
    </div>
  )
}

export default Employees
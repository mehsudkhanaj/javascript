
// import custom from '../../custom.module.css'

// import other from '../../other.module.css'
// import outside from '@/style/outside.module.css'
// export default function page() {
//   return (
//     <main>
//     <h1 className={custom.main}>
//         main class global
//     </h1>
//     <h1 className={other.main}>
//     main class global second class

//     </h1>
//     <h1 className={outside.main}>        outside css
// </h1>


//     </main>
//   )
// }

'use client'
import custom from '../../custom.module.css'
import {useState} from 'react'

export default function page() {
    const [color, setcolor] = useState('red')
  return (
    <main>
        <h1 className={color=='red'?custom.main:custom.green}>
            Conditonal styling
        </h1>
        <h2 style={{backgroundColor: color=='red'?'red':'green'}}>Heading 2</h2>
        <button onClick={()=>setcolor('green')}>Update color</button>
   


    </main>
  )
}



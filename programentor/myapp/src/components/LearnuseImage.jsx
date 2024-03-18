import Image from 'next/image'
import Pex from '/public/pex.jpg'
const LearnuseImage = () => {
  return (
    <>
    <Image src={Pex} alt='forest' 
    fill={true}
    

    />
    </>
  )
}

export default LearnuseImage
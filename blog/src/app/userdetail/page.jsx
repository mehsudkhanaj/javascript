'use client'
import Script from 'next/script'
export default  function page(){
    return (
        <div>
            <h1>Get User Location</h1>
            <Script
            src='/location.jsx'
            onLoad={()=>{
                console.log('Function loaded')
            }}
            />
        </div>
    )
}
async function getData(){
  const res= await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}
const LearnDatafetch = async() => {
  const data=await getData();
  console.log(data);
  return (
    <div>
      {
        data.map((post,i)=>(
          <div key={i}>
            <h1>{post.name}</h1>
            <p>{post.email}</p>
          </div>
        ))
      }
    </div>
  )
}

export default LearnDatafetch
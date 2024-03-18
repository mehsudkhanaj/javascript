'use client'
async function productlist(){
    let response=await fetch('https://dummyjson.com/products');
    response=await response.json();
    return response.products
    

}
export default async function (){
    let products =await productlist();
    // console.log(products)
    return (
        <>
        {products.map((item)=>{
            return <div key={item._id}>
                <h3>{item.title}</h3>
                </div>


        })}
        </>
    )


}
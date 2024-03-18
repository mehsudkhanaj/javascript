async function userList() {
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}

export default async function Page() {
    let users = await userList();
   

    return (
        <div>
            <h1>User Name List</h1>
            {users.map((item)=>
            (
                <h2>User Name : {item.firstName}</h2>
            )
            )}
        </div>
    );
}

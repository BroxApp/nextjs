
const users = [
    {id: 1, name: "Ali1", email: "example1@gmail.com"},
    {id: 2, name: "Ali2", email: "example2@gmail.com"},
    {id: 3, name: "Ali3", email: "example3@gmail.com"},
    {id: 4, name: "Ali4", email: "example4@gmail.com"},
    {id: 5, name: "Ali5", email: "example5@gmail.com"},
    {id: 6, name: "Ali6", email: "example6@gmail.com"},
    {id: 7, name: "Ali7", email: "example7@gmail.com"},
    {id: 8, name: "Ali8", email: "example8@gmail.com"},
    {id: 9, name: "Ali9", email: "example9@gmail.com"},
]

export default async function ProfilePage ({params}: {params: Promise<{id: string}>;}){

    const {id} = await params;
    const user = users.find((user)=>user.id === Number(id))
    if(!user){
        return <p>Invalid ID</p>
    }
    return(
        <div>
            <h1>My Profile: {user.id}</h1>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    )
}

import { notFound } from "next/navigation";
import Image from "next/image";
type user = {
    name: {title: string; first: string; last: string;};
    gender: string;
    phone: string;
    cell: string;
    email: string;
    picture: {large: string; medium: string; thumbnail: string;}
    location: {country: string; state: string; city: string;
        street: {number: number; name: string;};
    };
}

export default async function ProfilePage ({params}: {params: Promise<{id: string}>}){

    const {id} = await params;
    const response = await fetch ("https://randomuser.me/api/?results=20", { cache: "force-cache" })
    const data = await response.json();
    const user = data.results.find (
        (user: user, index: number) => index + 1 === Number(id)
    );
    if(!user){
        notFound()
        // 404 not found
    }
    
    return(
        <div className="flex flex-col md:flex-row w-auto justify-center gap-4 mt-10 p-10 rounded-xl shadow-md bg-gray-400">
            <Image
                src={user.picture.large}
                alt="user picture"
                width={250}
                height={250}
                className=" rounded-full"
            />

            <div className="flex flex-col mt-6">
                <h2 className="mt-4 text-2xl font-bold ">
                    {user.name.title} {user.name.first} {user.name.last}
                </h2>

                <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Gender:</span> {user.gender}</p>
                    <p><span className="font-semibold">Phone:</span> {user.phone}</p>
                    <p><span className="font-semibold">Cell:</span> {user.cell}</p>
                    <p><span className="font-semibold">Email:</span> {user.email}</p>
                </div>
            </div>

            <div className="mt-6 pt-4">
                <h2 className="text-2xl font-bold">Location</h2>
                <p className="text-gray-700">
                    {user.location.country},{" "}
                    {user.location.state},{" "}
                    {user.location.city},{" "}<br/>
                    {user.location.street.name}{" "}
                    {user.location.street.number}
                </p>
            </div>

            <div className="mt-6 pt-4">
                <h2 className="text-2xl font-bold">Membership Duration</h2>
                <p className="text-gray-700">{user.registered.date}</p>
                <p className="text-gray-700">{user.registered.age} years</p>
            </div>
        </div>
    )
}

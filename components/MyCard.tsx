type MyCardProps = {
    name: string;
    email: string;
    phone: number;
}

export default function MyCard ({name, email, phone}: MyCardProps) {
    return (
        <div className="flex flex-col border-2 border-amber-400 p-4 m-4">
            <h2>My Dynamic/Static Card</h2>
            <p>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    )
}

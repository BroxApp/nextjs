import Button from "./Button"
type CardProps = {
    title: string;
    name: string;
    description: string;
}
export default function Card({name, description, title}: CardProps){
    return(
        <div className="flex flex-col border-2 border-amber-400 p-4 m-4 w-2xs">
            <h2>My {title}</h2>
            <p>{name}</p>
            <p>{description}</p>
            <Button title={title}/>
        </div>
    )
    
}
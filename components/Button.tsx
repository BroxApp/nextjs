"use client";
type ButtonProp = {
    title: string;
}
export default function Button({title}: ButtonProp){
    return(
        <button onClick={()=> alert (`This button clicked on ${title}`)
        } className="bg-amber-400 rounded-2xl">Click me</button>
    )
}
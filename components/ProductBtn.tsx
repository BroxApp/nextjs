"use client";
export default function ProductBtn (){
    return(
        <button 
        onClick={()=>alert ("Thanks for your shoping.")}
        className="border-2 border-amber-500 bg-amber-400 rounded-lg px-4"
        >Add to Cart</button>
    )
}
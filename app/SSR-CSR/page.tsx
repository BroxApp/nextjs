
import Card from "@/components/Card"
const products = [
    {title: "Card 1", name: "Phone", description: "This is phone."},
    {title: "Card 2", name: "laptop", description: "This is laptop."},
    {title: "Card 3", name: "ipad", description: "This is ipad."},
    {title: "Card 4", name: "headphone", description: "This is headphone."}
]

export default function ProductCard (){
    return (
        <div className="flex gap-4 justify-center bg-amber-50">
            {products.map((product, index)=>(
            <Card key={index} name={product.name} description={product.description} title={product.title}/>
            ))}
        </div>
    )
}
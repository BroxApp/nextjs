import Image from "next/image";
import img from"@/public/images/img.png";



export default function image(){
  return(
      <>
        <Image
        src={img}
        alt={""}
        width={200}
        height={200}
        />
    
    </>
  )
}
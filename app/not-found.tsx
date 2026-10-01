import Image from "next/image"

export default function notfound(){
    return(
        <div className="relative flex text-center justify-center items-center flex-col">
            <Image src="/images/404.png" alt="404 Error" width={600} height={600}
            className=""></Image>
            <p className="absolute bottom-10">Sorry, we could not find the page you are looking for. It might have been moved, deleted, or never existed.</p>
        </div>
    )
}
import Image from "next/image"

export default function notfound(){
    return(
        <div className="flex flex-col items-center justify-center px-4 text-center">
            <Image 
            src="/images/404.png" 
            alt="404 Error" 
            width={600} 
            height={600}
            className="h-auto max-h-[65vh] w-auto max-w-full object-contain"
            />
            <p className="mt-4 max-w-md text-sm text-gray-800">Sorry, we could not find the page you are looking for. It might have been moved, deleted, or never existed.
            </p>
        </div>
    );
}

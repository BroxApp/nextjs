import Link from "next/link";
import { Vazirmatn} from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets:["arabic"],
  weight: ["400", "500", "700"]
})

export default function Home() {
  return (
    <div 
    style={{backgroundImage: "url('/images/BroxApp.png')", 
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
    className={`${vazirmatn.className} flex flex-col flex-1 items-center font-sans text-gray-50`}>
    </div>
  );
}

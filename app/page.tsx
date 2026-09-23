import Link from "next/link";
import { Vazirmatn} from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets:["arabic"],
  weight: ["400", "500", "700"]
})

export default function Home() {
  return (
    <div className={`${vazirmatn.className} flex flex-col flex-1 items-center bg-zinc-200 font-sans dark:bg-black`}>
      <h1 className="font-extrabold m-4">React Vs Nextjs</h1>
      <Link href="/react-vs-nextjs-en" className="font-medium">React Vs Nextjs (English)</Link>
      <Link href="/react-vs-nextjs-fa" className="font-medium">React Vs Nextjs (Farsi)</Link>
    </div>
  );
}

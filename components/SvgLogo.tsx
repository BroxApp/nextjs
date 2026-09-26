import { LuInfinity } from "react-icons/lu";

export default function Logo() {
  return (
    <div className="flex gap-1 items-center">
      <LuInfinity className="text-amber-500 text-3xl" />
      <span className="text-xl font-bold text-amber-500 tracking-wide">
        Boundless
      </span>
    </div>
  );
}

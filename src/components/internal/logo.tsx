import Image from "next/image";
import icon from "../../../public/icon.png";
import Link from "next/link";

export function Logo() {
  return (
    <>
      <Link href={"/"}>
        <div className="flex items-center justify-center gap-2">
          <Image src={icon} alt="Icone de pato" width={32} height={32} />
          <div className="flex items-center justify-center gap-1 border-b-2 rounded-bl-lg border-amber-300">
            <span className="bg-amber-300 p-0.5 text-xl rounded-md rounded-br-none font-bold text-background">
              QCK.
            </span>
            <span className="text-xl font-black">Link</span>
          </div>
        </div>
      </Link>
    </>
  );
}

import Image from "next/image";
import icon from "../../../public/icon.png";

export function Logo() {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Image src={icon} alt="Icone de pato" width={32} height={32} />
        <div className="flex items-center justify-center gap-1 border-b-2 border-amber-300">
          <span className="bg-amber-300 p-0.5 text-xl font-bold text-background">
            QCK
          </span>
          <span className="text-xl font-bold">.link</span>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";

export function Logo() {
  return (
    <>
      <Link href={"/"}>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-1 border-b-2 rounded-bl-md border-amber-300">
            <span className="bg-amber-300 p-0.5 text-xl rounded-sm rounded-br-none font-bold text-background">
              QCK.
            </span>
            <span className="text-xl font-black">Link</span>
          </div>
        </div>
      </Link>
    </>
  );
}

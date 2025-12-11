import Image from "next/image";
import { getSession } from "@/lib/auth/auth";

async function Heading() {
  const session = await getSession();

  return (
    <div className="px-4 items-center flex border-b border-r-0">
      <div className="flex items-center gap-1 ml-auto">
        {session.user?.image && (
          <div className="relative size-9 overflow-hidden rounded-full bg-accent flex items-center justify-center pointer-events-none">
            <Image src={session.user.image} alt="Profile Picture" fill />
          </div>
        )}
      </div>
    </div>
  );
}

export { Heading };

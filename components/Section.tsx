import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Section({ children }: Props) {
  return <section className="flex flex-col py-10 w-[90%] mx-auto text-center">{children}</section>;
}

export { Section };

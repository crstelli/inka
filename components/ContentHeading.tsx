import type { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function ContentHeading({ children }: Props) {
  return (
    <div className="bg-secondary flex items-center justify-between px-12">
      <h1 className="text-xl">New Note #1</h1>
      {children}
    </div>
  );
}

export { ContentHeading };

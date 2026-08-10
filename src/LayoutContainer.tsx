import { PropsWithChildren } from "react";

export function LayoutContainer({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="w-lg flex flex-col mx-auto justify-center min-h-svh">
        {children}
      </div>
    </div>
  );
}

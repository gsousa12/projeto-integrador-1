import type { ReactNode } from "react";

interface GlobalWrapperProps {
  children: ReactNode;
}

export const GlobalWrapper = ({ children }: GlobalWrapperProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {children}
    </div>
  );
};

import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="animated-bg" />
      <div className="floating-shapes">
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
        <div className="shape" />
      </div>
      <main>
        {children}
      </main>
    </>
  );
}

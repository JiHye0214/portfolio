import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-[1200px] h-[calc(100vh-96px)] mx-auto">
      {children}
    </div>
  );
};

export default Layout;

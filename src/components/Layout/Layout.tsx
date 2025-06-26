import { type ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  id: string;
  children: ReactNode;
}

function Layout({ id, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header id={`Layout__header__${id}`} />
      {children}
      <Footer id={`Layout__footer__${id}`} />
    </div>
  );
}

export default Layout;

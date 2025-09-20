import { type ReactNode } from "react";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen w-full">
            {/* Navbar */}
            {/* Will be uncommented when the home page is ready */}
            {/* <Navbar /> */}
            
            {/* Main content wrapper */}
            <div className="flex flex-col min-h-screen">
            {/* Page content with top padding to account for fixed navbar */}
            <main className="flex-1 pt-0 sm:pt-0">{children}</main>
                
            {/* Footer */}
            {/* Will be uncommented when the home page is ready */}
            {/* <Footer /> */}
            </div>
        </div>
    );
}
import { type ReactNode } from "react";
import { Navbar } from "../components/common/Navbar";
// import { Sidebar } from "./Sidebar";
import { Footer } from "../components/common/Footer";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen w-full overflow-hidden">
            {/* Main content wrapper */}
            <div className="flex flex-col flex-1">
                {/* Page content */}
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
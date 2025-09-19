import { type ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen w-full">
            {/* Main content wrapper */}
            <div className="flex flex-col min-h-screen">
                {/* Page content */}
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
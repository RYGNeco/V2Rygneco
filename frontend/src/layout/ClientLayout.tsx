// frontend/src/layout/ClientLayout.tsx
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ClientSidebar from '../components/dashboard/client/ClientSidebar';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';

const ClientLayoutContent = () => {
    const { isCollapsed } = useSidebar();

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <ClientSidebar />
            <main className={`flex-1 p-8 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};

const ClientLayout = () => {
    return (
        <SidebarProvider>
            <ClientLayoutContent />
        </SidebarProvider>
    );
};

export default ClientLayout;
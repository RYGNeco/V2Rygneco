import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/dashboard/admin/AdminSidebar';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import { SidebarProvider, useSidebar } from '../context/SidebarContext';

const AdminLayoutContent = () => {
    const { isCollapsed } = useSidebar();
    
    return (
        <div className="flex bg-gray-100 min-h-screen">
            <AdminSidebar />
            <main className={`flex-1 p-8 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
                <Suspense fallback={<LoadingSpinner />}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};

const AdminLayout = () => {
    return (
        <SidebarProvider>
            <AdminLayoutContent />
        </SidebarProvider>
    );
};

export default AdminLayout;
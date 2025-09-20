// Better organized imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import { ToastProvider } from "./components/ui/Toast";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Layout components
import Layout from "./layout/HomeLayout";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import AuthLayout from "./layout/AuthLayout";
import ClientLayout from "./layout/ClientLayout";

// Lazy load pages
const HomePage = lazy(() => import("./pages/shared/HomePage"));
const LoginPage = lazy(() => import("./pages/auth/LoginPage"));
const SignupPage = lazy(() => import("./pages/auth/SignupPage"));
const NotFoundPage = lazy(() => import("./pages/shared/NotFoundPage"));
const ComingSoonPage = lazy(() => import("./pages/shared/ComingSoonPage"));

// Admin routes
const AdminLayout = lazy(() => import("./layout/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminMetrics = lazy(() => import("./pages/admin/AdminMetrics"));

// Client routes
const ClientHistory = lazy(() => import("./pages/client/ClientHistory"));
const ClientRequests = lazy(() => import("./pages/client/ClientRequests"));
const UserManagement = lazy(() => import("./pages/client/UserManagement"));

// Create a client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Suspense wrapper
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {children}
  </Suspense>
);

// Main app layout with navbar and footer
function MainLayout() {
  return (
    <Layout>
      <SuspenseWrapper>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<ComingSoonPage />} />
        </Routes>
      </SuspenseWrapper>
    </Layout>
  );
}

// Auth layout
function AuthLayoutWrapper() {
  return (
    <AuthLayout>
      <SuspenseWrapper>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Add catch-all route inside auth layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SuspenseWrapper>
    </AuthLayout>
  );
}

// Admin layout
function AdminLayoutWrapper() {
  return (
    <SuspenseWrapper>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="metrics" element={<AdminMetrics />} />
          {/* Add catch-all route inside admin layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </SuspenseWrapper>
  );
}

// Client layout
function ClientLayoutWrapper() {
  return (
    <SuspenseWrapper>
      <Routes>
        <Route element={<ClientLayout />}>
          <Route index element={<ClientHistory />} />
          <Route path="requests" element={<ClientRequests />} />
          <Route path="profile" element={<UserManagement />} />
          {/* Add catch-all route inside client layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </SuspenseWrapper>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <Router>
            <Routes>
              {/* Auth routes */}
              <Route path="/auth/*" element={<AuthLayoutWrapper />} />

              {/* Admin Dashboard routes */}
              <Route path="/admin/*" element={<AdminLayoutWrapper />} />

              {/* Client Dashboard routes */}
              <Route path="/client/*" element={<ClientLayoutWrapper />} />

              {/* Main app routes */}
              <Route path="/" element={<MainLayout />} />

              {/* 404 page - without layout */}
              <Route path="*" element={
                <SuspenseWrapper>
                  <NotFoundPage />
                </SuspenseWrapper>
              } />
            </Routes>
          </Router>
        </ToastProvider>
        {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
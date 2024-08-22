import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

const LoginRequiredClient = ({ children }: { children: React.ReactNode }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname(); // Get the current path

    useEffect(() => {
        if (status === 'unauthenticated' && pathname !== '/admin/login') {
            // Redirect to login page if not authenticated and not already on the login page
            router.push('/admin/login');
        }
    }, [status, router, pathname]);

    if (status === 'loading') {
        // Return a loading indicator or nothing while the session is loading
        return <div>Loading...</div>;
    }

    if (status === 'unauthenticated' && pathname !== '/admin/login') {
        // Prevent rendering children when redirecting
        return null;
    }

    // Return children if authenticated or already on the login page
    return <>{children}</>;
};

export default LoginRequiredClient;



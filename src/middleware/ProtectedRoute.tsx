import React, { useEffect }  from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');
  const isAuthenticatedParam = queryParams.get('isAuthenticated') === 'true';
  const fromOAuthParam = queryParams.get('fromOAuth') === 'true';

  useEffect(() => {
    // Store token and flags in local storage if token is present
    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('isAuthenticated', isAuthenticatedParam.toString());
      localStorage.setItem('fromOAuth', fromOAuthParam.toString());
    }
  }, [token, isAuthenticatedParam, fromOAuthParam]);
  // Mock definitions or logic for isAuthenticated and fromOAuth
  // In a real application, these would be dynamically set based on user authentication.
  
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; 
  // This would typically indicate that the user has logged in (e.g., after verifying credentials).

  const isFromOAuth = localStorage.getItem('fromOAuth') === 'true'; 
  // This flag could indicate that the user completed an OAuth-based login (e.g., via Google).

   
  // Check if both flags are true
  if (!isAuthenticated || !isFromOAuth) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If authenticated, render the child components
  return <>{children}</>;
}

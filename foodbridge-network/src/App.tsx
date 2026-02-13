// // import { Toaster } from "@/components/ui/toaster";
// // import { Toaster as Sonner } from "@/components/ui/sonner";
// // import { TooltipProvider } from "@/components/ui/tooltip";
// // import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import Navbar from "@/components/Navbar";
// // import Landing from "@/pages/Landing";
// // import Donor from "@/pages/Donor";
// // import Volunteer from "@/pages/Volunteer";
// // import Admin from "@/pages/Admin";
// // import Login from "./pages/Auth/Login";
// // import Signup from "./pages/Auth/Signup";
// // import NotFound from "./pages/NotFound";

// // const queryClient = new QueryClient();

// // const App = () => (
// //   <QueryClientProvider client={queryClient}>
// //     <TooltipProvider>
// //       <Toaster />
// //       <Sonner />
// //       <BrowserRouter>
// //         <Navbar />
// //         <Routes>
// //           <Route path="/" element={<Landing />} />
// //           <Route path="/donor" element={<Donor />} />
// //           <Route path="/volunteer" element={<Volunteer />} />
// //           <Route path="/admin" element={<Admin />} />
// //           <Route path="*" element={<NotFound />} />
// //         </Routes>
// //       </BrowserRouter>
// //     </TooltipProvider>
// //   </QueryClientProvider>
// // );

// // export default App;



//   import { Toaster } from "@/components/ui/toaster";
//   import { Toaster as Sonner } from "@/components/ui/sonner";
//   import { TooltipProvider } from "@/components/ui/tooltip";
//   import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//   import { BrowserRouter, Routes, Route } from "react-router-dom";
//   import Navbar from "@/components/Navbar";
//   import Landing from "@/pages/Landing";
//   import Donor from "@/pages/Donor";
//   import Volunteer from "@/pages/Volunteer";
//   import Admin from "@/pages/Admin";
//   import Login from "@/pages/Auth/Login";
//   import Signup from "@/pages/Auth/Signup";
//   import NotFound from "@/pages/NotFound";

//   const queryClient = new QueryClient();

//   const App = () => (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Navbar />
//           <Routes>
//             {/* Public Landing */}
//             <Route path="/" element={<Landing />} />
            
//             {/* Role-Based Dashboards */}
//             <Route path="/donor" element={<Donor />} />
//             <Route path="/volunteer" element={<Volunteer />} />
//             <Route path="/admin" element={<Admin />} />
            
//             {/* Auth Pages */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
            
//             {/* 404 Catch-All */}
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );

//   export default App;




// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { AuthProvider, useAuth } from "@/context/AuthContext"; // Ensure you created this file from Step 1
// import Navbar from "@/components/Navbar";
// import Landing from "@/pages/Landing";
// import Donor from "@/pages/Donor";
// import Volunteer from "@/pages/Volunteer";
// import Admin from "@/pages/Admin"; // This is the Dashboard
// import Receive from "@/pages/Receive"; // The new Receiver page
// import Login from "@/pages/Auth/Login";
// import Signup from "@/pages/Auth/Signup";
// import NotFound from "@/pages/NotFound";


// const queryClient = new QueryClient();

// // 🔒 Guard: Only allow access if Logged In
// const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
//   const { isAuthenticated } = useAuth();
//   if (!isAuthenticated) return <Navigate to="/login" replace />;
//   return children;
// };

// // 🔓 Guard: Only allow access if Logged OUT (Hides Landing/Login from logged-in users)
// const PublicOnlyRoute = ({ children }: { children: JSX.Element }) => {
//   const { isAuthenticated, user } = useAuth();
  
//   if (isAuthenticated && user) {
//     // Redirect to the correct dashboard based on role
//     if (user.role === "receiver") return <Navigate to="/admin" replace />; // Receivers go to Dashboard
//     if (user.role === "agent") return <Navigate to="/volunteer" replace />;
//     return <Navigate to="/donor" replace />; // Donors go to Donor Page (or Admin if you prefer)
//   }
//   return children;
// };

// const AppRoutes = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         {/* PUBLIC ROUTES (Hidden if logged in) */}
//         <Route path="/" element={<PublicOnlyRoute><Landing /></PublicOnlyRoute>} />
//         <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
//         <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />

//         {/* PROTECTED ROUTES (Requires Login) */}
//         <Route path="/donor" element={<ProtectedRoute><Donor /></ProtectedRoute>} />
//         <Route path="/volunteer" element={<ProtectedRoute><Volunteer /></ProtectedRoute>} />
        
//         {/* "Command Center" is now "Dashboard" mapped to /admin */}
//         <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        
//         {/* New Receiver Page */}
//         <Route path="/receive" element={<ProtectedRoute><Receive /></ProtectedRoute>} />

//         {/* 404 */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// };

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         {/* AuthProvider MUST be inside BrowserRouter to use 'useNavigate' */}
//         <AuthProvider>
//           <AppRoutes />
//         </AuthProvider>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;




import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import Landing from "@/pages/Landing";
import Donor from "@/pages/Donor";
import Volunteer from "@/pages/Volunteer";
import Admin from "@/pages/Admin"; 
import Receive from "@/pages/Receive"; 
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import NotFound from "@/pages/NotFound";
import Agent from "@/pages/Agent";

const queryClient = new QueryClient();

// 🔒 Guard: Only allow access if Logged In
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};

// 🔓 Guard: Only allow access if Logged OUT 
const PublicOnlyRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, user } = useAuth();
  
  if (isAuthenticated && user) {
    if (user.role === "receiver") return <Navigate to="/admin" replace />; 
    if (user.role === "agent") return <Navigate to="/volunteer" replace />;
    return <Navigate to="/donor" replace />; 
  }
  return children;
};

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<PublicOnlyRoute><Landing /></PublicOnlyRoute>} />
        <Route path="/login" element={<PublicOnlyRoute><Login /></PublicOnlyRoute>} />
        <Route path="/signup" element={<PublicOnlyRoute><Signup /></PublicOnlyRoute>} />

        {/* PROTECTED ROUTES */}
        <Route path="/donor" element={<ProtectedRoute><Donor /></ProtectedRoute>} />
        <Route path="/volunteer" element={<ProtectedRoute><Volunteer /></ProtectedRoute>} />
        
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        <Route path="/receive" element={<ProtectedRoute><Receive /></ProtectedRoute>} />

        {/* --- ADDED NEW AGENT TRACKING ROUTE --- */}
        <Route path="/agent/:id" element={<ProtectedRoute><Agent /></ProtectedRoute>} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
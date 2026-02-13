// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Leaf } from "lucide-react";

// const navItems = [
//   { path: "/", label: "Home" },
//   { path: "/donor", label: "Donor" },
//   { path: "/volunteer", label: "Volunteer" },
//   { path: "/admin", label: "Command Center" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 rounded-none">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/" className="flex items-center gap-2">
//             <Leaf className="w-6 h-6 text-primary" />
//             <span className="font-display font-bold text-lg gradient-text">FoodBridge</span>
//           </Link>

//           {/* Desktop */}
//           <div className="hidden md:flex items-center gap-1">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
//                   location.pathname === item.path
//                     ? "text-primary bg-primary/10"
//                     : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile toggle */}
//           <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
//             {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass-card border-t border-white/5 rounded-none"
//           >
//             <div className="px-4 py-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   onClick={() => setOpen(false)}
//                   className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all ${
//                     location.pathname === item.path
//                       ? "text-primary bg-primary/10"
//                       : "text-muted-foreground hover:text-foreground"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;





// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Leaf, LayoutDashboard, Utensils, Truck, Heart } from "lucide-react";
// import { useAuth } from "@/context/AuthContext";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const { isAuthenticated, user } = useAuth();

//   // Hide Navbar completely on Login/Signup pages if you want a cleaner look
//   // if (!isAuthenticated && (location.pathname === "/login" || location.pathname === "/signup")) return null;

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 rounded-none bg-[#0B0F1A]/80 backdrop-blur-xl">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           {/* LOGO (Redirects to Dashboard if logged in, Landing if not) */}
//           <Link to={isAuthenticated ? "/admin" : "/"} className="flex items-center gap-2 group">
//             <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
//               <Leaf className="w-5 h-5 text-emerald-400" />
//             </div>
//             <span className="font-display font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
//               FoodBridge
//             </span>
//           </Link>

//           {/* DESKTOP NAVIGATION */}
//           <div className="hidden md:flex items-center gap-6">
//             {isAuthenticated ? (
//               <>
//                 {/* 1. DASHBOARD (First for everyone) */}
//                 <Link to="/admin" className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}>
//                   <LayoutDashboard className="w-4 h-4" />
//                   <span>Dashboard</span>
//                 </Link>

//                 {/* 2. DYNAMIC ROLE LINK */}
//                 {user?.role === "receiver" ? (
//                   <Link to="/receive" className={`nav-item ${location.pathname === '/receive' ? 'active' : ''}`}>
//                     <Heart className="w-4 h-4" />
//                     <span>Receive Food</span>
//                   </Link>
//                 ) : (
//                   <Link to="/donor" className={`nav-item ${location.pathname === '/donor' ? 'active' : ''}`}>
//                     <Utensils className="w-4 h-4" />
//                     <span>Donate</span>
//                   </Link>
//                 )}

//                 {/* 3. VOLUNTEER (Visible to Donors & Agents) */}
//                 {user?.role !== "receiver" && (
//                   <Link to="/volunteer" className={`nav-item ${location.pathname === '/volunteer' ? 'active' : ''}`}>
//                     <Truck className="w-4 h-4" />
//                     <span>Volunteer</span>
//                   </Link>
//                 )}

//                 {/* User Badge */}
//                 <div className="ml-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400">
//                   {user?.organization || user?.name || "User"}
//                 </div>
//               </>
//             ) : (
//               /* PUBLIC LINKS */
//               <div className="flex items-center gap-4">
//                 <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
//                   Log In
//                 </Link>
//                 <Link to="/signup">
//                   <button className="btn-glow-solid text-xs px-5 py-2.5 rounded-xl font-semibold">
//                     Join Network
//                   </button>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground hover:text-white">
//             {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass-card border-t border-white/5 rounded-none overflow-hidden"
//           >
//             <div className="px-4 py-4 space-y-2">
//               {isAuthenticated ? (
//                 <>
//                   <MobileLink to="/admin" onClick={() => setOpen(false)} icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/admin'} />
//                   {user?.role === "receiver" ? (
//                     <MobileLink to="/receive" onClick={() => setOpen(false)} icon={Heart} label="Receive Food" active={location.pathname === '/receive'} />
//                   ) : (
//                     <MobileLink to="/donor" onClick={() => setOpen(false)} icon={Utensils} label="Donate" active={location.pathname === '/donor'} />
//                   )}
//                   {user?.role !== "receiver" && (
//                     <MobileLink to="/volunteer" onClick={() => setOpen(false)} icon={Truck} label="Volunteer" active={location.pathname === '/volunteer'} />
//                   )}
//                 </>
//               ) : (
//                 <>
//                   <Link to="/login" onClick={() => setOpen(false)} className="block w-full py-3 text-center text-muted-foreground hover:text-white">Log In</Link>
//                   <Link to="/signup" onClick={() => setOpen(false)} className="block w-full">
//                     <button className="btn-glow-solid w-full py-3 rounded-xl">Join Network</button>
//                   </Link>
//                 </>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// // Helper for cleaner code
// const MobileLink = ({ to, onClick, icon: Icon, label, active }: any) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
//       active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-white"
//     }`}
//   >
//     <Icon className="w-5 h-5" />
//     <span className="font-medium">{label}</span>
//   </Link>
// );

// export default Navbar;




import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, LayoutDashboard, Utensils, Truck, Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 rounded-none bg-[#0B0F1A]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO (Redirects to Dashboard if logged in, Landing if not) */}
          <Link to={isAuthenticated ? "/admin" : "/"} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
              <Leaf className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-display font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
              FoodBridge
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-6">
            {isAuthenticated ? (
              <>
                {/* 1. DASHBOARD (First for everyone) */}
                <Link to="/admin" className={`nav-item ${location.pathname === '/admin' ? 'active' : ''}`}>
                  <LayoutDashboard className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>

                {/* 2. DYNAMIC ROLE LINK */}
                {user?.role === "receiver" ? (
                  <Link to="/receive" className={`nav-item ${location.pathname === '/receive' ? 'active' : ''}`}>
                    <Heart className="w-4 h-4" />
                    <span>Receive Food</span>
                  </Link>
                ) : (
                  <Link to="/donor" className={`nav-item ${location.pathname === '/donor' ? 'active' : ''}`}>
                    <Utensils className="w-4 h-4" />
                    <span>Donate</span>
                  </Link>
                )}

                {/* 3. CONSOLE (Visible to Donors & Agents) - Renamed from Volunteer */}
                {user?.role !== "receiver" && user?.role !== "donor" && (
                  <Link to="/volunteer" className={`nav-item ${location.pathname === '/volunteer' ? 'active' : ''}`}>
                    <Truck className="w-4 h-4" />
                    <span>Console</span>
                  </Link>
                )}

                {/* User Badge */}
                <div className="ml-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-emerald-400">
                  {user?.organization || user?.name || "User"}
                </div>
              </>
            ) : (
              /* PUBLIC LINKS */
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                  Log In
                </Link>
                <Link to="/signup">
                  <button className="btn-glow-solid text-xs px-5 py-2.5 rounded-xl font-semibold">
                    Join Network
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-muted-foreground hover:text-white">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-white/5 rounded-none overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {isAuthenticated ? (
                <>
                  <MobileLink to="/admin" onClick={() => setOpen(false)} icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/admin'} />
                  {user?.role === "receiver" ? (
                    <MobileLink to="/receive" onClick={() => setOpen(false)} icon={Heart} label="Receive Food" active={location.pathname === '/receive'} />
                  ) : (
                    <MobileLink to="/donor" onClick={() => setOpen(false)} icon={Utensils} label="Donate" active={location.pathname === '/donor'} />
                  )}
                  {user?.role !== "receiver" && (
                    <MobileLink to="/volunteer" onClick={() => setOpen(false)} icon={Truck} label="Console" active={location.pathname === '/volunteer'} />
                  )}
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setOpen(false)} className="block w-full py-3 text-center text-muted-foreground hover:text-white">Log In</Link>
                  <Link to="/signup" onClick={() => setOpen(false)} className="block w-full">
                    <button className="btn-glow-solid w-full py-3 rounded-xl">Join Network</button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Helper for cleaner code
const MobileLink = ({ to, onClick, icon: Icon, label, active }: any) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-white/5 hover:text-white"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </Link>
);

export default Navbar;
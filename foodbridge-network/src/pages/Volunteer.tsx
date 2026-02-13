// // // import { useState, useEffect } from "react";
// // // import { motion } from "framer-motion";
// // // import { Canvas } from "@react-three/fiber";
// // // import { MapPin, Navigation, Clock, Coins, AlertTriangle, Shield, Leaf } from "lucide-react";
// // // import ImpactCoin from "@/components/three/ImpactCoin";
// // // import { Suspense } from "react";

// // // const routeStops = [
// // //   { name: "Grand Hotel", type: "pickup", time: "10:30 AM" },
// // //   { name: "City Restaurant", type: "pickup", time: "10:50 AM" },
// // //   { name: "Hope Orphanage", type: "delivery", time: "11:15 AM" },
// // // ];

// // // const Volunteer = () => {
// // //   const [countdown, setCountdown] = useState(900); // 15 min

// // //   useEffect(() => {
// // //     const t = setInterval(() => setCountdown((c) => Math.max(0, c - 1)), 1000);
// // //     return () => clearInterval(t);
// // //   }, []);

// // //   const mins = Math.floor(countdown / 60);
// // //   const secs = countdown % 60;

// // //   return (
// // //     <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto">
// // //       <motion.h1
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         className="text-3xl font-display font-bold mb-8"
// // //       >
// // //         Volunteer <span className="gradient-text">Dashboard</span>
// // //       </motion.h1>

// // //       {/* Mission Card */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.1 }}
// // //         className="glass-card glow-border-danger p-6 mb-6 animate-glow-border"
// // //         style={{ animationName: "none", borderColor: "hsl(348 100% 61% / 0.4)", boxShadow: "0 0 15px rgba(255,59,92,0.15)" }}
// // //       >
// // //         <div className="flex items-center gap-2 mb-3">
// // //           <AlertTriangle className="w-5 h-5 text-destructive" />
// // //           <span className="text-sm font-semibold text-destructive">URGENT MISSION</span>
// // //         </div>
// // //         <p className="font-display font-semibold text-lg mb-2">Pickup in {mins}:{secs.toString().padStart(2, "0")} — Risk of Spoilage!</p>
// // //         <p className="text-sm text-muted-foreground">3.5kg of prepared meals from Grand Hotel expiring soon.</p>
// // //         <div className="mt-4 flex gap-3">
// // //           <button className="btn-glow-solid text-sm py-2">Accept Mission</button>
// // //           <button className="btn-glow text-sm py-2">View Details</button>
// // //         </div>
// // //       </motion.div>

// // //       {/* Mock Map */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.2 }}
// // //         className="glass-card p-6 mb-6"
// // //       >
// // //         <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
// // //           <Navigation className="w-5 h-5 text-primary" />
// // //           Route Overview
// // //         </h3>
// // //         {/* Simulated map */}
// // //         <div className="relative bg-muted/20 rounded-xl p-6 border border-white/5 min-h-[200px]">
// // //           {/* Route line */}
// // //           <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
// // //             <defs>
// // //               <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
// // //                 <stop offset="0%" stopColor="#00FFB2" />
// // //                 <stop offset="100%" stopColor="#00D9FF" />
// // //               </linearGradient>
// // //             </defs>
// // //             <path d="M 60 150 Q 150 50 200 100 Q 250 150 340 60" stroke="url(#routeGrad)" strokeWidth="2" fill="none" strokeDasharray="6 4" />
// // //           </svg>

// // //           {/* Stops */}
// // //           <div className="relative flex justify-between items-end h-[160px]">
// // //             {routeStops.map((stop, i) => (
// // //               <motion.div
// // //                 key={stop.name}
// // //                 initial={{ opacity: 0, scale: 0 }}
// // //                 animate={{ opacity: 1, scale: 1 }}
// // //                 transition={{ delay: 0.4 + i * 0.2 }}
// // //                 className="text-center z-10"
// // //                 style={{ position: "absolute", left: `${15 + i * 35}%`, top: i === 1 ? "20%" : i === 2 ? "10%" : "60%" }}
// // //               >
// // //                 <motion.div
// // //                   animate={{ scale: [1, 1.3, 1] }}
// // //                   transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
// // //                   className={`w-4 h-4 rounded-full mx-auto mb-1 ${stop.type === "pickup" ? "bg-primary" : "bg-secondary"}`}
// // //                 />
// // //                 <p className="text-xs font-medium">{stop.name}</p>
// // //                 <p className="text-xs text-muted-foreground">{stop.time}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
// // //           <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-primary" /> 2 pickups</span>
// // //           <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-secondary" /> ETA: 45 min</span>
// // //         </div>
// // //       </motion.div>

// // //       {/* Impact Wallet */}
// // //       <motion.div
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         transition={{ delay: 0.3 }}
// // //         className="glass-card p-6 mb-6"
// // //       >
// // //         <h3 className="font-display font-semibold mb-4 flex items-center gap-2">
// // //           <Coins className="w-5 h-5 text-yellow-400" />
// // //           Impact Wallet
// // //         </h3>

// // //         <div className="flex items-center gap-6">
// // //           {/* 3D Coin */}
// // //           <div className="w-24 h-24 flex-shrink-0">
// // //             <Canvas camera={{ position: [0, 0, 2.5] }} dpr={[1, 1.5]}>
// // //               <ambientLight intensity={0.5} />
// // //               <pointLight position={[5, 5, 5]} intensity={1} />
// // //               <Suspense fallback={null}>
// // //                 <ImpactCoin />
// // //               </Suspense>
// // //             </Canvas>
// // //           </div>

// // //           <div>
// // //             <p className="text-3xl font-display font-bold text-yellow-400">350</p>
// // //             <p className="text-sm text-muted-foreground">Impact Tokens Earned</p>
// // //             <div className="flex gap-4 mt-3">
// // //               <div className="text-center">
// // //                 <p className="text-sm font-semibold flex items-center gap-1">
// // //                   <Shield className="w-3 h-3 text-primary" /> 42
// // //                 </p>
// // //                 <p className="text-xs text-muted-foreground">Deliveries</p>
// // //               </div>
// // //               <div className="text-center">
// // //                 <p className="text-sm font-semibold flex items-center gap-1">
// // //                   <Leaf className="w-3 h-3 text-primary" /> 128kg
// // //                 </p>
// // //                 <p className="text-xs text-muted-foreground">CO₂ Saved</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // export default Volunteer;



// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
// // import { Truck, MapPin, Navigation, Clock } from "lucide-react"; // Removed 'Check' (unused)
// // import { useAuth } from "@/context/AuthContext";
// // import { toast } from "sonner";
// // import "leaflet/dist/leaflet.css";

// // // --- LEAFLET ICON FIX ---
// // import L from 'leaflet';
// // import icon from 'leaflet/dist/images/marker-icon.png';
// // import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// // // Fix for default marker icon missing in React Leaflet
// // const DefaultIcon = L.icon({
// //   iconUrl: icon,
// //   shadowUrl: iconShadow,
// //   iconSize: [25, 41],
// //   iconAnchor: [12, 41],
// //   popupAnchor: [1, -34]
// // });
// // L.Marker.prototype.options.icon = DefaultIcon;
// // // ------------------------

// // const Volunteer = () => {
// //   const { user } = useAuth();
// //   const [tasks, setTasks] = useState<any[]>([]);
// //   const [myTasks, setMyTasks] = useState<any[]>([]);
// //   const [activeTab, setActiveTab] = useState<"available" | "route">("available");
  
// //   // Agent Location (Simulated for Demo - Hyderabad Center)
// //   const agentLoc = { lat: 17.3850, lng: 78.4867 }; 

// //   useEffect(() => {
// //     fetchTasks();
// //   }, []);

// //   const fetchTasks = async () => {
// //     try {
// //       // 1. Get tasks waiting for drivers (Status: accepted)
// //       const resAvailable = await fetch("http://192.168.1.2:5000/api/donations?status=accepted");
// //       const dataAvailable = await resAvailable.json();
// //       setTasks(dataAvailable);

// //       // 2. Get tasks I already accepted (Status: assigned + my ID)
// //       if (user?.id) {
// //           const resMy = await fetch(`http://192.168.1.2:5000/api/donations?status=assigned&agentId=${user.id}`);
// //           const dataMy = await resMy.json();
// //           // Sort by expiry (Simple string comparison for demo)
// //           const sortedRoute = dataMy.sort((a: any, b: any) => (a.expiry || "").localeCompare(b.expiry || ""));
// //           setMyTasks(sortedRoute);
// //       }
// //     } catch (err) {
// //       console.error("Error fetching tasks:", err);
// //     }
// //   };

// //   const handleAccept = async (id: string) => {
// //     try {
// //         await fetch(`http://192.168.1.2:5000/api/donation/${id}/claim`, {
// //             method: "PUT",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({ agentId: user?.id, agentName: user?.name || "Volunteer Agent" })
// //         });
// //         toast.success("Task Added to Route!");
// //         fetchTasks(); // Refresh lists
// //         setActiveTab("route"); // Auto-switch to map view
// //     } catch (e) {
// //         toast.error("Failed to accept task");
// //     }
// //   };

// //   // Calculate Route: Agent -> Task 1 -> Task 2 ...
// //   // We filter out items without location to prevent map crashes
// //   const routePoints = myTasks.filter(t => t.location).map(t => [t.location.lat, t.location.lng]);
// //   const routePath = [[agentLoc.lat, agentLoc.lng], ...routePoints];

// //   return (
// //     <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
      
// //       {/* LEFT PANEL: Task List */}
// //       <div className="w-full md:w-1/3 space-y-6">
// //         <div className="flex items-center justify-between">
// //             <h1 className="text-2xl font-display font-bold">Agent <span className="gradient-text">Console</span></h1>
// //             <div className="flex bg-white/5 rounded-lg p-1">
// //                 <button onClick={() => setActiveTab("available")} className={`px-3 py-1 text-xs rounded-md transition-colors ${activeTab === "available" ? "bg-primary text-black font-bold" : "text-muted-foreground hover:text-white"}`}>New</button>
// //                 <button onClick={() => setActiveTab("route")} className={`px-3 py-1 text-xs rounded-md transition-colors ${activeTab === "route" ? "bg-primary text-black font-bold" : "text-muted-foreground hover:text-white"}`}>Route</button>
// //             </div>
// //         </div>

// //         <div className="space-y-3 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
// //             {activeTab === "available" ? (
// //                 tasks.length === 0 ? (
// //                     <div className="glass-card p-8 text-center text-muted-foreground">
// //                         <Truck className="w-12 h-12 mx-auto mb-3 opacity-20" />
// //                         <p>No new pickups nearby.</p>
// //                     </div>
// //                 ) : (
// //                     tasks.map(task => (
// //                         <motion.div key={task._id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-4 border-l-4 border-yellow-400">
// //                             <div className="flex justify-between items-start gap-2">
// //                                 <div>
// //                                     <h3 className="font-bold text-white">{task.foodType}</h3>
// //                                     <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
// //                                         <MapPin className="w-3 h-3" /> {task.location?.address || "Hyderabad"}
// //                                     </div>
// //                                     <div className="flex items-center gap-2 mt-2 text-xs text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded w-fit">
// //                                         <Clock className="w-3 h-3" /> Expires: {task.expiry}
// //                                     </div>
// //                                 </div>
// //                                 <button onClick={() => handleAccept(task._id)} className="btn-glow-solid px-4 py-2 text-xs whitespace-nowrap">
// //                                     Accept
// //                                 </button>
// //                             </div>
// //                         </motion.div>
// //                     ))
// //                 )
// //             ) : (
// //                 myTasks.length === 0 ? (
// //                     <div className="glass-card p-8 text-center text-muted-foreground">
// //                         <Navigation className="w-12 h-12 mx-auto mb-3 opacity-20" />
// //                         <p>Your route is empty.</p>
// //                     </div>
// //                 ) : (
// //                     myTasks.map((task, i) => (
// //                         <div key={task._id} className="glass-card p-4 border-l-4 border-primary relative">
// //                             <div className="absolute -left-3 top-4 w-6 h-6 rounded-full bg-primary text-black flex items-center justify-center text-xs font-bold shadow-lg shadow-primary/50">
// //                                 {i + 1}
// //                             </div>
// //                             <div className="ml-2">
// //                                 <h3 className="font-bold text-white">{task.foodType}</h3>
// //                                 <p className="text-xs text-muted-foreground">Pickup from: <span className="text-white">{task.donor?.name || "Donor"}</span></p>
// //                                 <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
// //                                     <Truck className="w-3 h-3" /> Stop #{i + 1} on route
// //                                 </p>
// //                             </div>
// //                         </div>
// //                     ))
// //                 )
// //             )}
// //         </div>
// //       </div>

// //       {/* RIGHT PANEL: The Map */}
// //       <div className="w-full md:w-2/3 glass-card p-1 h-[600px] relative rounded-xl overflow-hidden shadow-2xl">
// //         <MapContainer center={[17.3850, 78.4867]} zoom={13} style={{ height: "100%", width: "100%" }}>
// //             <TileLayer
// //                 url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
// //                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //             />
            
// //             {/* Agent Location */}
// //             <Marker position={[agentLoc.lat, agentLoc.lng]}>
// //                 <Popup className="text-black font-bold">You are here 📍</Popup>
// //             </Marker>

// //             {/* Available Tasks Markers */}
// //             {activeTab === "available" && tasks.map(t => t.location && (
// //                 <Marker key={t._id} position={[t.location.lat, t.location.lng]}>
// //                     <Popup className="text-black">
// //                         <strong>{t.foodType}</strong><br/>
// //                         Pickup Here
// //                     </Popup>
// //                 </Marker>
// //             ))}

// //             {/* My Route Markers */}
// //             {activeTab === "route" && myTasks.map((t, i) => t.location && (
// //                 <Marker key={t._id} position={[t.location.lat, t.location.lng]}>
// //                     <Popup className="text-black">
// //                         <strong>Stop #{i+1}</strong><br/>
// //                         {t.foodType}
// //                     </Popup>
// //                 </Marker>
// //             ))}

// //             {/* The Route Line (FIXED PROPS HERE) */}
// //             {activeTab === "route" && myTasks.length > 0 && (
// //                 <Polyline 
// //                     positions={routePath as any} 
// //                     pathOptions={{ color: "#00FFB2", weight: 4, dashArray: "10, 10" }} 
// //                 />
// //             )}
// //         </MapContainer>
        
// //         {/* Map Overlay */}
// //         <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl z-[400] border border-white/10 shadow-xl">
// //             <h4 className="text-emerald-400 font-bold flex items-center gap-2">
// //                 <Navigation className="w-4 h-4" /> Live Navigation
// //             </h4>
// //             <p className="text-xs text-white/70 mt-1">AI Route Optimization: Active</p>
// //             <div className="mt-2 text-2xl font-mono font-bold text-white">{myTasks.length} <span className="text-sm font-sans font-normal text-muted-foreground">Stops</span></div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Volunteer;



// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
// import { Truck, MapPin, Navigation, PackageCheck, CheckCircle2 } from "lucide-react";
// import { useAuth } from "@/context/AuthContext";
// import { toast } from "sonner";
// import "leaflet/dist/leaflet.css";
// import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const DefaultIcon = L.icon({
//   iconUrl: icon, shadowUrl: iconShadow,
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const Volunteer = () => {
//   const { user } = useAuth();
//   const [tasks, setTasks] = useState<any[]>([]); // New requests (searching_agent)
//   const [currentTask, setCurrentTask] = useState<any>(null); // Active task (assigned/transit)
//   const [agentLoc] = useState<[number, number]>([17.3850, 78.4867]); 

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     // 1. Get tasks waiting for agent
//     const resAvailable = await fetch("http://192.168.1.2:5000/api/donations?status=searching_agent");
//     const dataAvailable = await resAvailable.json();
//     setTasks(dataAvailable);

//     // 2. Check if I have an active task
//     if (user?.id) {
//         // Fetch ALL my tasks
//         const resMy = await fetch(`http://192.168.1.2:5000/api/donations?agentId=${user.id}`);
//         const dataMy = await resMy.json();
//         // Find one that is NOT delivered yet
//         const active = dataMy.find((t: any) => t.status === "assigned" || t.status === "transit");
//         setCurrentTask(active || null);
//     }
//   };

//   const handleAccept = async (id: string) => {
//     await fetch(`http://192.168.1.2:5000/api/donation/${id}/claim`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ agentId: user?.id, agentName: user?.name })
//     });
//     toast.success("Task Accepted! Navigation Started.");
//     fetchTasks();
//   };

//   const handlePickup = async () => {
//     await fetch(`http://192.168.1.2:5000/api/donation/${currentTask._id}/pickup`, { method: "PUT" });
//     toast.success("Pickup Confirmed! Routing to Receiver...");
//     fetchTasks(); // Updates status to 'transit'
//   };

//   const handleDeliver = async () => {
//     await fetch(`http://192.168.1.2:5000/api/donation/${currentTask._id}/deliver`, { method: "PUT" });
//     toast.success("Delivered Successfully! Great Job.");
//     setCurrentTask(null); // Clear task
//     fetchTasks();
//   };

//   // --- NAVIGATION LOGIC ---
//   // If status is 'assigned': Route is Agent -> Donor
//   // If status is 'transit': Route is Agent (Donor) -> Receiver
//   let routePath: [number, number][] = [];
//   let destinationLabel = "";
  
//   if (currentTask) {
//     if (currentTask.status === "assigned") {
//         const donorLoc = currentTask.location; // Donor Location
//         routePath = [agentLoc, [donorLoc.lat, donorLoc.lng]];
//         destinationLabel = "Donor Location (Pickup)";
//     } else if (currentTask.status === "transit") {
//         const donorLoc = currentTask.location; 
//         const receiverLoc = currentTask.receiver?.location || { lat: 17.4065, lng: 78.4772 };
//         // Ideally start from Agent's real GPS, but for demo we start from Donor -> Receiver
//         routePath = [[donorLoc.lat, donorLoc.lng], [receiverLoc.lat, receiverLoc.lng]];
//         destinationLabel = "Receiver Location (Drop-off)";
//     }
//   }

//   return (
//     <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
      
//       {/* LEFT PANEL */}
//       <div className="w-full md:w-1/3 space-y-6">
//         <h1 className="text-2xl font-display font-bold">Agent <span className="gradient-text">Console</span></h1>

//         {/* ACTIVE TASK CARD */}
//         {currentTask ? (
//             <div className="glass-card p-6 border-l-4 border-emerald-500 bg-emerald-500/5">
//                 <h2 className="text-xl font-bold mb-2 text-white">Current Mission</h2>
//                 <div className="space-y-4">
//                     <div>
//                         <p className="text-xs text-muted-foreground uppercase">Step</p>
//                         <p className="text-lg font-bold text-emerald-400">
//                             {currentTask.status === "assigned" ? "1. Pick Up Food" : "2. Deliver Food"}
//                         </p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-muted-foreground uppercase">Details</p>
//                         <p className="text-white">{currentTask.foodType} ({currentTask.quantity}kg)</p>
//                     </div>

//                     {/* ACTION BUTTON */}
//                     {currentTask.status === "assigned" ? (
//                         <button onClick={handlePickup} className="w-full btn-glow-solid py-3 flex justify-center gap-2">
//                             <PackageCheck className="w-5 h-5" /> Confirm Pickup
//                         </button>
//                     ) : (
//                         <button onClick={handleDeliver} className="w-full btn-glow-solid py-3 flex justify-center gap-2 bg-emerald-500 hover:bg-emerald-400">
//                             <CheckCircle2 className="w-5 h-5" /> Confirm Delivery
//                         </button>
//                     )}
//                 </div>
//             </div>
//         ) : (
//             <div className="glass-card p-6 text-center text-muted-foreground">
//                 <Truck className="w-12 h-12 mx-auto mb-3 opacity-20" />
//                 No active mission. Accept a request below.
//             </div>
//         )}

//         {/* AVAILABLE REQUESTS LIST */}
//         {!currentTask && (
//             <div className="space-y-3">
//                 <h3 className="font-bold text-muted-foreground text-sm">Nearby Requests</h3>
//                 {tasks.length === 0 ? <p className="text-sm text-muted-foreground">Searching for requests...</p> : 
//                 tasks.map(t => (
//                     <div key={t._id} className="glass-card p-4 flex justify-between items-center">
//                         <div>
//                             <p className="font-bold">{t.foodType}</p>
//                             <p className="text-xs text-muted-foreground">{t.location?.address || "Hyderabad"}</p>
//                         </div>
//                         <button onClick={() => handleAccept(t._id)} className="btn-glow-solid px-3 py-1 text-xs">Accept</button>
//                     </div>
//                 ))}
//             </div>
//         )}
//       </div>

//       {/* MAP PANEL */}
//       <div className="w-full md:w-2/3 glass-card p-1 h-[600px] relative rounded-xl overflow-hidden">
//         <MapContainer center={agentLoc} zoom={13} style={{ height: "100%", width: "100%" }}>
//             <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            
//             {/* Agent Marker */}
//             <Marker position={agentLoc}><Popup>You (Agent)</Popup></Marker>

//             {/* If Task Active: Show Route */}
//             {currentTask && routePath.length > 0 && (
//                 <>
//                     <Polyline positions={routePath} pathOptions={{ color: "#00FFB2", weight: 5 }} />
//                     <Marker position={routePath[1]}>
//                         <Popup>{destinationLabel}</Popup>
//                     </Marker>
//                 </>
//             )}

//             {/* If No Task: Show Available Pickups */}
//             {!currentTask && tasks.map(t => t.location && (
//                 <Marker key={t._id} position={[t.location.lat, t.location.lng]}>
//                     <Popup>Pickup: {t.foodType}</Popup>
//                 </Marker>
//             ))}
//         </MapContainer>
        
//         {/* Map Overlay */}
//         {currentTask && (
//             <div className="absolute top-4 right-4 bg-black/80 backdrop-blur p-4 rounded-xl z-[400] border border-emerald-500/30">
//                 <h4 className="text-emerald-400 font-bold flex items-center gap-2">
//                     <Navigation className="w-4 h-4" /> Navigating
//                 </h4>
//                 <p className="text-white font-bold mt-1">
//                     {currentTask.status === "assigned" ? "To Donor" : "To Receiver"}
//                 </p>
//             </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Volunteer;



// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
// import { Truck, MapPin, Navigation, PackageCheck, CheckCircle2, Map as MapIcon, ExternalLink } from "lucide-react";
// import { useAuth } from "@/context/AuthContext";
// import { toast } from "sonner";
// import "leaflet/dist/leaflet.css";
// import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const DefaultIcon = L.icon({
//   iconUrl: icon, shadowUrl: iconShadow,
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const Volunteer = () => {
//   const { user } = useAuth();
//   const [tasks, setTasks] = useState<any[]>([]); // New requests
//   const [currentTask, setCurrentTask] = useState<any>(null); // Active task
//   const [agentLoc] = useState<[number, number]>([17.3850, 78.4867]); 

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//         // 1. FIXED: Get tasks with status 'searching_agent' (Not 'accepted')
//         const resAvailable = await fetch("http://192.168.1.2:5000/api/donations?status=searching_agent");
//         const dataAvailable = await resAvailable.json();
//         setTasks(dataAvailable);

//         // 2. Check if I have an active task (assigned or transit)
//         if (user?.id) {
//             const resMy = await fetch(`http://192.168.1.2:5000/api/donations?agentId=${user.id}`);
//             const dataMy = await resMy.json();
//             const active = dataMy.find((t: any) => t.status === "assigned" || t.status === "transit");
//             setCurrentTask(active || null);
//         }
//     } catch (err) {
//         console.error("Sync Error", err);
//     }
//   };

//   const handleAccept = async (id: string) => {
//     await fetch(`http://192.168.1.2:5000/api/donation/${id}/claim`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ agentId: user?.id, agentName: user?.name })
//     });
//     toast.success("Task Accepted! Navigation Started.");
//     fetchTasks();
//   };

//   const handlePickup = async () => {
//     await fetch(`http://192.168.1.2:5000/api/donation/${currentTask._id}/pickup`, { method: "PUT" });
//     toast.success("Pickup Confirmed! Routing to Receiver...");
//     fetchTasks(); 
//   };

//   const handleDeliver = async () => {
//     await fetch(`http://192.168.1.2:5000/api/donation/${currentTask._id}/deliver`, { method: "PUT" });
//     toast.success("Delivered Successfully!");
//     setCurrentTask(null); 
//     fetchTasks();
//   };

//   // --- GOOGLE MAPS LAUNCHER ---
//   const openGoogleMaps = () => {
//       if (!currentTask) return;
      
//       const origin = `${agentLoc[0]},${agentLoc[1]}`;
//       let destination = "";
      
//       if (currentTask.status === "assigned") {
//           // Navigating to Donor
//           destination = `${currentTask.location.lat},${currentTask.location.lng}`;
//       } else {
//           // Navigating to Receiver
//           const recLoc = currentTask.receiver?.location || { lat: 17.4065, lng: 78.4772 };
//           destination = `${recLoc.lat},${recLoc.lng}`;
//       }
      
//       window.open(`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`, "_blank");
//   };

//   // --- ROUTING LOGIC FOR MAP ---
//   let routePath: [number, number][] = [];
//   let destinationLabel = "";
  
//   if (currentTask) {
//     if (currentTask.status === "assigned") {
//         const donorLoc = currentTask.location;
//         routePath = [agentLoc, [donorLoc.lat, donorLoc.lng]];
//         destinationLabel = "Pickup: " + currentTask.donor?.name;
//     } else if (currentTask.status === "transit") {
//         const donorLoc = currentTask.location; 
//         const receiverLoc = currentTask.receiver?.location || { lat: 17.4065, lng: 78.4772 };
//         routePath = [[donorLoc.lat, donorLoc.lng], [receiverLoc.lat, receiverLoc.lng]];
//         destinationLabel = "Drop: " + (currentTask.receiver?.name || "Receiver");
//     }
//   }

//   return (
//     <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
      
//       {/* LEFT PANEL */}
//       <div className="w-full md:w-1/3 space-y-6">
//         <h1 className="text-2xl font-display font-bold">Agent <span className="gradient-text">Console</span></h1>

//         {/* ACTIVE TASK CARD */}
//         {currentTask ? (
//             <div className="glass-card p-6 border-l-4 border-emerald-500 bg-emerald-500/5 relative overflow-hidden">
//                 <div className="absolute top-0 right-0 p-4 opacity-10"><Truck className="w-24 h-24" /></div>
//                 <h2 className="text-xl font-bold mb-2 text-white">Current Mission</h2>
                
//                 <div className="space-y-4 relative z-10">
//                     <div>
//                         <p className="text-xs text-muted-foreground uppercase">Step</p>
//                         <p className="text-lg font-bold text-emerald-400">
//                             {currentTask.status === "assigned" ? "1. Pick Up Food" : "2. Deliver Food"}
//                         </p>
//                     </div>
//                     <div>
//                         <p className="text-xs text-muted-foreground uppercase">Target</p>
//                         <p className="text-white">{destinationLabel}</p>
//                     </div>

//                     {/* ACTION BUTTONS */}
//                     <div className="grid gap-3">
//                         {currentTask.status === "assigned" ? (
//                             <button onClick={handlePickup} className="w-full btn-glow-solid py-3 flex justify-center gap-2">
//                                 <PackageCheck className="w-5 h-5" /> Confirm Pickup
//                             </button>
//                         ) : (
//                             <button onClick={handleDeliver} className="w-full btn-glow-solid py-3 flex justify-center gap-2 bg-emerald-500 hover:bg-emerald-400">
//                                 <CheckCircle2 className="w-5 h-5" /> Confirm Delivery
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         ) : (
//             <div className="glass-card p-6 text-center text-muted-foreground">
//                 <Truck className="w-12 h-12 mx-auto mb-3 opacity-20" />
//                 No active mission. Accept a request below.
//             </div>
//         )}

//         {/* AVAILABLE REQUESTS LIST */}
//         {!currentTask && (
//             <div className="space-y-3">
//                 <h3 className="font-bold text-muted-foreground text-sm">Nearby Requests</h3>
//                 {tasks.length === 0 ? <p className="text-sm text-muted-foreground">Searching for requests...</p> : 
//                 tasks.map(t => (
//                     <div key={t._id} className="glass-card p-4 flex justify-between items-center border-l-4 border-yellow-400">
//                         <div>
//                             <p className="font-bold text-white">{t.foodType}</p>
//                             <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
//                                 <MapPin className="w-3 h-3" /> {t.location?.address || "Hyderabad"}
//                             </div>
//                         </div>
//                         <button onClick={() => handleAccept(t._id)} className="btn-glow-solid px-4 py-2 text-xs">Accept</button>
//                     </div>
//                 ))}
//             </div>
//         )}
//       </div>

//       {/* MAP PANEL */}
//       <div className="w-full md:w-2/3 glass-card p-1 h-[600px] relative rounded-xl overflow-hidden">
//         <MapContainer center={agentLoc} zoom={13} style={{ height: "100%", width: "100%" }}>
//             <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            
//             <Marker position={agentLoc}><Popup>You (Agent)</Popup></Marker>

//             {currentTask && routePath.length > 0 && (
//                 <>
//                     <Polyline positions={routePath} pathOptions={{ color: "#00FFB2", weight: 5 }} />
//                     <Marker position={routePath[1]}>
//                         <Popup>{destinationLabel}</Popup>
//                     </Marker>
//                 </>
//             )}

//             {!currentTask && tasks.map(t => t.location && (
//                 <Marker key={t._id} position={[t.location.lat, t.location.lng]}>
//                     <Popup>Pickup: {t.foodType}</Popup>
//                 </Marker>
//             ))}
//         </MapContainer>
        
//         {/* OVERLAYS */}
//         {currentTask && (
//             <>
//                 <div className="absolute top-4 right-4 bg-black/80 backdrop-blur p-4 rounded-xl z-[400] border border-emerald-500/30">
//                     <h4 className="text-emerald-400 font-bold flex items-center gap-2">
//                         <Navigation className="w-4 h-4" /> Navigating
//                     </h4>
//                     <p className="text-white font-bold mt-1">
//                         {currentTask.status === "assigned" ? "To Donor" : "To Receiver"}
//                     </p>
//                 </div>
                
//                 {/* GOOGLE MAPS BUTTON */}
//                 <button 
//                     onClick={openGoogleMaps}
//                     className="absolute bottom-6 right-6 z-[400] flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg font-bold transition-transform hover:scale-105 active:scale-95 group"
//                 >
//                     <MapIcon className="w-5 h-5" />
//                     <span>Open Navigation</span>
//                     <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
//                 </button>
//             </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Volunteer;




import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import { Truck, MapPin, Navigation, PackageCheck, CheckCircle2, Map as MapIcon, ExternalLink } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet Icons
const DefaultIcon = L.icon({
  iconUrl: icon, shadowUrl: iconShadow,
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
});
L.Marker.prototype.options.icon = DefaultIcon;

// --- COMPONENT TO AUTO-CENTER MAP ON MOVEMENT ---
const RecenterMap = ({ lat, lng }: { lat: number, lng: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], map.getZoom());
  }, [lat, lng, map]);
  return null;
};

const Volunteer = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState<any[]>([]); 
  const [currentTask, setCurrentTask] = useState<any>(null); 
  
  // LIVE LOCATION STATE
  const [agentLoc, setAgentLoc] = useState<[number, number] | null>(null);

  // 1. WATCH POSITION (Live Tracking)
  useEffect(() => {
    if (!navigator.geolocation) {
        toast.error("Geolocation is not supported by your browser");
        return;
    }

    // Use watchPosition instead of getCurrentPosition for live updates
    const watchId = navigator.geolocation.watchPosition(
        (pos) => {
            const { latitude, longitude } = pos.coords;
            setAgentLoc([latitude, longitude]);
        },
        (err) => console.error("Location Error:", err),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    // Cleanup when component unmounts
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
        // Fetch tasks
        const resAvailable = await fetch("http://192.168.1.2:5000/api/donations?status=searching_agent");
        const dataAvailable = await resAvailable.json();
        setTasks(dataAvailable);

        // Check active task
        if (user?.id) {
            const resMy = await fetch(`http://192.168.1.2:5000/api/donations?agentId=${user.id}`);
            const dataMy = await resMy.json();
            const active = dataMy.find((t: any) => t.status === "assigned" || t.status === "transit");
            setCurrentTask(active || null);
        }
    } catch (err) {
        console.error("Sync Error", err);
    }
  };

  const handleAccept = async (id: string) => {
    await fetch(`http://192.168.1.2:5000/api/donation/${id}/claim`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agentId: user?.id, agentName: user?.name })
    });
    toast.success("Task Accepted! Navigation Started.");
    fetchTasks();
  };

  const handlePickup = async () => {
    await fetch(`http://192.168.1.2:5000/api/donation/${currentTask._id}/pickup`, { method: "PUT" });
    toast.success("Pickup Confirmed! Routing to Receiver...");
    fetchTasks(); 
  };

  const handleDeliver = async () => {
    await fetch(`http://192.168.1.2:5000/api/donation/${currentTask._id}/deliver`, { method: "PUT" });
    toast.success("Delivered Successfully!");
    setCurrentTask(null); 
    fetchTasks();
  };

  const openGoogleMaps = () => {
      if (!currentTask || !agentLoc) return;
      
      const origin = `${agentLoc[0]},${agentLoc[1]}`;
      let destination = "";
      
      if (currentTask.status === "assigned") {
          destination = `${currentTask.location.lat},${currentTask.location.lng}`;
      } else {
          const recLoc = currentTask.receiver?.location || { lat: 17.4065, lng: 78.4772 };
          destination = `${recLoc.lat},${recLoc.lng}`;
      }
      
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`, "_blank");
  };

  // --- ROUTING LOGIC ---
  let routePath: [number, number][] = [];
  let destinationLabel = "";
  
  if (currentTask && agentLoc) {
    if (currentTask.status === "assigned") {
        const donorLoc = currentTask.location;
        routePath = [agentLoc, [donorLoc.lat, donorLoc.lng]];
        destinationLabel = "Pickup: " + currentTask.donor?.name;
    } else if (currentTask.status === "transit") {
        const donorLoc = currentTask.location; 
        const receiverLoc = currentTask.receiver?.location || { lat: 17.4065, lng: 78.4772 };
        
        // IMPORTANT: Route starts from AGENT (moving) to RECEIVER
        // Note: donorLoc is just history now, we route from Agent -> Receiver
        routePath = [agentLoc, [receiverLoc.lat, receiverLoc.lng]];
        destinationLabel = "Drop: " + (currentTask.receiver?.name || "Receiver");
    }
  }

  // If no location yet, show loading
  if (!agentLoc) {
    return (
        <div className="min-h-screen flex items-center justify-center text-emerald-400">
            <div className="text-center">
                <Navigation className="w-12 h-12 mx-auto animate-pulse mb-4" />
                <h2 className="text-xl font-bold">Acquiring GPS Signal...</h2>
                <p className="text-sm text-muted-foreground mt-2">Please allow location access</p>
            </div>
        </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
      
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/3 space-y-6">
        <h1 className="text-2xl font-display font-bold">Agent <span className="gradient-text">Console</span></h1>

        {/* ACTIVE TASK CARD */}
        {currentTask ? (
            <div className="glass-card p-6 border-l-4 border-emerald-500 bg-emerald-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><Truck className="w-24 h-24" /></div>
                <h2 className="text-xl font-bold mb-2 text-white">Current Mission</h2>
                
                <div className="space-y-4 relative z-10">
                    <div>
                        <p className="text-xs text-muted-foreground uppercase">Step</p>
                        <p className="text-lg font-bold text-emerald-400">
                            {currentTask.status === "assigned" ? "1. Pick Up Food" : "2. Deliver Food"}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-muted-foreground uppercase">Target</p>
                        <p className="text-white">{destinationLabel}</p>
                    </div>

                    <div className="grid gap-3">
                        {currentTask.status === "assigned" ? (
                            <button onClick={handlePickup} className="w-full btn-glow-solid py-3 flex justify-center gap-2">
                                <PackageCheck className="w-5 h-5" /> Confirm Pickup
                            </button>
                        ) : (
                            <button onClick={handleDeliver} className="w-full btn-glow-solid py-3 flex justify-center gap-2 bg-emerald-500 hover:bg-emerald-400">
                                <CheckCircle2 className="w-5 h-5" /> Confirm Delivery
                            </button>
                        )}
                    </div>
                </div>
            </div>
        ) : (
            <div className="glass-card p-6 text-center text-muted-foreground">
                <Truck className="w-12 h-12 mx-auto mb-3 opacity-20" />
                No active mission. Accept a request below.
            </div>
        )}

        {/* AVAILABLE REQUESTS */}
        {!currentTask && (
            <div className="space-y-3">
                <h3 className="font-bold text-muted-foreground text-sm">Nearby Requests</h3>
                {tasks.length === 0 ? <p className="text-sm text-muted-foreground">Searching for requests...</p> : 
                tasks.map(t => (
                    <div key={t._id} className="glass-card p-4 flex justify-between items-center border-l-4 border-yellow-400">
                        <div>
                            <p className="font-bold text-white">{t.foodType}</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                <MapPin className="w-3 h-3" /> {t.location?.address || "Hyderabad"}
                            </div>
                        </div>
                        <button onClick={() => handleAccept(t._id)} className="btn-glow-solid px-4 py-2 text-xs">Accept</button>
                    </div>
                ))}
            </div>
        )}
      </div>

      {/* MAP PANEL */}
      <div className="w-full md:w-2/3 glass-card p-1 h-[600px] relative rounded-xl overflow-hidden">
        <MapContainer center={agentLoc} zoom={15} style={{ height: "100%", width: "100%" }}>
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            
            {/* Auto-Recenter Map when Agent moves */}
            <RecenterMap lat={agentLoc[0]} lng={agentLoc[1]} />

            {/* Agent Live Marker */}
            <Marker position={agentLoc}><Popup>You (Live)</Popup></Marker>

            {currentTask && routePath.length > 0 && (
                <>
                    <Polyline positions={routePath} pathOptions={{ color: "#00FFB2", weight: 5 }} />
                    <Marker position={routePath[1]}>
                        <Popup>{destinationLabel}</Popup>
                    </Marker>
                </>
            )}

            {!currentTask && tasks.map(t => t.location && (
                <Marker key={t._id} position={[t.location.lat, t.location.lng]}>
                    <Popup>Pickup: {t.foodType}</Popup>
                </Marker>
            ))}
        </MapContainer>
        
        {currentTask && (
            <>
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur p-4 rounded-xl z-[400] border border-emerald-500/30">
                    <h4 className="text-emerald-400 font-bold flex items-center gap-2">
                        <Navigation className="w-4 h-4" /> Navigating
                    </h4>
                    <p className="text-white font-bold mt-1">
                        {currentTask.status === "assigned" ? "To Donor" : "To Receiver"}
                    </p>
                </div>
                
                <button 
                    onClick={openGoogleMaps}
                    className="absolute bottom-6 right-6 z-[400] flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg font-bold transition-transform hover:scale-105 active:scale-95 group"
                >
                    <MapIcon className="w-5 h-5" />
                    <span>Open Navigation</span>
                    <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                </button>
            </>
        )}
      </div>
    </div>
  );
};

export default Volunteer;
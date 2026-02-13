// // // // import { useState } from "react";
// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { Camera, Edit3, Package, Clock, CheckCircle2, AlertTriangle, Truck } from "lucide-react";

// // // // const mockHistory = [
// // // //   { id: 1, food: "Rice & Curry", qty: "5.2 kg", time: "2h ago", co2: "1.2kg", status: "delivered" },
// // // //   { id: 2, food: "Bread Loaves", qty: "3.0 kg", time: "5h ago", co2: "0.8kg", status: "transit" },
// // // //   { id: 3, food: "Fruit Salad", qty: "2.1 kg", time: "1d ago", co2: "0.5kg", status: "expired" },
// // // //   { id: 4, food: "Pasta", qty: "4.5 kg", time: "2d ago", co2: "1.0kg", status: "delivered" },
// // // // ];

// // // // const statusConfig = {
// // // //   delivered: { color: "text-primary", border: "border-primary/30", icon: CheckCircle2, label: "Delivered" },
// // // //   transit: { color: "text-yellow-400", border: "border-yellow-400/30", icon: Truck, label: "In Transit" },
// // // //   expired: { color: "text-destructive", border: "border-destructive/30", icon: AlertTriangle, label: "Expired" },
// // // // };

// // // // const Donor = () => {
// // // //   const [mode, setMode] = useState<"scan" | "manual">("scan");
// // // //   const [scanning, setScanning] = useState(false);
// // // //   const [scanned, setScanned] = useState(false);
// // // //   const [confirmed, setConfirmed] = useState(false);
// // // //   const [form, setForm] = useState({ food: "", qty: "", expiry: "", window: "30 mins" });

// // // //   const handleScan = () => {
// // // //     setScanning(true);
// // // //     setScanned(false);
// // // //     setTimeout(() => {
// // // //       setScanning(false);
// // // //       setScanned(true);
// // // //       setForm({ food: "Rice", qty: "5.2", expiry: "4 hours", window: "30 mins" });
// // // //     }, 2500);
// // // //   };

// // // //   const handleConfirm = () => {
// // // //     setConfirmed(true);
// // // //     setTimeout(() => setConfirmed(false), 3000);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto">
// // // //       <motion.h1
// // // //         initial={{ opacity: 0, y: 20 }}
// // // //         animate={{ opacity: 1, y: 0 }}
// // // //         className="text-3xl font-display font-bold mb-8"
// // // //       >
// // // //         Donor <span className="gradient-text">Dashboard</span>
// // // //       </motion.h1>

// // // //       {/* Toggle */}
// // // //       <motion.div
// // // //         initial={{ opacity: 0 }}
// // // //         animate={{ opacity: 1 }}
// // // //         transition={{ delay: 0.2 }}
// // // //         className="glass-card p-1 flex mb-8 max-w-xs"
// // // //       >
// // // //         {(["scan", "manual"] as const).map((m) => (
// // // //           <button
// // // //             key={m}
// // // //             onClick={() => { setMode(m); setScanned(false); }}
// // // //             className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
// // // //               mode === m ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
// // // //             }`}
// // // //           >
// // // //             {m === "scan" ? <Camera className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
// // // //             {m === "scan" ? "AI Scan" : "Manual"}
// // // //           </button>
// // // //         ))}
// // // //       </motion.div>

// // // //       {/* Scan Mode */}
// // // //       <AnimatePresence mode="wait">
// // // //         {mode === "scan" && (
// // // //           <motion.div
// // // //             key="scan"
// // // //             initial={{ opacity: 0, x: -20 }}
// // // //             animate={{ opacity: 1, x: 0 }}
// // // //             exit={{ opacity: 0, x: 20 }}
// // // //             className="glass-card p-6 mb-8"
// // // //           >
// // // //             <div className="aspect-video rounded-xl bg-muted/30 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
// // // //               {scanning && (
// // // //                 <motion.div
// // // //                   className="absolute inset-0 bg-primary/5"
// // // //                   animate={{ opacity: [0.1, 0.3, 0.1] }}
// // // //                   transition={{ repeat: Infinity, duration: 1.5 }}
// // // //                 />
// // // //               )}
// // // //               {scanning && (
// // // //                 <motion.div
// // // //                   className="absolute left-0 right-0 h-0.5 bg-primary"
// // // //                   animate={{ top: ["10%", "90%", "10%"] }}
// // // //                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
// // // //                 />
// // // //               )}
// // // //               {!scanning && !scanned && (
// // // //                 <>
// // // //                   <Camera className="w-12 h-12 text-muted-foreground mb-3" />
// // // //                   <p className="text-muted-foreground text-sm">Position food item in frame</p>
// // // //                 </>
// // // //               )}
// // // //               {scanned && (
// // // //                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
// // // //                   <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
// // // //                   <p className="text-primary font-medium">Food Detected: Rice</p>
// // // //                 </motion.div>
// // // //               )}
// // // //             </div>

// // // //             {!scanned && (
// // // //               <button onClick={handleScan} disabled={scanning} className="btn-glow-solid w-full flex items-center justify-center gap-2">
// // // //                 {scanning ? "Scanning..." : "Scan Food"}
// // // //               </button>
// // // //             )}

// // // //             {scanning && (
// // // //               <div className="mt-4">
// // // //                 <div className="h-1.5 bg-muted rounded-full overflow-hidden">
// // // //                   <motion.div
// // // //                     className="h-full bg-primary rounded-full"
// // // //                     initial={{ width: "0%" }}
// // // //                     animate={{ width: "100%" }}
// // // //                     transition={{ duration: 2.5 }}
// // // //                   />
// // // //                 </div>
// // // //                 <p className="text-xs text-muted-foreground mt-2 text-center">AI analyzing food item...</p>
// // // //               </div>
// // // //             )}
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* Form (shown after scan or in manual mode) */}
// // // //       {(mode === "manual" || scanned) && (
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           className="glass-card p-6 mb-8 space-y-4"
// // // //         >
// // // //           <h3 className="font-display font-semibold text-lg mb-2">
// // // //             {scanned ? "AI Results" : "Enter Details"}
// // // //           </h3>
// // // //           {[
// // // //             { label: "Food Type", key: "food", placeholder: "e.g., Rice, Bread" },
// // // //             { label: "Quantity (kg)", key: "qty", placeholder: "e.g., 5.2" },
// // // //             { label: "Expiry Time", key: "expiry", placeholder: "e.g., 4 hours" },
// // // //             { label: "Pickup Window", key: "window", placeholder: "e.g., 30 mins" },
// // // //           ].map((field) => (
// // // //             <div key={field.key}>
// // // //               <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
// // // //               <input
// // // //                 type="text"
// // // //                 value={form[field.key as keyof typeof form]}
// // // //                 onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
// // // //                 placeholder={field.placeholder}
// // // //                 className="w-full bg-muted/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
// // // //               />
// // // //             </div>
// // // //           ))}

// // // //           <button onClick={handleConfirm} className="btn-glow-solid w-full mt-4 flex items-center justify-center gap-2">
// // // //             <Package className="w-4 h-4" />
// // // //             Confirm Donation
// // // //           </button>

// // // //           <AnimatePresence>
// // // //             {confirmed && (
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, scale: 0.8 }}
// // // //                 animate={{ opacity: 1, scale: 1 }}
// // // //                 exit={{ opacity: 0, scale: 0.8 }}
// // // //                 className="text-center text-primary font-medium py-3"
// // // //               >
// // // //                 🎉 Donation confirmed! A volunteer will pick up soon.
// // // //               </motion.div>
// // // //             )}
// // // //           </AnimatePresence>
// // // //         </motion.div>
// // // //       )}

// // // //       {/* History */}
// // // //       <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
// // // //         <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
// // // //           <Clock className="w-5 h-5 text-primary" />
// // // //           Donation History
// // // //         </h3>
// // // //         <div className="space-y-3">
// // // //           {mockHistory.map((item, i) => {
// // // //             const cfg = statusConfig[item.status as keyof typeof statusConfig];
// // // //             return (
// // // //               <motion.div
// // // //                 key={item.id}
// // // //                 initial={{ opacity: 0, x: -20 }}
// // // //                 whileInView={{ opacity: 1, x: 0 }}
// // // //                 viewport={{ once: true }}
// // // //                 transition={{ delay: i * 0.1 }}
// // // //                 className={`glass-card p-4 border-l-2 ${cfg.border}`}
// // // //               >
// // // //                 <div className="flex items-center justify-between">
// // // //                   <div>
// // // //                     <p className="font-medium text-sm">{item.food}</p>
// // // //                     <p className="text-xs text-muted-foreground">{item.qty} · {item.time}</p>
// // // //                   </div>
// // // //                   <div className="text-right">
// // // //                     <div className={`flex items-center gap-1 text-xs ${cfg.color}`}>
// // // //                       <cfg.icon className="w-3 h-3" />
// // // //                       {cfg.label}
// // // //                     </div>
// // // //                     <p className="text-xs text-muted-foreground mt-0.5">-{item.co2} CO₂</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </motion.div>
// // // //             );
// // // //           })}
// // // //         </div>
// // // //       </motion.div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Donor;








// // // import { useState } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { Camera, Edit3, Package, Clock, CheckCircle2, AlertTriangle, Truck, Loader2 } from "lucide-react";
// // // import { toast } from "sonner"; // Import toast for notifications

// // // const mockHistory = [
// // //   { id: 1, food: "Rice & Curry", qty: "5.2 kg", time: "2h ago", co2: "1.2kg", status: "delivered" },
// // //   { id: 2, food: "Bread Loaves", qty: "3.0 kg", time: "5h ago", co2: "0.8kg", status: "transit" },
// // //   { id: 3, food: "Fruit Salad", qty: "2.1 kg", time: "1d ago", co2: "0.5kg", status: "expired" },
// // //   { id: 4, food: "Pasta", qty: "4.5 kg", time: "2d ago", co2: "1.0kg", status: "delivered" },
// // // ];

// // // const statusConfig = {
// // //   delivered: { color: "text-primary", border: "border-primary/30", icon: CheckCircle2, label: "Delivered" },
// // //   transit: { color: "text-yellow-400", border: "border-yellow-400/30", icon: Truck, label: "In Transit" },
// // //   expired: { color: "text-destructive", border: "border-destructive/30", icon: AlertTriangle, label: "Expired" },
// // // };

// // // const Donor = () => {
// // //   const [mode, setMode] = useState<"scan" | "manual">("scan");
// // //   const [scanning, setScanning] = useState(false);
// // //   const [scanned, setScanned] = useState(false);
// // //   const [confirmed, setConfirmed] = useState(false);
// // //   const [isSubmitting, setIsSubmitting] = useState(false); // New state for API loading
  
// // //   // Form State
// // //   const [form, setForm] = useState({ 
// // //     food: "", 
// // //     qty: "", 
// // //     expiry: "", 
// // //     window: "30 mins" 
// // //   });

// // //   // 1. Fake AI Scan Logic
// // //   const handleScan = () => {
// // //     setScanning(true);
// // //     setScanned(false);
    
// // //     // Simulate AI processing time
// // //     setTimeout(() => {
// // //       setScanning(false);
// // //       setScanned(true);
// // //       // Auto-fill form with "Detected" data
// // //       setForm({ food: "Steam Rice", qty: "5.2", expiry: "4 hours", window: "30 mins" });
// // //       toast.success("AI Analysis Complete: Food Detected!");
// // //     }, 2500);
// // //   };

// // //   // 2. Real Backend Connection
// // //   const handleConfirm = async () => {
// // //     setIsSubmitting(true);

// // //     try {
// // //       // Send data to your Node.js Backend
// // //       const response = await fetch("http://192.168.1.2:5000/api/donate", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           foodType: form.food,
// // //           quantity: form.qty,
// // //           expiry: form.expiry,
// // //           pickupTime: form.window
// // //         }),
// // //       });

// // //       if (response.ok) {
// // //         setConfirmed(true);
// // //         toast.success("Donation Broadcasted to Network!");
        
// // //         // Reset after 3 seconds
// // //         setTimeout(() => {
// // //           setConfirmed(false);
// // //           setScanned(false);
// // //           setForm({ food: "", qty: "", expiry: "", window: "30 mins" });
// // //         }, 3000);
// // //       } else {
// // //         throw new Error("Server rejected request");
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //       toast.error("Connection Failed. Is the backend running?");
// // //     } finally {
// // //       setIsSubmitting(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto">
// // //       <motion.h1
// // //         initial={{ opacity: 0, y: 20 }}
// // //         animate={{ opacity: 1, y: 0 }}
// // //         className="text-3xl font-display font-bold mb-8"
// // //       >
// // //         Donor <span className="gradient-text">Dashboard</span>
// // //       </motion.h1>

// // //       {/* Toggle Switch */}
// // //       <motion.div
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ delay: 0.2 }}
// // //         className="glass-card p-1 flex mb-8 max-w-xs"
// // //       >
// // //         {(["scan", "manual"] as const).map((m) => (
// // //           <button
// // //             key={m}
// // //             onClick={() => { setMode(m); setScanned(false); }}
// // //             className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
// // //               mode === m ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
// // //             }`}
// // //           >
// // //             {m === "scan" ? <Camera className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
// // //             {m === "scan" ? "AI Scan" : "Manual"}
// // //           </button>
// // //         ))}
// // //       </motion.div>

// // //       {/* Scan Mode UI */}
// // //       <AnimatePresence mode="wait">
// // //         {mode === "scan" && (
// // //           <motion.div
// // //             key="scan"
// // //             initial={{ opacity: 0, x: -20 }}
// // //             animate={{ opacity: 1, x: 0 }}
// // //             exit={{ opacity: 0, x: 20 }}
// // //             className="glass-card p-6 mb-8"
// // //           >
// // //             <div className="aspect-video rounded-xl bg-muted/30 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
// // //               {/* Scanning Animation Overlay */}
// // //               {scanning && (
// // //                 <motion.div
// // //                   className="absolute inset-0 bg-primary/5"
// // //                   animate={{ opacity: [0.1, 0.3, 0.1] }}
// // //                   transition={{ repeat: Infinity, duration: 1.5 }}
// // //                 />
// // //               )}
// // //               {scanning && (
// // //                 <motion.div
// // //                   className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_20px_rgba(0,255,178,0.5)]"
// // //                   animate={{ top: ["10%", "90%", "10%"] }}
// // //                   transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
// // //                 />
// // //               )}
              
// // //               {/* Camera Icon or Success State */}
// // //               {!scanning && !scanned && (
// // //                 <>
// // //                   <Camera className="w-12 h-12 text-muted-foreground mb-3" />
// // //                   <p className="text-muted-foreground text-sm">Position food item in frame</p>
// // //                 </>
// // //               )}
// // //               {scanned && (
// // //                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
// // //                   <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
// // //                   <p className="text-primary font-medium">Food Detected: Rice</p>
// // //                 </motion.div>
// // //               )}
// // //             </div>

// // //             {!scanned && (
// // //               <button 
// // //                 onClick={handleScan} 
// // //                 disabled={scanning} 
// // //                 className="btn-glow-solid w-full flex items-center justify-center gap-2"
// // //               >
// // //                 {scanning ? "Scanning..." : "Scan Food"}
// // //               </button>
// // //             )}

// // //             {scanning && (
// // //               <div className="mt-4">
// // //                 <div className="h-1.5 bg-muted rounded-full overflow-hidden">
// // //                   <motion.div
// // //                     className="h-full bg-primary rounded-full"
// // //                     initial={{ width: "0%" }}
// // //                     animate={{ width: "100%" }}
// // //                     transition={{ duration: 2.5 }}
// // //                   />
// // //                 </div>
// // //                 <p className="text-xs text-muted-foreground mt-2 text-center">AI analyzing food item...</p>
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {/* Donation Form */}
// // //       {(mode === "manual" || scanned) && (
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="glass-card p-6 mb-8 space-y-4"
// // //         >
// // //           <h3 className="font-display font-semibold text-lg mb-2">
// // //             {scanned ? "AI Results" : "Enter Details"}
// // //           </h3>
// // //           {[
// // //             { label: "Food Type", key: "food", placeholder: "e.g., Rice, Bread" },
// // //             { label: "Quantity (kg)", key: "qty", placeholder: "e.g., 5.2" },
// // //             { label: "Expiry Time", key: "expiry", placeholder: "e.g., 4 hours" },
// // //             { label: "Pickup Window", key: "window", placeholder: "e.g., 30 mins" },
// // //           ].map((field) => (
// // //             <div key={field.key}>
// // //               <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
// // //               <input
// // //                 type="text"
// // //                 value={form[field.key as keyof typeof form]}
// // //                 onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
// // //                 placeholder={field.placeholder}
// // //                 className="w-full bg-muted/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
// // //               />
// // //             </div>
// // //           ))}

// // //           <button 
// // //             onClick={handleConfirm} 
// // //             disabled={isSubmitting}
// // //             className="btn-glow-solid w-full mt-4 flex items-center justify-center gap-2"
// // //           >
// // //             {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Package className="w-4 h-4" />}
// // //             {isSubmitting ? "Broadcasting..." : "Confirm Donation"}
// // //           </button>

// // //           <AnimatePresence>
// // //             {confirmed && (
// // //               <motion.div
// // //                 initial={{ opacity: 0, scale: 0.8 }}
// // //                 animate={{ opacity: 1, scale: 1 }}
// // //                 exit={{ opacity: 0, scale: 0.8 }}
// // //                 className="text-center text-primary font-medium py-3"
// // //               >
// // //                 🎉 Donation confirmed! A volunteer will pick up soon.
// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>
// // //         </motion.div>
// // //       )}

// // //       {/* Donation History */}
// // //       <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
// // //         <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
// // //           <Clock className="w-5 h-5 text-primary" />
// // //           Donation History
// // //         </h3>
// // //         <div className="space-y-3">
// // //           {mockHistory.map((item, i) => {
// // //             const cfg = statusConfig[item.status as keyof typeof statusConfig];
// // //             return (
// // //               <motion.div
// // //                 key={item.id}
// // //                 initial={{ opacity: 0, x: -20 }}
// // //                 whileInView={{ opacity: 1, x: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ delay: i * 0.1 }}
// // //                 className={`glass-card p-4 border-l-2 ${cfg.border}`}
// // //               >
// // //                 <div className="flex items-center justify-between">
// // //                   <div>
// // //                     <p className="font-medium text-sm">{item.food}</p>
// // //                     <p className="text-xs text-muted-foreground">{item.qty} · {item.time}</p>
// // //                   </div>
// // //                   <div className="text-right">
// // //                     <div className={`flex items-center gap-1 text-xs ${cfg.color}`}>
// // //                       <cfg.icon className="w-3 h-3" />
// // //                       {cfg.label}
// // //                     </div>
// // //                     <p className="text-xs text-muted-foreground mt-0.5">-{item.co2} CO₂</p>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             );
// // //           })}
// // //         </div>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // };

// // // export default Donor;




// // import { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Camera, Edit3, Package, Clock, CheckCircle2, AlertTriangle, Truck, Loader2 } from "lucide-react";
// // import { toast } from "sonner";
// // import { useAuth } from "@/context/AuthContext"; // To get User ID

// // const statusConfig = {
// //   pending: { color: "text-blue-400", border: "border-blue-400/30", icon: Clock, label: "Pending" },
// //   delivered: { color: "text-primary", border: "border-primary/30", icon: CheckCircle2, label: "Delivered" },
// //   transit: { color: "text-yellow-400", border: "border-yellow-400/30", icon: Truck, label: "In Transit" },
// //   expired: { color: "text-destructive", border: "border-destructive/30", icon: AlertTriangle, label: "Expired" },
// // };

// // const Donor = () => {
// //   const { user } = useAuth(); // Get Logged In User
// //   const [mode, setMode] = useState<"scan" | "manual">("scan");
// //   const [scanning, setScanning] = useState(false);
// //   const [scanned, setScanned] = useState(false);
// //   const [confirmed, setConfirmed] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
  
// //   // REAL DATA STATE
// //   const [history, setHistory] = useState<any[]>([]);
// //   const [loadingHistory, setLoadingHistory] = useState(true);

// //   const [form, setForm] = useState({ 
// //     food: "", 
// //     qty: "", 
// //     expiry: "", 
// //     window: "30 mins" 
// //   });

// //   // FETCH HISTORY ON LOAD
// //   useEffect(() => {
// //     fetchDonations();
// //   }, [user]);

// //   const fetchDonations = async () => {
// //     try {
// //       // Pass userId to only get MY donations
// //       const res = await fetch(`http://192.168.1.2:5000/api/donations?userId=${user?.id}`);
// //       const data = await res.json();
// //       setHistory(data);
// //     } catch (err) {
// //       console.error("Failed to load history");
// //     } finally {
// //       setLoadingHistory(false);
// //     }
// //   };

// //   // 1. Fake AI Scan
// //   const handleScan = () => {
// //     setScanning(true);
// //     setScanned(false);
// //     setTimeout(() => {
// //       setScanning(false);
// //       setScanned(true);
// //       setForm({ food: "Steam Rice", qty: "5.2", expiry: "4 hours", window: "30 mins" });
// //       toast.success("AI Analysis Complete: Food Detected!");
// //     }, 2500);
// //   };

// //   // 2. Real Backend Submission
// //   const handleConfirm = async () => {
// //     setIsSubmitting(true);
// //     try {
// //       const response = await fetch("http://192.168.1.2:5000/api/donate", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           foodType: form.food,
// //           quantity: form.qty,
// //           expiry: form.expiry,
// //           pickupTime: form.window,
// //           donorId: user?.id,      // Send User ID
// //           donorName: user?.name || user?.organization // Send Name
// //         }),
// //       });

// //       if (response.ok) {
// //         setConfirmed(true);
// //         toast.success("Donation Broadcasted to Network!");
// //         fetchDonations(); // REFRESH THE LIST INSTANTLY
        
// //         setTimeout(() => {
// //           setConfirmed(false);
// //           setScanned(false);
// //           setForm({ food: "", qty: "", expiry: "", window: "30 mins" });
// //         }, 3000);
// //       }
// //     } catch (error) {
// //       toast.error("Connection Failed");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto">
// //       <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-display font-bold mb-8">
// //         Donate <span className="gradient-text">Food</span>
// //       </motion.h1>

// //       {/* Toggle Switch */}
// //       <div className="glass-card p-1 flex mb-8 max-w-xs">
// //         {(["scan", "manual"] as const).map((m) => (
// //           <button
// //             key={m}
// //             onClick={() => { setMode(m); setScanned(false); }}
// //             className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
// //               mode === m ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
// //             }`}
// //           >
// //             {m === "scan" ? <Camera className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
// //             {m === "scan" ? "AI Scan" : "Manual"}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Scan Mode UI */}
// //       <AnimatePresence mode="wait">
// //         {mode === "scan" && (
// //           <motion.div key="scan" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-card p-6 mb-8">
// //             <div className="aspect-video rounded-xl bg-muted/30 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
// //               {scanning && (
// //                 <motion.div className="absolute inset-0 bg-primary/5" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
// //               )}
// //               {scanning && (
// //                 <motion.div className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_20px_rgba(0,255,178,0.5)]" animate={{ top: ["10%", "90%", "10%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
// //               )}
              
// //               {!scanning && !scanned && (
// //                 <>
// //                   <Camera className="w-12 h-12 text-muted-foreground mb-3" />
// //                   <p className="text-muted-foreground text-sm">Position food item in frame</p>
// //                 </>
// //               )}
// //               {scanned && (
// //                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
// //                   <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
// //                   <p className="text-primary font-medium">Food Detected: Rice</p>
// //                 </motion.div>
// //               )}
// //             </div>

// //             {!scanned && (
// //               <button onClick={handleScan} disabled={scanning} className="btn-glow-solid w-full flex items-center justify-center gap-2">
// //                 {scanning ? "Scanning..." : "Scan Food"}
// //               </button>
// //             )}

// //             {scanning && (
// //               <p className="text-xs text-muted-foreground mt-4 text-center">AI analyzing food item...</p>
// //             )}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Form */}
// //       {(mode === "manual" || scanned) && (
// //         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 mb-8 space-y-4">
// //           <h3 className="font-display font-semibold text-lg mb-2">{scanned ? "AI Results" : "Enter Details"}</h3>
// //           {[
// //             { label: "Food Type", key: "food", placeholder: "e.g., Rice, Bread" },
// //             { label: "Quantity (kg)", key: "qty", placeholder: "e.g., 5.2" },
// //             { label: "Expiry Time", key: "expiry", placeholder: "e.g., 4 hours" },
// //             { label: "Pickup Window", key: "window", placeholder: "e.g., 30 mins" },
// //           ].map((field) => (
// //             <div key={field.key}>
// //               <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
// //               <input type="text" value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} placeholder={field.placeholder} className="w-full bg-muted/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary transition-colors" />
// //             </div>
// //           ))}

// //           <button onClick={handleConfirm} disabled={isSubmitting} className="btn-glow-solid w-full mt-4 flex items-center justify-center gap-2">
// //             {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Package className="w-4 h-4" />}
// //             {isSubmitting ? "Broadcasting..." : "Confirm Donation"}
// //           </button>
// //         </motion.div>
// //       )}

// //       {/* Real History List */}
// //       <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
// //         <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
// //           <Clock className="w-5 h-5 text-primary" />
// //           Donation History
// //         </h3>
        
// //         {loadingHistory ? (
// //            <div className="text-center text-muted-foreground py-4">Loading history...</div>
// //         ) : history.length === 0 ? (
// //            <div className="text-center text-muted-foreground py-4 glass-card">No donations yet. Start today!</div>
// //         ) : (
// //           <div className="space-y-3">
// //             {history.map((item, i) => {
// //               // Map DB status to our config, default to 'pending' if unknown
// //               const statusKey = item.status || 'pending'; 
// //               const cfg = statusConfig[statusKey as keyof typeof statusConfig] || statusConfig.pending;
              
// //               return (
// //                 <motion.div
// //                   key={item._id}
// //                   initial={{ opacity: 0, x: -20 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: i * 0.1 }}
// //                   className={`glass-card p-4 border-l-2 ${cfg.border}`}
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <p className="font-medium text-sm">{item.foodType}</p>
// //                       <p className="text-xs text-muted-foreground">{item.quantity} kg · {item.expiry}</p>
// //                     </div>
// //                     <div className="text-right">
// //                       <div className={`flex items-center gap-1 text-xs ${cfg.color}`}>
// //                         <cfg.icon className="w-3 h-3" />
// //                         {cfg.label}
// //                       </div>
// //                       <p className="text-xs text-muted-foreground mt-0.5">-{item.co2Saved || 0}kg CO₂</p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Donor;



// // import { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Camera, Edit3, Package, Clock, CheckCircle2, AlertTriangle, Truck, Loader2, MapPin } from "lucide-react";
// // import { toast } from "sonner";
// // import { useAuth } from "@/context/AuthContext"; // To get User ID

// // const statusConfig = {
// //   pending: { color: "text-blue-400", border: "border-blue-400/30", icon: Clock, label: "Pending" },
// //   accepted: { color: "text-emerald-400", border: "border-emerald-400/30", icon: CheckCircle2, label: "Accepted" },
// //   assigned: { color: "text-purple-400", border: "border-purple-400/30", icon: Truck, label: "Driver Assigned" },
// //   delivered: { color: "text-primary", border: "border-primary/30", icon: CheckCircle2, label: "Delivered" },
// //   transit: { color: "text-yellow-400", border: "border-yellow-400/30", icon: Truck, label: "In Transit" },
// //   expired: { color: "text-destructive", border: "border-destructive/30", icon: AlertTriangle, label: "Expired" },
// // };

// // const Donor = () => {
// //   const { user } = useAuth(); // Get Logged In User
// //   const [mode, setMode] = useState<"scan" | "manual">("scan");
// //   const [scanning, setScanning] = useState(false);
// //   const [scanned, setScanned] = useState(false);
// //   const [confirmed, setConfirmed] = useState(false);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
  
// //   // LOCATION STATE
// //   const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
// //   const [locStatus, setLocStatus] = useState("Locating...");

// //   // REAL DATA STATE
// //   const [history, setHistory] = useState<any[]>([]);
// //   const [loadingHistory, setLoadingHistory] = useState(true);

// //   const [form, setForm] = useState({ 
// //     food: "", 
// //     qty: "", 
// //     expiry: "", 
// //     window: "30 mins" 
// //   });

// //   // 1. GET LOCATION & HISTORY ON LOAD
// //   useEffect(() => {
// //     fetchDonations();

// //     if (navigator.geolocation) {
// //         navigator.geolocation.getCurrentPosition(
// //             (position) => {
// //                 setLocation({
// //                     lat: position.coords.latitude,
// //                     lng: position.coords.longitude
// //                 });
// //                 setLocStatus("Location Secured");
// //             },
// //             () => {
// //                 setLocStatus("Location Denied (Using Default)");
// //                 toast.error("Location access denied. Using default coordinates.");
// //             }
// //         );
// //     } else {
// //         setLocStatus("Geolocation not supported");
// //     }
// //   }, [user]);

// //   const fetchDonations = async () => {
// //     try {
// //       // Pass userId to only get MY donations
// //       const res = await fetch(`http://192.168.1.2:5000/api/donations?userId=${user?.id}`);
// //       const data = await res.json();
// //       setHistory(data);
// //     } catch (err) {
// //       console.error("Failed to load history");
// //     } finally {
// //       setLoadingHistory(false);
// //     }
// //   };

// //   // 2. Fake AI Scan
// //   const handleScan = () => {
// //     setScanning(true);
// //     setScanned(false);
// //     setTimeout(() => {
// //       setScanning(false);
// //       setScanned(true);
// //       setForm({ food: "Steam Rice", qty: "5.2", expiry: "4 hours", window: "30 mins" });
// //       toast.success("AI Analysis Complete: Food Detected!");
// //     }, 2500);
// //   };

// //   // 3. Real Backend Submission
// //   const handleConfirm = async () => {
// //     setIsSubmitting(true);
// //     try {
// //       const response = await fetch("http://192.168.1.2:5000/api/donate", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           foodType: form.food,
// //           quantity: form.qty,
// //           expiry: form.expiry,
// //           pickupTime: form.window,
// //           donorId: user?.id,      // Send User ID
// //           donorName: user?.name || user?.organization, // Send Name
// //           // SEND CAPTURED LOCATION (Default to Hyd if null)
// //           location: location || { lat: 17.3850, lng: 78.4867 }
// //         }),
// //       });

// //       if (response.ok) {
// //         setConfirmed(true);
// //         toast.success("Donation Broadcasted to Network!");
// //         fetchDonations(); // REFRESH THE LIST INSTANTLY
        
// //         setTimeout(() => {
// //           setConfirmed(false);
// //           setScanned(false);
// //           setForm({ food: "", qty: "", expiry: "", window: "30 mins" });
// //         }, 3000);
// //       }
// //     } catch (error) {
// //       toast.error("Connection Failed");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto">
// //       <div className="flex justify-between items-center mb-8">
// //         <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-display font-bold">
// //             Donate <span className="gradient-text">Food</span>
// //         </motion.h1>
        
// //         {/* Location Status Badge */}
// //         <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
// //             <MapPin className={`w-3 h-3 ${location ? "text-emerald-400" : "text-yellow-400"}`} />
// //             {locStatus}
// //         </div>
// //       </div>

// //       {/* Toggle Switch */}
// //       <div className="glass-card p-1 flex mb-8 max-w-xs">
// //         {(["scan", "manual"] as const).map((m) => (
// //           <button
// //             key={m}
// //             onClick={() => { setMode(m); setScanned(false); }}
// //             className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
// //               mode === m ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
// //             }`}
// //           >
// //             {m === "scan" ? <Camera className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
// //             {m === "scan" ? "AI Scan" : "Manual"}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Scan Mode UI */}
// //       <AnimatePresence mode="wait">
// //         {mode === "scan" && (
// //           <motion.div key="scan" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-card p-6 mb-8">
// //             <div className="aspect-video rounded-xl bg-muted/30 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
// //               {scanning && (
// //                 <motion.div className="absolute inset-0 bg-primary/5" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
// //               )}
// //               {scanning && (
// //                 <motion.div className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_20px_rgba(0,255,178,0.5)]" animate={{ top: ["10%", "90%", "10%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
// //               )}
              
// //               {!scanning && !scanned && (
// //                 <>
// //                   <Camera className="w-12 h-12 text-muted-foreground mb-3" />
// //                   <p className="text-muted-foreground text-sm">Position food item in frame</p>
// //                 </>
// //               )}
// //               {scanned && (
// //                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
// //                   <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
// //                   <p className="text-primary font-medium">Food Detected: Rice</p>
// //                 </motion.div>
// //               )}
// //             </div>

// //             {!scanned && (
// //               <button onClick={handleScan} disabled={scanning} className="btn-glow-solid w-full flex items-center justify-center gap-2">
// //                 {scanning ? "Scanning..." : "Scan Food"}
// //               </button>
// //             )}

// //             {scanning && (
// //               <p className="text-xs text-muted-foreground mt-4 text-center">AI analyzing food item...</p>
// //             )}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {/* Form */}
// //       {(mode === "manual" || scanned) && (
// //         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 mb-8 space-y-4">
// //           <h3 className="font-display font-semibold text-lg mb-2">{scanned ? "AI Results" : "Enter Details"}</h3>
// //           {[
// //             { label: "Food Type", key: "food", placeholder: "e.g., Rice, Bread" },
// //             { label: "Quantity (kg)", key: "qty", placeholder: "e.g., 5.2" },
// //             { label: "Expiry Time", key: "expiry", placeholder: "e.g., 4 hours" },
// //             { label: "Pickup Window", key: "window", placeholder: "e.g., 30 mins" },
// //           ].map((field) => (
// //             <div key={field.key}>
// //               <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
// //               <input type="text" value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} placeholder={field.placeholder} className="w-full bg-muted/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary transition-colors" />
// //             </div>
// //           ))}

// //           <button onClick={handleConfirm} disabled={isSubmitting} className="btn-glow-solid w-full mt-4 flex items-center justify-center gap-2">
// //             {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Package className="w-4 h-4" />}
// //             {isSubmitting ? "Broadcasting..." : "Confirm Donation"}
// //           </button>
// //         </motion.div>
// //       )}

// //       {/* Real History List */}
// //       <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
// //         <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
// //           <Clock className="w-5 h-5 text-primary" />
// //           Donation History
// //         </h3>
        
// //         {loadingHistory ? (
// //            <div className="text-center text-muted-foreground py-4">Loading history...</div>
// //         ) : history.length === 0 ? (
// //            <div className="text-center text-muted-foreground py-4 glass-card">No donations yet. Start today!</div>
// //         ) : (
// //           <div className="space-y-3">
// //             {history.map((item, i) => {
// //               // Map DB status to our config, default to 'pending' if unknown
// //               const statusKey = item.status || 'pending'; 
// //               const cfg = statusConfig[statusKey as keyof typeof statusConfig] || statusConfig.pending;
              
// //               return (
// //                 <motion.div
// //                   key={item._id}
// //                   initial={{ opacity: 0, x: -20 }}
// //                   whileInView={{ opacity: 1, x: 0 }}
// //                   viewport={{ once: true }}
// //                   transition={{ delay: i * 0.1 }}
// //                   className={`glass-card p-4 border-l-2 ${cfg.border}`}
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <p className="font-medium text-sm">{item.foodType}</p>
// //                       <p className="text-xs text-muted-foreground">{item.quantity} kg · {item.expiry}</p>
// //                       {item.location && <p className="text-[10px] text-muted-foreground/50 mt-1">📍 Lat: {item.location.lat?.toFixed(4)}, Lng: {item.location.lng?.toFixed(4)}</p>}
// //                     </div>
// //                     <div className="text-right">
// //                       <div className={`flex items-center gap-1 text-xs ${cfg.color}`}>
// //                         <cfg.icon className="w-3 h-3" />
// //                         {cfg.label}
// //                       </div>
// //                       <p className="text-xs text-muted-foreground mt-0.5">-{item.co2Saved || 0}kg CO₂</p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Donor;





// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Camera, Edit3, Package, Clock, CheckCircle2, AlertTriangle, Truck, Loader2, MapPin, Navigation } from "lucide-react";
// import { toast } from "sonner";
// import { useAuth } from "@/context/AuthContext"; 
// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// // --- LEAFLET ICON FIX ---
// import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const DefaultIcon = L.icon({
//   iconUrl: icon, shadowUrl: iconShadow,
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const statusConfig = {
//   pending: { color: "text-blue-400", border: "border-blue-400/30", icon: Clock, label: "Pending" },
//   accepted: { color: "text-emerald-400", border: "border-emerald-400/30", icon: CheckCircle2, label: "Accepted" },
//   assigned: { color: "text-purple-400", border: "border-purple-400/30", icon: Truck, label: "Driver Assigned" },
//   delivered: { color: "text-primary", border: "border-primary/30", icon: CheckCircle2, label: "Delivered" },
//   transit: { color: "text-yellow-400", border: "border-yellow-400/30", icon: Truck, label: "In Transit" },
//   expired: { color: "text-destructive", border: "border-destructive/30", icon: AlertTriangle, label: "Expired" },
// };

// // Helper component to handle map clicks
// const LocationMarker = ({ setPos, pos }: { setPos: (latlng: { lat: number, lng: number }) => void, pos: { lat: number, lng: number } | null }) => {
//   useMapEvents({
//     click(e) {
//       setPos(e.latlng);
//     },
//   });
//   return pos ? <Marker position={pos} /> : null;
// };

// const Donor = () => {
//   const { user } = useAuth();
//   const [mode, setMode] = useState<"scan" | "manual">("scan");
//   const [scanning, setScanning] = useState(false);
//   const [scanned, setScanned] = useState(false);
//   const [confirmed, setConfirmed] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
  
//   // LOCATION STATE
//   const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
//   const [locStatus, setLocStatus] = useState("Locating...");
  
//   // NEW STATES FOR MODAL
//   const [showLocModal, setShowLocModal] = useState(false);
//   const [pickerMode, setPickerMode] = useState(false);

//   // REAL DATA STATE
//   const [history, setHistory] = useState<any[]>([]);
//   const [loadingHistory, setLoadingHistory] = useState(true);

//   const [form, setForm] = useState({ 
//     food: "", 
//     qty: "", 
//     expiry: "", 
//     window: "30 mins" 
//   });

//   // 1. GET LOCATION & HISTORY ON LOAD
//   useEffect(() => {
//     fetchDonations();

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 setLocation({
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 });
//                 setLocStatus("Location Secured");
//             },
//             () => {
//                 setLocStatus("Location Denied");
//                 toast.error("Location access denied. Using default coordinates.");
//             }
//         );
//     } else {
//         setLocStatus("Geolocation not supported");
//     }
//   }, [user]);

//   const fetchDonations = async () => {
//     try {
//       const res = await fetch(`http://192.168.1.2:5000/api/donations?userId=${user?.id}`);
//       const data = await res.json();
//       setHistory(data);
//     } catch (err) {
//       console.error("Failed to load history");
//     } finally {
//       setLoadingHistory(false);
//     }
//   };

//   const handleScan = () => {
//     setScanning(true);
//     setScanned(false);
//     setTimeout(() => {
//       setScanning(false);
//       setScanned(true);
//       setForm({ food: "Steam Rice", qty: "5.2", expiry: "4 hours", window: "30 mins" });
//       toast.success("AI Analysis Complete: Food Detected!");
//     }, 2500);
//   };

//   // --- NEW: INITIATE DONATION (OPENS MODAL) ---
//   const initiateDonation = () => {
//     if (!form.food || !form.qty) {
//         toast.error("Please fill in food details first");
//         return;
//     }
//     setShowLocModal(true);
//     setPickerMode(false);
//   };

//   // --- NEW: USE GPS ---
//   const useCurrentLocation = () => {
//     if (!navigator.geolocation) {
//         toast.error("Geolocation not supported");
//         return;
//     }
//     toast.info("Fetching GPS...");
//     navigator.geolocation.getCurrentPosition(
//         (pos) => {
//             const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//             setLocation(loc);
//             submitDonation(loc);
//         },
//         () => {
//             toast.error("GPS Denied. Please pick on map.");
//             setPickerMode(true);
//         }
//     );
//   };

//   // --- NEW: SUBMIT TO API ---
//   const submitDonation = async (finalLoc: { lat: number, lng: number }) => {
//     setShowLocModal(false);
//     setIsSubmitting(true);
//     try {
//       const response = await fetch("http://192.168.1.2:5000/api/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           foodType: form.food,
//           quantity: form.qty,
//           expiry: form.expiry,
//           pickupTime: form.window,
//           donorId: user?.id,      
//           donorName: user?.name || user?.organization,
//           location: finalLoc // Use the selected location
//         }),
//       });

//       if (response.ok) {
//         setConfirmed(true);
//         toast.success("Donation Broadcasted to Network!");
//         fetchDonations(); 
        
//         setTimeout(() => {
//           setConfirmed(false);
//           setScanned(false);
//           setForm({ food: "", qty: "", expiry: "", window: "30 mins" });
//         }, 3000);
//       }
//     } catch (error) {
//       toast.error("Connection Failed");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto relative">
//       <div className="flex justify-between items-center mb-8">
//         <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-display font-bold">
//             Donate <span className="gradient-text">Food</span>
//         </motion.h1>
        
//         <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
//             <MapPin className={`w-3 h-3 ${location ? "text-emerald-400" : "text-yellow-400"}`} />
//             {locStatus}
//         </div>
//       </div>

//       {/* --- LOCATION SELECTION MODAL --- */}
//       <AnimatePresence>
//         {showLocModal && (
//           <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//             <motion.div initial={{scale:0.9}} animate={{scale:1}} className="bg-[#0B0F1A] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <MapPin className="text-primary" /> Select Pickup Location
//               </h2>

//               {!pickerMode ? (
//                 // OPTION 1: BUTTONS
//                 <div className="space-y-3">
//                   <button onClick={useCurrentLocation} className="w-full py-4 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all flex items-center justify-center gap-2 font-bold">
//                     <Navigation className="w-5 h-5" /> Use My Current Location
//                   </button>
//                   <div className="text-center text-muted-foreground text-xs font-bold my-2">- OR -</div>
//                   <button onClick={() => setPickerMode(true)} className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold flex items-center justify-center gap-2">
//                     <MapPin className="w-5 h-5" /> Select on Map
//                   </button>
//                   <button onClick={() => setShowLocModal(false)} className="w-full py-2 text-sm text-muted-foreground hover:text-white mt-2">Cancel</button>
//                 </div>
//               ) : (
//                 // OPTION 2: MAP PICKER
//                 <div className="space-y-4">
//                   <p className="text-sm text-muted-foreground">Tap on the map to pin the exact pickup spot.</p>
                  
//                   <div className="h-64 rounded-xl overflow-hidden border border-white/10 relative">
//                     <MapContainer center={[17.3850, 78.4867]} zoom={13} style={{ height: "100%", width: "100%" }}>
//                       <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
//                       <LocationMarker setPos={setLocation} pos={location} />
//                     </MapContainer>
//                     {!location && <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[400] text-xs text-white bg-black/30">Tap to Pin</div>}
//                   </div>

//                   <div className="flex gap-3">
//                     <button onClick={() => setPickerMode(false)} className="flex-1 py-3 rounded-lg border border-white/10 text-muted-foreground hover:bg-white/5">Back</button>
//                     <button onClick={() => location && submitDonation(location)} className="flex-1 py-3 rounded-lg bg-primary text-black font-bold disabled:opacity-50 hover:bg-primary/90" disabled={!location}>
//                       Confirm Location
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="glass-card p-1 flex mb-8 max-w-xs">
//         {(["scan", "manual"] as const).map((m) => (
//           <button
//             key={m}
//             onClick={() => { setMode(m); setScanned(false); }}
//             className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
//               mode === m ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
//             }`}
//           >
//             {m === "scan" ? <Camera className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
//             {m === "scan" ? "AI Scan" : "Manual"}
//           </button>
//         ))}
//       </div>

//       <AnimatePresence mode="wait">
//         {mode === "scan" && (
//           <motion.div key="scan" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-card p-6 mb-8">
//             <div className="aspect-video rounded-xl bg-muted/30 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
//               {scanning && (
//                 <motion.div className="absolute inset-0 bg-primary/5" animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
//               )}
//               {scanning && (
//                 <motion.div className="absolute left-0 right-0 h-0.5 bg-primary shadow-[0_0_20px_rgba(0,255,178,0.5)]" animate={{ top: ["10%", "90%", "10%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
//               )}
              
//               {!scanning && !scanned && (
//                 <>
//                   <Camera className="w-12 h-12 text-muted-foreground mb-3" />
//                   <p className="text-muted-foreground text-sm">Position food item in frame</p>
//                 </>
//               )}
//               {scanned && (
//                 <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
//                   <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
//                   <p className="text-primary font-medium">Food Detected: Rice</p>
//                 </motion.div>
//               )}
//             </div>

//             {!scanned && (
//               <button onClick={handleScan} disabled={scanning} className="btn-glow-solid w-full flex items-center justify-center gap-2">
//                 {scanning ? "Scanning..." : "Scan Food"}
//               </button>
//             )}

//             {scanning && (
//               <p className="text-xs text-muted-foreground mt-4 text-center">AI analyzing food item...</p>
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {(mode === "manual" || scanned) && (
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 mb-8 space-y-4">
//           <h3 className="font-display font-semibold text-lg mb-2">{scanned ? "AI Results" : "Enter Details"}</h3>
//           {[
//             { label: "Food Type", key: "food", placeholder: "e.g., Rice, Bread" },
//             { label: "Quantity (kg)", key: "qty", placeholder: "e.g., 5.2" },
//             { label: "Expiry Time", key: "expiry", placeholder: "e.g., 4 hours" },
//             { label: "Pickup Window", key: "window", placeholder: "e.g., 30 mins" },
//           ].map((field) => (
//             <div key={field.key}>
//               <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
//               <input type="text" value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} placeholder={field.placeholder} className="w-full bg-muted/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary transition-colors" />
//             </div>
//           ))}

//           {/* CHANGED BUTTON */}
//           <button onClick={initiateDonation} disabled={isSubmitting} className="btn-glow-solid w-full mt-4 flex items-center justify-center gap-2">
//             {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Package className="w-4 h-4" />}
//             Confirm & Select Location
//           </button>
//         </motion.div>
//       )}

//       {/* Real History List */}
//       <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
//         <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
//           <Clock className="w-5 h-5 text-primary" />
//           Donation History
//         </h3>
        
//         {loadingHistory ? (
//            <div className="text-center text-muted-foreground py-4">Loading history...</div>
//         ) : history.length === 0 ? (
//            <div className="text-center text-muted-foreground py-4 glass-card">No donations yet. Start today!</div>
//         ) : (
//           <div className="space-y-3">
//             {history.map((item, i) => {
//               const statusKey = item.status || 'pending'; 
//               const cfg = statusConfig[statusKey as keyof typeof statusConfig] || statusConfig.pending;
              
//               return (
//                 <motion.div
//                   key={item._id}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1 }}
//                   className={`glass-card p-4 border-l-2 ${cfg.border}`}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-medium text-sm">{item.foodType}</p>
//                       <p className="text-xs text-muted-foreground">{item.quantity} kg · {item.expiry}</p>
//                       {item.location && <p className="text-[10px] text-muted-foreground/50 mt-1">📍 Lat: {item.location.lat?.toFixed(4)}, Lng: {item.location.lng?.toFixed(4)}</p>}
//                     </div>
//                     <div className="text-right">
//                       <div className={`flex items-center gap-1 text-xs ${cfg.color}`}>
//                         <cfg.icon className="w-3 h-3" />
//                         {cfg.label}
//                       </div>
//                       <p className="text-xs text-muted-foreground mt-0.5">-{item.co2Saved || 0}kg CO₂</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default Donor;




// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Camera, Edit3, Package, Clock, CheckCircle2, AlertTriangle, Truck, Loader2, MapPin, Navigation, Search } from "lucide-react";
// import { toast } from "sonner";
// import { useAuth } from "@/context/AuthContext"; 
// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// // --- LEAFLET ICON FIX ---
// import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const DefaultIcon = L.icon({
//   iconUrl: icon, shadowUrl: iconShadow,
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const statusConfig = {
//   pending: { color: "text-blue-400", border: "border-blue-400/30", icon: Clock, label: "Pending" },
//   accepted: { color: "text-emerald-400", border: "border-emerald-400/30", icon: CheckCircle2, label: "Accepted" },
//   assigned: { color: "text-purple-400", border: "border-purple-400/30", icon: Truck, label: "Driver Assigned" },
//   delivered: { color: "text-primary", border: "border-primary/30", icon: CheckCircle2, label: "Delivered" },
//   transit: { color: "text-yellow-400", border: "border-yellow-400/30", icon: Truck, label: "In Transit" },
//   expired: { color: "text-destructive", border: "border-destructive/30", icon: AlertTriangle, label: "Expired" },
// };

// // --- HELPER 1: HANDLE MAP CLICKS ---
// const LocationMarker = ({ setPos, pos }: { setPos: (latlng: { lat: number, lng: number }) => void, pos: { lat: number, lng: number } | null }) => {
//   useMapEvents({
//     click(e) {
//       setPos(e.latlng);
//     },
//   });
//   return pos ? <Marker position={pos} /> : null;
// };

// // --- HELPER 2: MOVE MAP CAMERA ---
// // This component listens for changes in 'center' and moves the map view
// const ChangeView = ({ center }: { center: { lat: number, lng: number } }) => {
//   const map = useMap();
//   map.setView(center, 15); // Zoom level 15
//   return null;
// };

// const Donor = () => {
//   const { user } = useAuth();
//   const [mode, setMode] = useState<"scan" | "manual">("scan");
//   const [scanning, setScanning] = useState(false);
//   const [scanned, setScanned] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [confirmed, setConfirmed] = useState(false);
  
//   // LOCATION STATE
//   const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
//   const [mapCenter, setMapCenter] = useState<{lat: number, lng: number}>({ lat: 17.3850, lng: 78.4867 }); // Default: Hyd
//   const [showLocModal, setShowLocModal] = useState(false);
//   const [pickerMode, setPickerMode] = useState(false);
//   const [locStatus, setLocStatus] = useState("Ready to Donate");
  
//   // SEARCH STATE
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSearching, setIsSearching] = useState(false);

//   // DATA
//   const [history, setHistory] = useState<any[]>([]);
//   const [loadingHistory, setLoadingHistory] = useState(true);

//   const [form, setForm] = useState({ 
//     food: "", 
//     qty: "", 
//     expiry: "", 
//     window: "30 mins" 
//   });

//   useEffect(() => {
//     fetchDonations();

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 const userPos = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 };
//                 // Don't set location automatically, just center map there if needed
//                 // setMapCenter(userPos); 
//                 setLocStatus("Location Secured");
//             },
//             () => {
//                 setLocStatus("Location Denied");
//                 toast.error("Location access denied.");
//             }
//         );
//     }
//   }, [user]);

//   const fetchDonations = async () => {
//     try {
//       const res = await fetch(`http://192.168.1.2:5000/api/donations?userId=${user?.id}`);
//       const data = await res.json();
//       setHistory(data);
//     } catch (err) { console.error("History Error"); } 
//     finally { setLoadingHistory(false); }
//   };

//   const handleScan = () => {
//     setScanning(true);
//     setScanned(false);
//     setTimeout(() => {
//       setScanning(false);
//       setScanned(true);
//       setForm({ food: "Steam Rice", qty: "5.2", expiry: "4 hours", window: "30 mins" });
//       toast.success("Food Detected!");
//     }, 2500);
//   };

//   // --- MAP SEARCH FUNCTION ---
//   const handleSearch = async () => {
//     if (!searchQuery) return;
//     setIsSearching(true);
    
//     try {
//         // Use OpenStreetMap Nominatim API (Free)
//         const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`);
//         const data = await res.json();

//         if (data && data.length > 0) {
//             const firstResult = data[0];
//             const newLoc = {
//                 lat: parseFloat(firstResult.lat),
//                 lng: parseFloat(firstResult.lon)
//             };
            
//             // Move Map & Drop Pin
//             setMapCenter(newLoc);
//             setLocation(newLoc);
//             toast.success(`Found: ${firstResult.display_name.split(",")[0]}`);
//         } else {
//             toast.error("Location not found");
//         }
//     } catch (error) {
//         toast.error("Search failed");
//     } finally {
//         setIsSearching(false);
//     }
//   };

//   const initiateDonation = () => {
//     if (!form.food || !form.qty) {
//         toast.error("Please fill in food details first");
//         return;
//     }
//     setShowLocModal(true);
//     setPickerMode(false);
//   };

//   const useCurrentLocation = () => {
//     if (!navigator.geolocation) {
//         toast.error("Geolocation not supported");
//         return;
//     }
//     toast.info("Fetching GPS...");
//     navigator.geolocation.getCurrentPosition(
//         (pos) => {
//             const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//             setLocation(loc);
//             submitDonation(loc);
//         },
//         () => {
//             toast.error("GPS Denied. Please pick on map.");
//             setPickerMode(true);
//         }
//     );
//   };

//   const confirmMapLocation = () => {
//     if (!location) {
//         toast.error("Tap on the map to pin a location!");
//         return;
//     }
//     submitDonation(location);
//   };

//   const submitDonation = async (finalLoc: { lat: number, lng: number }) => {
//     setShowLocModal(false);
//     setIsSubmitting(true);
//     try {
//       const response = await fetch("http://192.168.1.2:5000/api/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           foodType: form.food,
//           quantity: form.qty,
//           expiry: form.expiry,
//           pickupTime: form.window,
//           donorId: user?.id,      
//           donorName: user?.name || user?.organization,
//           location: finalLoc 
//         }),
//       });

//       if (response.ok) {
//         setConfirmed(true);
//         toast.success("Donation Broadcasted to Network!");
//         fetchDonations(); 
        
//         setTimeout(() => {
//           setConfirmed(false);
//           setScanned(false);
//           setForm({ food: "", qty: "", expiry: "", window: "30 mins" });
//         }, 3000);
//         setLocStatus("Donation Sent");
//       }
//     } catch (error) {
//       toast.error("Connection Failed");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto relative">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-display font-bold">Donate <span className="gradient-text">Food</span></h1>
        
//         <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
//             <MapPin className={`w-3 h-3 ${location ? "text-emerald-400" : "text-yellow-400"}`} />
//             {locStatus}
//         </div>
//       </div>

//       {/* --- LOCATION MODAL --- */}
//       <AnimatePresence>
//         {showLocModal && (
//           <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//             <motion.div initial={{scale:0.9}} animate={{scale:1}} className="bg-[#0B0F1A] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <MapPin className="text-primary" /> Select Pickup Location
//               </h2>

//               {!pickerMode ? (
//                 // OPTION 1: BUTTONS
//                 <div className="space-y-3">
//                   <button onClick={useCurrentLocation} className="w-full py-4 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all flex items-center justify-center gap-2 font-bold">
//                     <Navigation className="w-5 h-5" /> Use My Current Location
//                   </button>
//                   <div className="text-center text-muted-foreground text-xs font-bold my-2">- OR -</div>
//                   <button onClick={() => setPickerMode(true)} className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold flex items-center justify-center gap-2">
//                     <MapPin className="w-5 h-5" /> Select on Map
//                   </button>
//                   <button onClick={() => setShowLocModal(false)} className="w-full py-2 text-sm text-muted-foreground hover:text-white mt-2">Cancel</button>
//                 </div>
//               ) : (
//                 // OPTION 2: MAP PICKER WITH SEARCH
//                 <div className="space-y-4">
//                   {/* SEARCH BAR */}
//                   <div className="flex gap-2">
//                     <input 
//                         type="text" 
//                         placeholder="Search location (e.g., Charminar)" 
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//                         className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
//                     />
//                     <button onClick={handleSearch} disabled={isSearching} className="bg-white/10 p-2 rounded-lg hover:bg-white/20">
//                         {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
//                     </button>
//                   </div>

//                   <p className="text-xs text-muted-foreground">Search or tap on the map to pin location.</p>
                  
//                   {/* MAP */}
//                   <div className="h-64 rounded-xl overflow-hidden border border-white/10 relative">
//                     <MapContainer center={mapCenter} zoom={13} style={{ height: "100%", width: "100%" }}>
//                       <ChangeView center={mapCenter} />
//                       <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
//                       <LocationMarker setPos={setLocation} pos={location} />
//                     </MapContainer>
//                   </div>

//                   <div className="flex gap-3">
//                     <button onClick={() => setPickerMode(false)} className="flex-1 py-3 rounded-lg border border-white/10 text-muted-foreground hover:bg-white/5">Back</button>
//                     <button onClick={() => location && submitDonation(location)} className="flex-1 py-3 rounded-lg bg-primary text-black font-bold disabled:opacity-50 hover:bg-primary/90" disabled={!location}>
//                       Confirm Location
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="glass-card p-1 flex mb-8 max-w-xs">
//         {(["scan", "manual"] as const).map((m) => (
//           <button key={m} onClick={() => { setMode(m); setScanned(false); }} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === m ? "bg-primary text-black" : "text-muted-foreground"}`}>
//             {m === "scan" ? <Camera className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />} {m === "scan" ? "AI Scan" : "Manual"}
//           </button>
//         ))}
//       </div>

//       <AnimatePresence mode="wait">
//         {mode === "scan" && (
//           <motion.div key="scan" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-card p-6 mb-8">
//             <div className="aspect-video rounded-xl bg-muted/30 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
//                 {scanning && <div className="absolute inset-0 bg-primary/10 animate-pulse" />}
//                 {!scanned ? (
//                     <button onClick={handleScan} disabled={scanning} className="btn-glow-solid px-6 py-3 flex gap-2">
//                         {scanning ? "Scanning..." : <><Camera className="w-5 h-5" /> Start AI Scan</>}
//                     </button>
//                 ) : (
//                     <div className="text-center">
//                         <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
//                         <p className="text-primary font-medium">Food Detected: Rice</p>
//                     </div>
//                 )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {(mode === "manual" || scanned) && (
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 mb-8 space-y-4">
//           <h3 className="font-display font-semibold text-lg mb-2">{scanned ? "AI Results" : "Enter Details"}</h3>
//           {[
//             { label: "Food Type", key: "food", placeholder: "e.g., Rice, Bread" },
//             { label: "Quantity (kg)", key: "qty", placeholder: "e.g., 5.2" },
//             { label: "Expiry Time", key: "expiry", placeholder: "e.g., 4 hours" },
//             { label: "Pickup Window", key: "window", placeholder: "e.g., 30 mins" },
//           ].map((field) => (
//             <div key={field.key}>
//               <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
//               <input type="text" value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} placeholder={field.placeholder} className="w-full bg-muted/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary transition-colors" />
//             </div>
//           ))}

//           <button onClick={initiateDonation} disabled={isSubmitting} className="btn-glow-solid w-full mt-4 flex items-center justify-center gap-2">
//             {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Package className="w-4 h-4" />}
//             Confirm & Select Location
//           </button>
//         </motion.div>
//       )}

//       {/* HISTORY LIST */}
//       <div className="space-y-3">
//         <h3 className="font-semibold text-lg mb-4">History</h3>
//         {loadingHistory ? <p className="text-muted-foreground text-center">Loading...</p> : 
//           history.length === 0 ? <p className="text-muted-foreground text-center p-4 glass-card">No donations yet.</p> :
//           history.map((item) => {
//              const statusKey = item.status || 'pending';
//              const cfg = statusConfig[statusKey as keyof typeof statusConfig] || statusConfig.pending;
//              return (
//                 <div key={item._id} className={`glass-card p-4 border-l-2 ${cfg.border} flex justify-between items-center`}>
//                     <div>
//                         <p className="font-bold">{item.foodType}</p>
//                         <p className="text-xs text-muted-foreground">{item.quantity}kg • {item.expiry}</p>
//                     </div>
//                     <div className={`text-xs flex items-center gap-1 ${cfg.color}`}>
//                         <cfg.icon className="w-3 h-3" /> {cfg.label}
//                     </div>
//                 </div>
//              )
//           })
//         }
//       </div>
//     </div>
//   );
// };

// export default Donor;







// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Camera, Edit3, Package, Clock, CheckCircle2, AlertTriangle, Truck, Loader2, MapPin, Navigation, Search } from "lucide-react";
// import { toast } from "sonner";
// import { useAuth } from "@/context/AuthContext"; 
// import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
// import { useNavigate } from "react-router-dom";
// import "leaflet/dist/leaflet.css";

// // --- LEAFLET ICON FIX ---
// import L from 'leaflet';
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// const DefaultIcon = L.icon({
//   iconUrl: icon, shadowUrl: iconShadow,
//   iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// const statusConfig = {
//   pending: { color: "text-blue-400", border: "border-blue-400/30", icon: Clock, label: "Pending" },
//   searching_agent: { color: "text-orange-400", border: "border-orange-400/30", icon: Loader2, label: "Finding Driver" },
//   assigned: { color: "text-purple-400", border: "border-purple-400/30", icon: Truck, label: "Driver Assigned" },
//   transit: { color: "text-yellow-400", border: "border-yellow-400/30", icon: Truck, label: "In Transit" },
//   delivered: { color: "text-emerald-400", border: "border-emerald-400/30", icon: CheckCircle2, label: "Delivered" },
//   expired: { color: "text-destructive", border: "border-destructive/30", icon: AlertTriangle, label: "Expired" },
// };

// // --- HELPER 1: HANDLE MAP CLICKS ---
// const LocationMarker = ({ setPos, pos }: { setPos: (latlng: { lat: number, lng: number }) => void, pos: { lat: number, lng: number } | null }) => {
//   useMapEvents({
//     click(e) {
//       setPos(e.latlng);
//     },
//   });
//   return pos ? <Marker position={pos} /> : null;
// };

// // --- HELPER 2: MOVE MAP CAMERA ---
// const ChangeView = ({ center }: { center: { lat: number, lng: number } }) => {
//   const map = useMap();
//   map.setView(center, 15); 
//   return null;
// };

// const Donor = () => {
//   const { user } = useAuth();
//   const [mode, setMode] = useState<"scan" | "manual">("scan");
//   const [scanning, setScanning] = useState(false);
//   const [scanned, setScanned] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [confirmed, setConfirmed] = useState(false);
  
//   // LOCATION STATE
//   const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
//   const [mapCenter, setMapCenter] = useState<{lat: number, lng: number}>({ lat: 17.3850, lng: 78.4867 }); 
//   const [showLocModal, setShowLocModal] = useState(false);
//   const [pickerMode, setPickerMode] = useState(false);
//   const [locStatus, setLocStatus] = useState("Ready to Donate");
  
//   // SEARCH STATE
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSearching, setIsSearching] = useState(false);

//   // DATA
//   const [history, setHistory] = useState<any[]>([]);
//   const [loadingHistory, setLoadingHistory] = useState(true);

//   const [form, setForm] = useState({ 
//     food: "", 
//     qty: "", 
//     expiry: "", 
//     window: "30 mins" 
//   });

//   useEffect(() => {
//     fetchDonations();

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 setLocStatus("Location Secured");
//             },
//             () => {
//                 setLocStatus("Location Denied");
//                 toast.error("Location access denied.");
//             }
//         );
//     }
//   }, [user]);

//   const fetchDonations = async () => {
//     try {
//       const res = await fetch(`http://192.168.1.2:5000/api/donations?userId=${user?.id}`);
//       const data = await res.json();
//       setHistory(data);
//     } catch (err) { console.error("History Error"); } 
//     finally { setLoadingHistory(false); }
//   };

//   const handleScan = () => {
//     setScanning(true);
//     setScanned(false);
//     setTimeout(() => {
//       setScanning(false);
//       setScanned(true);
//       setForm({ food: "Steam Rice", qty: "5.2", expiry: "4 hours", window: "30 mins" });
//       toast.success("Food Detected!");
//     }, 2500);
//   };

//   // --- MAP SEARCH FUNCTION ---
//   const handleSearch = async () => {
//     if (!searchQuery) return;
//     setIsSearching(true);
    
//     try {
//         const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`);
//         const data = await res.json();

//         if (data && data.length > 0) {
//             const firstResult = data[0];
//             const newLoc = {
//                 lat: parseFloat(firstResult.lat),
//                 lng: parseFloat(firstResult.lon)
//             };
            
//             setMapCenter(newLoc);
//             setLocation(newLoc);
//             toast.success(`Found: ${firstResult.display_name.split(",")[0]}`);
//         } else {
//             toast.error("Location not found");
//         }
//     } catch (error) {
//         toast.error("Search failed");
//     } finally {
//         setIsSearching(false);
//     }
//   };

//   const initiateDonation = () => {
//     if (!form.food || !form.qty) {
//         toast.error("Please fill in food details first");
//         return;
//     }
//     setShowLocModal(true);
//     setPickerMode(false);
//   };

//   const useCurrentLocation = () => {
//     if (!navigator.geolocation) {
//         toast.error("Geolocation not supported");
//         return;
//     }
//     toast.info("Fetching GPS...");
//     navigator.geolocation.getCurrentPosition(
//         (pos) => {
//             const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
//             setLocation(loc);
//             submitDonation(loc);
//         },
//         () => {
//             toast.error("GPS Denied. Please pick on map.");
//             setPickerMode(true);
//         }
//     );
//   };

//   const confirmMapLocation = () => {
//     if (!location) {
//         toast.error("Tap on the map to pin a location!");
//         return;
//     }
//     submitDonation(location);
//   };

//   const submitDonation = async (finalLoc: { lat: number, lng: number }) => {
//     setShowLocModal(false);
//     setIsSubmitting(true);
//     try {
//       const response = await fetch("http://192.168.1.2:5000/api/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           foodType: form.food,
//           quantity: form.qty,
//           expiry: form.expiry,
//           pickupTime: form.window,
//           donorId: user?.id,      
//           donorName: user?.name || user?.organization,
//           location: finalLoc 
//         }),
//       });

//       if (response.ok) {
//         setConfirmed(true);
//         toast.success("Donation Broadcasted to Network!");
//         fetchDonations(); 
        
//         setTimeout(() => {
//           setConfirmed(false);
//           setScanned(false);
//           setForm({ food: "", qty: "", expiry: "", window: "30 mins" });
//         }, 3000);
//         setLocStatus("Donation Sent");
//       }
//     } catch (error) {
//       toast.error("Connection Failed");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto relative">
//       <div className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-display font-bold">Donate <span className="gradient-text">Food</span></h1>
        
//         <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
//             <MapPin className={`w-3 h-3 ${location ? "text-emerald-400" : "text-yellow-400"}`} />
//             {locStatus}
//         </div>
//       </div>

//       {/* --- LOCATION MODAL --- */}
//       <AnimatePresence>
//         {showLocModal && (
//           <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
//             <motion.div initial={{scale:0.9}} animate={{scale:1}} className="bg-[#0B0F1A] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl">
//               <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
//                 <MapPin className="text-primary" /> Select Pickup Location
//               </h2>

//               {!pickerMode ? (
//                 <div className="space-y-3">
//                   <button onClick={useCurrentLocation} className="w-full py-4 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all flex items-center justify-center gap-2 font-bold">
//                     <Navigation className="w-5 h-5" /> Use My Current Location
//                   </button>
//                   <div className="text-center text-muted-foreground text-xs font-bold my-2">- OR -</div>
//                   <button onClick={() => setPickerMode(true)} className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold flex items-center justify-center gap-2">
//                     <MapPin className="w-5 h-5" /> Select on Map
//                   </button>
//                   <button onClick={() => setShowLocModal(false)} className="w-full py-2 text-sm text-muted-foreground hover:text-white mt-2">Cancel</button>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   <div className="flex gap-2">
//                     <input 
//                         type="text" 
//                         placeholder="Search location (e.g., Charminar)" 
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//                         className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
//                     />
//                     <button onClick={handleSearch} disabled={isSearching} className="bg-white/10 p-2 rounded-lg hover:bg-white/20">
//                         {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
//                     </button>
//                   </div>

//                   <p className="text-xs text-muted-foreground">Search or tap on the map to pin location.</p>
                  
//                   <div className="h-64 rounded-xl overflow-hidden border border-white/10 relative">
//                     <MapContainer center={mapCenter} zoom={13} style={{ height: "100%", width: "100%" }}>
//                       <ChangeView center={mapCenter} />
//                       <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
//                       <LocationMarker setPos={setLocation} pos={location} />
//                     </MapContainer>
//                   </div>

//                   <div className="flex gap-3">
//                     <button onClick={() => setPickerMode(false)} className="flex-1 py-3 rounded-lg border border-white/10 text-muted-foreground hover:bg-white/5">Back</button>
//                     <button onClick={() => location && submitDonation(location)} className="flex-1 py-3 rounded-lg bg-primary text-black font-bold disabled:opacity-50 hover:bg-primary/90" disabled={!location}>
//                       Confirm Location
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="glass-card p-1 flex mb-8 max-w-xs">
//         {(["scan", "manual"] as const).map((m) => (
//           <button key={m} onClick={() => { setMode(m); setScanned(false); }} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === m ? "bg-primary text-black" : "text-muted-foreground"}`}>
//             {m === "scan" ? <Camera className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />} {m === "scan" ? "AI Scan" : "Manual"}
//           </button>
//         ))}
//       </div>

//       <AnimatePresence mode="wait">
//         {mode === "scan" && (
//           <motion.div key="scan" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-card p-6 mb-8">
//             <div className="aspect-video rounded-xl bg-muted/30 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
//                 {scanning && <div className="absolute inset-0 bg-primary/10 animate-pulse" />}
//                 {!scanned ? (
//                     <button onClick={handleScan} disabled={scanning} className="btn-glow-solid px-6 py-3 flex gap-2">
//                         {scanning ? "Scanning..." : <><Camera className="w-5 h-5" /> Start AI Scan</>}
//                     </button>
//                 ) : (
//                     <div className="text-center">
//                         <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
//                         <p className="text-primary font-medium">Food Detected: Rice</p>
//                     </div>
//                 )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {(mode === "manual" || scanned) && (
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 mb-8 space-y-4">
//           <h3 className="font-display font-semibold text-lg mb-2">{scanned ? "AI Results" : "Enter Details"}</h3>
//           {[
//             { label: "Food Type", key: "food", placeholder: "e.g., Rice, Bread" },
//             { label: "Quantity (kg)", key: "qty", placeholder: "e.g., 5.2" },
//             { label: "Expiry Time", key: "expiry", placeholder: "e.g., 4 hours" },
//             { label: "Pickup Window", key: "window", placeholder: "e.g., 30 mins" },
//           ].map((field) => (
//             <div key={field.key}>
//               <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
//               <input type="text" value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} placeholder={field.placeholder} className="w-full bg-muted/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary transition-colors" />
//             </div>
//           ))}

//           <button onClick={initiateDonation} disabled={isSubmitting} className="btn-glow-solid w-full mt-4 flex items-center justify-center gap-2">
//             {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Package className="w-4 h-4" />}
//             Confirm & Select Location
//           </button>
//         </motion.div>
//       )}

//       {/* HISTORY LIST */}
//       <div className="space-y-3">
//         <h3 className="font-semibold text-lg mb-4">History</h3>
//         {loadingHistory ? <p className="text-muted-foreground text-center">Loading...</p> : 
//           history.length === 0 ? <p className="text-muted-foreground text-center p-4 glass-card">No donations yet.</p> :
//           history.map((item) => {
//              const statusKey = item.status || 'pending';
//              const cfg = statusConfig[statusKey as keyof typeof statusConfig] || statusConfig.pending;
//              return (
//                 <div key={item._id} className={`glass-card p-4 border-l-2 ${cfg.border} flex justify-between items-center`}>
//                     <div>
//                         <p className="font-bold">{item.foodType}</p>
//                         <p className="text-xs text-muted-foreground">{item.quantity}kg • {item.expiry}</p>
//                     </div>
//                     <div className="text-right">
//                         <div className={`flex items-center gap-1 text-xs justify-end ${cfg.color}`}>
//                             <cfg.icon className="w-3 h-3" /> {cfg.label}
//                         </div>
                        
//                         {/* --- TRACK VOLUNTEER BUTTON --- */}
//                         {(item.status === "assigned" || item.status === "transit") && (
//                             <button 
//                                 onClick={() => window.location.href = `/agent/${item._id}`} 
//                                 className="mt-3 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/50 px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-colors"
//                             >
//                                 <Truck className="w-3 h-3" /> Track Volunteer
//                             </button>
//                         )}
//                     </div>
//                 </div>
//              )
//           })
//         }
//       </div>
//     </div>
//   );
// };

// export default Donor;




import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Edit3, Package, Clock, CheckCircle2, AlertTriangle, Truck, Loader2, MapPin, Navigation, Search } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext"; 
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import { useNavigate } from "react-router-dom"; // --- IMPORT ADDED ---
import "leaflet/dist/leaflet.css";

// --- LEAFLET ICON FIX ---
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon, shadowUrl: iconShadow,
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34]
});
L.Marker.prototype.options.icon = DefaultIcon;

const statusConfig = {
  pending: { color: "text-blue-400", border: "border-blue-400/30", icon: Clock, label: "Pending" },
  searching_agent: { color: "text-orange-400", border: "border-orange-400/30", icon: Loader2, label: "Finding Driver" },
  assigned: { color: "text-purple-400", border: "border-purple-400/30", icon: Truck, label: "Driver Assigned" },
  transit: { color: "text-yellow-400", border: "border-yellow-400/30", icon: Truck, label: "In Transit" },
  delivered: { color: "text-emerald-400", border: "border-emerald-400/30", icon: CheckCircle2, label: "Delivered" },
  expired: { color: "text-destructive", border: "border-destructive/30", icon: AlertTriangle, label: "Expired" },
};

// --- HELPER 1: HANDLE MAP CLICKS ---
const LocationMarker = ({ setPos, pos }: { setPos: (latlng: { lat: number, lng: number }) => void, pos: { lat: number, lng: number } | null }) => {
  useMapEvents({
    click(e) {
      setPos(e.latlng);
    },
  });
  return pos ? <Marker position={pos} /> : null;
};

// --- HELPER 2: MOVE MAP CAMERA ---
const ChangeView = ({ center }: { center: { lat: number, lng: number } }) => {
  const map = useMap();
  map.setView(center, 15); 
  return null;
};

const Donor = () => {
  const { user } = useAuth();
  const navigate = useNavigate(); // --- HOOK ADDED ---
  const [mode, setMode] = useState<"scan" | "manual">("scan");
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  
  // LOCATION STATE
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);
  const [mapCenter, setMapCenter] = useState<{lat: number, lng: number}>({ lat: 17.3850, lng: 78.4867 }); 
  const [showLocModal, setShowLocModal] = useState(false);
  const [pickerMode, setPickerMode] = useState(false);
  const [locStatus, setLocStatus] = useState("Ready to Donate");
  
  // SEARCH STATE
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // DATA
  const [history, setHistory] = useState<any[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);

  const [form, setForm] = useState({ 
    food: "", 
    qty: "", 
    expiry: "", 
    window: "30 mins" 
  });

  useEffect(() => {
    fetchDonations();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocStatus("Location Secured");
            },
            () => {
                setLocStatus("Location Denied");
                toast.error("Location access denied.");
            }
        );
    }
  }, [user]);

  const fetchDonations = async () => {
    try {
      const res = await fetch(`http://192.168.1.2:5000/api/donations?userId=${user?.id}`);
      const data = await res.json();
      setHistory(data);
    } catch (err) { console.error("History Error"); } 
    finally { setLoadingHistory(false); }
  };

  const handleScan = () => {
    setScanning(true);
    setScanned(false);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
      setForm({ food: "Steam Rice", qty: "5.2", expiry: "4 hours", window: "30 mins" });
      toast.success("Food Detected!");
    }, 2500);
  };

  // --- MAP SEARCH FUNCTION ---
  const handleSearch = async () => {
    if (!searchQuery) return;
    setIsSearching(true);
    
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`);
        const data = await res.json();

        if (data && data.length > 0) {
            const firstResult = data[0];
            const newLoc = {
                lat: parseFloat(firstResult.lat),
                lng: parseFloat(firstResult.lon)
            };
            
            setMapCenter(newLoc);
            setLocation(newLoc);
            toast.success(`Found: ${firstResult.display_name.split(",")[0]}`);
        } else {
            toast.error("Location not found");
        }
    } catch (error) {
        toast.error("Search failed");
    } finally {
        setIsSearching(false);
    }
  };

  const initiateDonation = () => {
    if (!form.food || !form.qty) {
        toast.error("Please fill in food details first");
        return;
    }
    setShowLocModal(true);
    setPickerMode(false);
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
        toast.error("Geolocation not supported");
        return;
    }
    toast.info("Fetching GPS...");
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            setLocation(loc);
            submitDonation(loc);
        },
        () => {
            toast.error("GPS Denied. Please pick on map.");
            setPickerMode(true);
        }
    );
  };

  const confirmMapLocation = () => {
    if (!location) {
        toast.error("Tap on the map to pin a location!");
        return;
    }
    submitDonation(location);
  };

  const submitDonation = async (finalLoc: { lat: number, lng: number }) => {
    setShowLocModal(false);
    setIsSubmitting(true);
    try {
      const response = await fetch("http://192.168.1.2:5000/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          foodType: form.food,
          quantity: form.qty,
          expiry: form.expiry,
          pickupTime: form.window,
          donorId: user?.id,      
          donorName: user?.name || user?.organization,
          location: finalLoc 
        }),
      });

      if (response.ok) {
        setConfirmed(true);
        toast.success("Donation Broadcasted to Network!");
        fetchDonations(); 
        
        setTimeout(() => {
          setConfirmed(false);
          setScanned(false);
          setForm({ food: "", qty: "", expiry: "", window: "30 mins" });
        }, 3000);
        setLocStatus("Donation Sent");
      }
    } catch (error) {
      toast.error("Connection Failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 max-w-2xl mx-auto relative">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-display font-bold">Donate <span className="gradient-text">Food</span></h1>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <MapPin className={`w-3 h-3 ${location ? "text-emerald-400" : "text-yellow-400"}`} />
            {locStatus}
        </div>
      </div>

      {/* --- LOCATION MODAL --- */}
      <AnimatePresence>
        {showLocModal && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <motion.div initial={{scale:0.9}} animate={{scale:1}} className="bg-[#0B0F1A] border border-white/10 p-6 rounded-2xl w-full max-w-md shadow-2xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="text-primary" /> Select Pickup Location
              </h2>

              {!pickerMode ? (
                <div className="space-y-3">
                  <button onClick={useCurrentLocation} className="w-full py-4 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all flex items-center justify-center gap-2 font-bold">
                    <Navigation className="w-5 h-5" /> Use My Current Location
                  </button>
                  <div className="text-center text-muted-foreground text-xs font-bold my-2">- OR -</div>
                  <button onClick={() => setPickerMode(true)} className="w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-semibold flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" /> Select on Map
                  </button>
                  <button onClick={() => setShowLocModal(false)} className="w-full py-2 text-sm text-muted-foreground hover:text-white mt-2">Cancel</button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Search location (e.g., Charminar)" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
                    />
                    <button onClick={handleSearch} disabled={isSearching} className="bg-white/10 p-2 rounded-lg hover:bg-white/20">
                        {isSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                    </button>
                  </div>

                  <p className="text-xs text-muted-foreground">Search or tap on the map to pin location.</p>
                  
                  <div className="h-64 rounded-xl overflow-hidden border border-white/10 relative">
                    <MapContainer center={mapCenter} zoom={13} style={{ height: "100%", width: "100%" }}>
                      <ChangeView center={mapCenter} />
                      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                      <LocationMarker setPos={setLocation} pos={location} />
                    </MapContainer>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={() => setPickerMode(false)} className="flex-1 py-3 rounded-lg border border-white/10 text-muted-foreground hover:bg-white/5">Back</button>
                    <button onClick={() => location && submitDonation(location)} className="flex-1 py-3 rounded-lg bg-primary text-black font-bold disabled:opacity-50 hover:bg-primary/90" disabled={!location}>
                      Confirm Location
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="glass-card p-1 flex mb-8 max-w-xs">
        {(["scan", "manual"] as const).map((m) => (
          <button key={m} onClick={() => { setMode(m); setScanned(false); }} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${mode === m ? "bg-primary text-black" : "text-muted-foreground"}`}>
            {m === "scan" ? <Camera className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />} {m === "scan" ? "AI Scan" : "Manual"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {mode === "scan" && (
          <motion.div key="scan" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="glass-card p-6 mb-8">
            <div className="aspect-video rounded-xl bg-muted/30 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden mb-6">
                {scanning && <div className="absolute inset-0 bg-primary/10 animate-pulse" />}
                {!scanned ? (
                    <button onClick={handleScan} disabled={scanning} className="btn-glow-solid px-6 py-3 flex gap-2">
                        {scanning ? "Scanning..." : <><Camera className="w-5 h-5" /> Start AI Scan</>}
                    </button>
                ) : (
                    <div className="text-center">
                        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-2" />
                        <p className="text-primary font-medium">Food Detected: Rice</p>
                    </div>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {(mode === "manual" || scanned) && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 mb-8 space-y-4">
          <h3 className="font-display font-semibold text-lg mb-2">{scanned ? "AI Results" : "Enter Details"}</h3>
          {[
            { label: "Food Type", key: "food", placeholder: "e.g., Rice, Bread" },
            { label: "Quantity (kg)", key: "qty", placeholder: "e.g., 5.2" },
            { label: "Expiry Time", key: "expiry", placeholder: "e.g., 4 hours" },
            { label: "Pickup Window", key: "window", placeholder: "e.g., 30 mins" },
          ].map((field) => (
            <div key={field.key}>
              <label className="text-xs text-muted-foreground mb-1 block">{field.label}</label>
              <input type="text" value={form[field.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [field.key]: e.target.value })} placeholder={field.placeholder} className="w-full bg-muted/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-foreground focus:border-primary transition-colors" />
            </div>
          ))}

          <button onClick={initiateDonation} disabled={isSubmitting} className="btn-glow-solid w-full mt-4 flex items-center justify-center gap-2">
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Package className="w-4 h-4" />}
            Confirm & Select Location
          </button>
        </motion.div>
      )}

      {/* HISTORY LIST */}
      <div className="space-y-3">
        <h3 className="font-semibold text-lg mb-4">History</h3>
        {loadingHistory ? <p className="text-muted-foreground text-center">Loading...</p> : 
          history.length === 0 ? <p className="text-muted-foreground text-center p-4 glass-card">No donations yet.</p> :
          history.map((item) => {
             const statusKey = item.status || 'pending';
             const cfg = statusConfig[statusKey as keyof typeof statusConfig] || statusConfig.pending;
             return (
                <div key={item._id} className={`glass-card p-4 border-l-2 ${cfg.border} flex justify-between items-center`}>
                    <div>
                        <p className="font-bold">{item.foodType}</p>
                        <p className="text-xs text-muted-foreground">{item.quantity}kg • {item.expiry}</p>
                    </div>
                    <div className="text-right">
                        <div className={`flex items-center gap-1 text-xs justify-end ${cfg.color}`}>
                            <cfg.icon className="w-3 h-3" /> {cfg.label}
                        </div>
                        
                        {/* --- TRACK VOLUNTEER BUTTON --- */}
                        {(item.status === "assigned" || item.status === "transit") && (
                            <button 
                                onClick={() => navigate(`/agent/${item._id}`)} // --- CHANGED TO NAVIGATE ---
                                className="mt-3 bg-primary/20 hover:bg-primary/40 text-primary border border-primary/50 px-3 py-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-colors"
                            >
                                <Truck className="w-3 h-3" /> Track Volunteer
                            </button>
                        )}
                    </div>
                </div>
             )
          })
        }
      </div>
    </div>
  );
};

export default Donor;
// // import React, { useState } from "react";
// import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function LetsTalk() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

//   const handleChange = (e) => {
//     setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
//   };

//   const validate = () => {
//     if (!form.name.trim()) return "Name is required";
//     if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
//       return "Valid email required";
//     if (!form.message.trim() || form.message.length < 8)
//       return "Write a longer message";
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const err = validate();
//     if (err) {
//       setStatus({ type: "error", message: err });
//       return;
//     }
//     setStatus({ type: "sending", message: "Sending..." });

//     try {
//       // placeholder for real request (replace with API call)
//       await new Promise((r) => setTimeout(r, 800));
//       setStatus({ type: "success", message: "Message sent. I’ll reply soon!" });
//       setForm({ name: "", email: "", message: "" });
//     } catch (e) {
//       setStatus({ type: "error", message: "Something went wrong. Try again." });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-slate-100 p-6">
//       <motion.section
//         initial={{ opacity: 0, y: 12 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-5xl bg-gradient-to-br from-[#0b0b0b] to-[#0f1724] rounded-2xl shadow-2xl overflow-hidden border border-slate-800"
//         aria-labelledby="lets-talk"
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
//           {/* LEFT: Info */}
//           <div className="md:col-span-1 flex flex-col gap-6">
//             <div>
//               <h2
//                 id="lets-talk"
//                 className="text-3xl font-semibold tracking-tight"
//               >
//                 let&apos;s talk
//               </h2>
//               <p className="mt-2 text-slate-400">
//                 Got a project, collab or just wanna say hi? Slide into my inbox.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <span className="p-2 rounded-md bg-slate-900/50">
//                   <Mail size={18} />
//                 </span>
//                 <div>
//                   <p className="text-slate-300 text-sm">Email</p>
//                   <a
//                     href="mailto:hello@yourdomain.com"
//                     className="text-slate-100 font-medium"
//                   >
//                     hello@yourdomain.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="p-2 rounded-md bg-slate-900/50">
//                   <Phone size={18} />
//                 </span>
//                 <div>
//                   <p className="text-slate-300 text-sm">Phone</p>
//                   <a
//                     href="tel:+977123456789"
//                     className="text-slate-100 font-medium"
//                   >
//                     +977 1234 56789
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <span className="p-2 rounded-md bg-slate-900/50">
//                   <MapPin size={18} />
//                 </span>
//                 <div>
//                   <p className="text-slate-300 text-sm">Location</p>
//                   <p className="text-slate-100 font-medium">Kathmandu, Nepal</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-auto">
//               <p className="text-slate-500 text-sm">Follow</p>
//               <div className="flex gap-3 mt-3">
//                 <a
//                   className="px-3 py-2 rounded-md bg-slate-900/40 hover:bg-slate-800"
//                   href="#"
//                 >
//                   Twitter
//                 </a>
//                 <a
//                   className="px-3 py-2 rounded-md bg-slate-900/40 hover:bg-slate-800"
//                   href="#"
//                 >
//                   Dribbble
//                 </a>
//                 <a
//                   className="px-3 py-2 rounded-md bg-slate-900/40 hover:bg-slate-800"
//                   href="#"
//                 >
//                   Github
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: Form */}
//           <div className="md:col-span-2 bg-black/40 rounded-xl p-6">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <label className="flex flex-col">
//                   <span className="text-slate-300 text-sm mb-2">Your name</span>
//                   <input
//                     name="name"
//                     value={form.name}
//                     onChange={handleChange}
//                     className="bg-transparent border border-slate-800 rounded-md px-3 py-2 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-700"
//                     placeholder="e.g. Alex"
//                     required
//                     aria-label="Your name"
//                   />
//                 </label>

//                 <label className="flex flex-col">
//                   <span className="text-slate-300 text-sm mb-2">Email</span>
//                   <input
//                     name="email"
//                     type="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     className="bg-transparent border border-slate-800 rounded-md px-3 py-2 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-700"
//                     placeholder="you@company.com"
//                     required
//                     aria-label="Your email"
//                   />
//                 </label>
//               </div>

//               <label className="flex flex-col">
//                 <span className="text-slate-300 text-sm mb-2">Message</span>
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={6}
//                   className="bg-transparent border border-slate-800 rounded-md px-3 py-2 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-700"
//                   placeholder="Tell me about your idea..."
//                   required
//                   aria-label="Message"
//                 />
//               </label>

//               <div className="flex items-center gap-3">
//                 <button
//                   type="submit"
//                   className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-700/60 to-slate-600/30 hover:from-slate-600/60 border border-slate-700"
//                   aria-live="polite"
//                 >
//                   <Send size={16} />
//                   <span>
//                     {status?.type === "sending" ? "Sending..." : "Send message"}
//                   </span>
//                 </button>

//                 <div className="text-sm">
//                   {status?.type === "error" && (
//                     <p className="text-rose-400">{status.message}</p>
//                   )}
//                   {status?.type === "success" && (
//                     <p className="text-emerald-400">{status.message}</p>
//                   )}
//                 </div>
//               </div>

//               <p className="text-xs text-slate-500 mt-2">
//                 By sending you agree to get a reply. No spam. Promise.
//               </p>
//             </form>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }

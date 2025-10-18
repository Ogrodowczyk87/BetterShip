import React from 'react'



export default FeatureCard
function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex  items-center gap-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 px-4 py-3">
      <div className="h-9 w-9 rounded-xl bg-zinc-800/80 grid place-items-center text-zinc-300">
        {icon}
      </div>
      <div className="flex flex-col font-medium text-zinc-200">
        {title}
      </div>
    </div>
  );
}

// import React from "react";

// type FeatureCardProps = {
//   icon: React.ReactNode;
//   title: string;
//   className?: string; // opcjonalnie, np. do col-span
// };

// export default function FeatureCard({ icon, title, className }: FeatureCardProps) {
//   return (
//     <div
//       className={[
//         "group",
//         "h-16",                                // stała wysokość
//         "rounded-2xl border border-zinc-800",
//         "bg-zinc-900/60 px-4",
//         "flex items-center gap-3",
//         "transition-colors hover:border-zinc-700",
//         className || ""
//       ].join(" ")}
//     >
//       <div className="flex-none grid h-9 w-9 place-items-center rounded-xl bg-zinc-800/80 text-zinc-300">
//         {icon}
//       </div>
//       <p className="flex-1 text-[15px] font-medium text-zinc-200 leading-none truncate">
//         {title}
//       </p>
//     </div>
//   );
// }

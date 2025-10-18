import React from 'react'



export default FeatureCard
function FeatureCard({ icon, title, desc, className }: { icon: React.ReactNode; title: string; desc: string; className?: string }) {
  return (
    <div className={`flex items-start gap-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 px-4 py-6 ${className}`}>
      <div className="h-12 w-12 rounded-xl bg-zinc-800/80 grid place-items-center text-zinc-300">
        {icon}
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-zinc-200">{title}</h3>
        <p className="text-sm text-zinc-400 mt-1">{desc}</p>
      </div>
    </div>
  );
}
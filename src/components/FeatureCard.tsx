import React from 'react'



export default FeatureCard
function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-zinc-900/60 border border-zinc-800 px-4 py-3">
      <div className="h-9 w-9 rounded-xl bg-zinc-800/80 grid place-items-center text-zinc-300">
        {icon}
      </div>
      <p className="font-medium text-zinc-200">{title}</p>
    </div>
  );
}
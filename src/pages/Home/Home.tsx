import Button from "../../components/Button";
import FeatureCard from "../../components/FeatureCard";

export default function Home() {


  return (
    <section className="py-6 xs:py-8">
      <h1 className="mt-2 xs:mt-4 text-3xl xs:text-4xl font-extrabold tracking-tight">
        We build modern web applications. <span className="underline decoration-4">BetterShip</span>
      </h1>

        <div className="mt-5 flex flex-col xs:flex-row gap-2 xs:gap-3">
          <Button className="w-full xs:w-auto rounded-2xl px-4 py-3 text-base bg-zinc-900/60 hover:bg-blue-500">Get in touch</Button>
          <Button className="w-full xs:w-auto rounded-2xl px-4 py-3 text-base border border-zinc-700 bg-zinc-900/60 hover:bg-blue-500">View portfolio</Button>
        </div>

        <div className="mt-5 grid grid-cols-1 xs:grid-cols-1 gap-2 xs:gap-3">
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            }
            title="Custom Development"
          />
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v18M3 12h18" />
              </svg>
            }
            title="API Integrations"
          />
          <FeatureCard
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5v14" />
              </svg>
            }
            title="Ongoing Maintenance"
          />
        </div>
    </section>
  );
}


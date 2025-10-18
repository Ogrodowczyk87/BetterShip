import ServiceCard from "../../components/ServiceCard";

export default function Services() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <ServiceCard
        icon={<span className="text-lg">🚀</span>}
        title="MVP Development"
        desc="Develop core features quickly, iterate fast, and ship."
        className="min-h-[180px]"
      />
      <ServiceCard
        icon={<span className="text-lg">🧭</span>}
        title="Audit & Consulting"
        desc="Architecture reviews, performance tuning, and guidance."
        className="min-h-[180px]"
      />
      <ServiceCard
        icon={<span className="text-lg">🛡️</span>}
        title="Maintenance & Support"
        desc="Proactive monitoring, updates, and long-term care."
        className="min-h-[180px]"
      />
    </section>
  );
}

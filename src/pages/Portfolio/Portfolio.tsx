import { Link } from "react-router-dom";
const cases = [{ slug: "acme-crm", title: "ACME CRM" }];

export default function Portfolio() {
  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      <ul className="mt-4 space-y-2">
        {cases.map((c) => (
          <li key={c.slug} className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
            <Link to={`/portfolio/${c.slug}`} className="hover:underline">{c.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

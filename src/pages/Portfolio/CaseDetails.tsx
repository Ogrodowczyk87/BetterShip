import { useParams } from "react-router-dom";

export default function CaseDetails() {
  const { slug } = useParams();
  return (
    <section className="py-8">
      <h1 className="text-2xl font-bold">Case: {slug}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Szczegóły realizacji pojawią się tutaj.</p>
    </section>
  );
}

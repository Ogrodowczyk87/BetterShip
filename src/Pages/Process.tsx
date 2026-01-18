import React from "react";

const steps = [
  {
    title: "Discovery",
    duration: "Week 1",
    description:
      "We align on goals, audience, and success metrics. You leave with a clear roadmap and scope.",
    deliverables: ["Workshop", "Scope", "Roadmap"],
  },
  {
    title: "Design",
    duration: "Week 2",
    description:
      "We prototype and iterate on the UI/UX, testing flows and visual direction early.",
    deliverables: ["Wireframes", "Design system", "Prototype"],
  },
  {
    title: "Build",
    duration: "Weeks 3-4",
    description:
      "We implement performant, accessible pages with clean architecture and QA checkpoints.",
    deliverables: ["Frontend", "CMS setup", "QA"],
  },
  {
    title: "Launch",
    duration: "Week 5",
    description:
      "We ship, monitor, and optimize. You get dashboards and a plan for continuous wins.",
    deliverables: ["Deployment", "Analytics", "Optimization"],
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold">Process</h2>
          <p className="mt-3 text-lg text-slate-600">
            A timeline that keeps momentum and makes outcomes predictable.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-slate-200" />
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative grid md:grid-cols-[56px,1fr] gap-6 items-start"
              >
                <div className="hidden md:flex items-start justify-center">
                  <div className="h-10 w-10 rounded-full border-2 border-blue-600 bg-white text-blue-600 flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6 border border-slate-200 rounded-xl bg-white">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <span className="text-sm text-slate-500">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-slate-600">{step.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.deliverables.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

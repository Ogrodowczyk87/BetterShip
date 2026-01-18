import React from "react";
import type { CaseStudy } from "../types/types";
import { caseStudies } from "../data/caseStudies";

export const CaseStudies = () => {
  return (
    <div className="space-y-8">
      {caseStudies.map((study: CaseStudy) => (
        <article
          key={study.id}
          className="grid md:grid-cols-[1.6fr,0.8fr] gap-6 p-6 border border-slate-200 rounded-2xl bg-white transition-colors duration-300 hover:bg-slate-50"
        >
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                {study.industry}
              </span>
              <h3 className="text-2xl font-semibold">{study.title}</h3>
            </div>
            <p className="text-slate-600">{study.summary}</p>
            <div className="mt-5 grid gap-4">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                  Problem
                </h4>
                <p className="text-slate-600 mt-1">{study.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                  Process
                </h4>
                <p className="text-slate-600 mt-1">{study.process}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                  Result
                </h4>
                <p className="text-slate-600 mt-1">{study.result}</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                Metrics
              </h4>
              <div className="mt-4 space-y-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-sm text-slate-600">
                      {metric.label}
                    </span>
                    <span className="text-lg font-semibold text-blue-700">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full border border-blue-600 text-blue-700 font-semibold px-4 py-2 rounded-md transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200/70">
                View case study
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

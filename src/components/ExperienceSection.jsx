import { useState } from 'react';
import { experienceData, educationData } from '../data/experienceData';
import { siteData } from '../data/siteData';
import { Briefcase, GraduationCap, MapPin, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import Collapsible, { ExpandToggle } from './Collapsible';

const defaultSkills = [
  "Shopify OS 2.0",
  "Liquid & Metafields",
  "JavaScript ES6+",
  "REST & GraphQL APIs",
  "Shopify Markets",
  "Technical SEO"
];

const VISIBLE_RESPONSIBILITIES = 4;

function Responsibility({ text, index }) {
  return (
    <li className="responsibility" style={{ '--i': index }}>
      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F5B4C] mt-0.5 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(false);
  const periodText = exp.period || `${exp.startDate || 'May 2024'} – ${exp.endDate || 'Present'}`;
  const skillsList = exp.skills || defaultSkills;
  const responsibilities = exp.responsibilities || [];
  const visible = responsibilities.slice(0, VISIBLE_RESPONSIBILITIES);
  const hidden = responsibilities.slice(VISIBLE_RESPONSIBILITIES);
  const panelId = `exp-${exp.id || index}-more`;

  return (
    <div className="experience-card p-6 sm:p-8 rounded-3xl bg-[#f6f5f0] text-[#0a0a0a] border border-black/10 relative overflow-hidden group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs font-extrabold text-[#0F5B4C]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-white border border-[#0F5B4C]/30 text-[#0F5B4C] font-mono text-xs font-bold shadow-2xs">
              {exp.role}
            </span>
            {exp.isCurrent && (
              <span className="current-badge">
                <span className="status-dot" aria-hidden="true"></span>
                Current
              </span>
            )}
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors">
            {exp.company}
          </h4>
        </div>
        <div className="flex flex-col sm:items-end gap-1">
          <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono font-bold text-stone-700">
            {periodText}
          </span>
          <span className="text-xs text-stone-500 font-medium">{exp.type}</span>
        </div>
      </div>

      <p className="text-sm text-stone-700 mb-6 leading-relaxed font-medium">
        {exp.description}
      </p>

      {/* Key Highlights (preview + expandable remainder) */}
      {responsibilities.length > 0 && (
        <div className="mb-6">
          <ScrollReveal as="ul" stagger direction="left" className="responsibility-list">
            {visible.map((resp, rIdx) => (
              <Responsibility key={resp} text={resp} index={rIdx} />
            ))}
          </ScrollReveal>

          {hidden.length > 0 && (
            <>
              <Collapsible open={expanded} id={panelId}>
                <ul className="responsibility-list pt-2">
                  {hidden.map((resp, rIdx) => (
                    <Responsibility key={resp} text={resp} index={rIdx} />
                  ))}
                </ul>
              </Collapsible>
              <ExpandToggle
                open={expanded}
                onToggle={() => setExpanded((v) => !v)}
                controls={panelId}
                moreLabel={`Show all ${responsibilities.length} responsibilities`}
                lessLabel="Show key highlights only"
                variant="text"
                className="mt-3"
              />
            </>
          )}
        </div>
      )}

      <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10">
        {skillsList.map((skill) => (
          <span
            key={skill}
            className="tech-tag px-2.5 py-1 rounded-full bg-white text-stone-700 border border-black/10 text-xs font-semibold"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-[100px] bg-white text-[#0a0a0a] relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          eyebrow="Experience"
          title={<>The experience <span className="text-[#0F5B4C]">behind the work.</span></>}
          action={
            <a
              href={siteData.resumeUrl}
              download="yagnik-bavaliya-resume.pdf"
              className="tactile-btn tactile-btn-dark btn-arrow-diagonal px-6 py-3 text-xs font-semibold flex items-center gap-2"
            >
              <span>Full experience & CV</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </a>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Work Experience */}
          <ScrollReveal direction="up" className="lg:col-span-8 flex flex-col gap-8">
            <h3 className="text-xl font-bold text-[#0a0a0a] flex items-center gap-2.5 pb-3 border-b border-black/10">
              <Briefcase className="w-5 h-5 text-[#0F5B4C]" />
              <span>Professional Experience</span>
            </h3>

            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.id || index} exp={exp} index={index} />
            ))}
          </ScrollReveal>

          {/* Right Column: Education */}
          <ScrollReveal direction="right" delay={120} className="lg:col-span-4 flex flex-col gap-8">
            <h3 className="text-xl font-bold text-[#0a0a0a] flex items-center gap-2.5 pb-3 border-b border-black/10">
              <GraduationCap className="w-5 h-5 text-[#0F5B4C]" />
              <span>Education</span>
            </h3>

            {educationData.map((edu, index) => (
              <div
                key={edu.id || index}
                className="experience-card p-6 rounded-3xl bg-[#f6f5f0] text-[#0a0a0a] border border-black/10 flex flex-col gap-4 relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-black/10 flex items-center justify-center text-[#0F5B4C] shadow-2xs">
                  <Award className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-xs font-mono text-[#0F5B4C] font-bold">Graduated {edu.year}</span>
                  <h4 className="text-lg font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors mt-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-stone-600 font-medium mt-1">
                    {edu.university}
                  </p>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed border-t border-black/10 pt-3 font-medium">
                  {edu.description}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-[#0F5B4C] font-mono font-bold pt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{edu.location}</span>
                </div>
              </div>
            ))}
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

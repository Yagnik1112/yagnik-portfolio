import { useState } from 'react';
import { Link } from 'react-router-dom';
import { skillsData } from '../data/skillsData';
import {
  ShoppingBag,
  Sparkles,
  Code2,
  Terminal,
  Database,
  Boxes,
  Globe2,
  Cpu,
  Layers,
  FileCode,
  Palette,
  Zap,
  Atom,
  Server,
  FileCode2,
  Binary,
  Send,
  Share2,
  Globe,
  Layout,
  GitBranch,
  GitFork,
  Code,
  Bot,
  Search,
  BarChart3,
  Tag,
  Mail,
  ArrowRight
} from 'lucide-react';
import { GithubIcon, FigmaIcon } from './Icons';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import SegmentedTabs from './SegmentedTabs';
import Collapsible, { ExpandToggle } from './Collapsible';

const iconMap = {
  ShoppingBag,
  Sparkles,
  Code2,
  Terminal,
  Database,
  Boxes,
  Globe2,
  Cpu,
  Layers,
  FileCode,
  Palette,
  Zap,
  Atom,
  Server,
  FileCode2,
  Binary,
  Send,
  Share2,
  Globe,
  Layout,
  GitBranch,
  Github: GithubIcon,
  GitFork,
  Figma: FigmaIcon,
  Code,
  Bot,
  Search,
  BarChart3,
  Tag,
  Mail
};

const PREVIEW_GROUPS = 3;

function SkillGroupCard({ group, index, wide = false }) {
  return (
    <div className={`skill-group ${wide ? 'skill-group-wide' : ''}`} style={{ '--i': index }}>
      <div className="skill-group-head">
        <div className="flex items-center gap-3">
          <span className="skill-group-dot"></span>
          <h3 className="skill-group-title">{group.category}</h3>
          <span className="skill-group-count">{group.skills.length}</span>
        </div>
        <p className="skill-group-desc">{group.description}</p>
      </div>

      <div className="skill-chips">
        {group.skills.map((skill) => {
          const IconComponent = iconMap[skill.icon] || Code;
          return (
            <div key={skill.name} className="skill-chip group">
              <span className="skill-chip-icon">
                <IconComponent className="w-4 h-4" />
              </span>
              <span className="min-w-0">
                <span className="skill-chip-name">{skill.name}</span>
                <span className="skill-chip-tag">{skill.tag}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { value: 'All', label: 'All', count: skillsData.reduce((n, g) => n + g.skills.length, 0) },
    ...skillsData.map((s) => ({ value: s.category, label: s.category })),
  ];

  const isAll = activeCategory === "All";
  const selectedGroup = skillsData.find((s) => s.category === activeCategory);
  const activeTabIndex = categories.findIndex((c) => c.value === activeCategory);

  return (
    <section id="skills" className="py-[100px] bg-[#ffffff] text-[#0a0a0a] relative overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeader
          eyebrow="Technical Competencies"
          title={<>Skills & <span className="text-[#0F5B4C]">Technologies</span></>}
          className="mb-8"
        />

        {/* Category tabs with sliding indicator */}
        <ScrollReveal direction="up" className="mb-10">
          <SegmentedTabs
            items={categories}
            value={activeCategory}
            onChange={setActiveCategory}
            ariaLabel="Skill categories"
            idPrefix="home-skills"
          />
        </ScrollReveal>

        <div
          id="home-skills-panel"
          role="tabpanel"
          aria-labelledby={`home-skills-tab-${activeTabIndex}`}
        >
          {isAll ? (
            <div key="all" className="fade-swap">
              <div className="skill-groups-grid">
                {skillsData.slice(0, PREVIEW_GROUPS).map((group, idx) => (
                  <SkillGroupCard key={group.category} group={group} index={idx} />
                ))}
              </div>

              <Collapsible open={showAll} id="home-skills-more">
                <div className="skill-groups-grid skill-groups-grid-rest">
                  {skillsData.slice(PREVIEW_GROUPS).map((group, idx) => (
                    <SkillGroupCard key={group.category} group={group} index={idx} />
                  ))}
                </div>
              </Collapsible>

              <div className="mt-8 flex justify-center">
                <ExpandToggle
                  open={showAll}
                  onToggle={() => setShowAll((v) => !v)}
                  controls="home-skills-more"
                  moreLabel={`Show ${skillsData.length - PREVIEW_GROUPS} More Categories`}
                  lessLabel="Show Fewer Categories"
                />
              </div>
            </div>
          ) : (
            selectedGroup && (
              <div key={selectedGroup.category} className="fade-swap">
                <SkillGroupCard group={selectedGroup} index={0} wide />
              </div>
            )
          )}
        </div>

        {/* Link to Dedicated Skills Page */}
        <div className="mt-12 text-center">
          <Link
            to="/skills"
            className="tactile-btn tactile-btn-emerald btn-arrow px-6 py-3 text-xs font-bold"
          >
            <span>Explore Full Skills Page & Search Stack</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>
      </div>
    </section>
  );
}

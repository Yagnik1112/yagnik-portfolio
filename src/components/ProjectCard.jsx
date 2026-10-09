import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { getPublicTechnologies } from '../utils/projectFilters';

export default function ProjectCard({ project, eager = false }) {
  const [imgError, setImgError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);
  const technologies = getPublicTechnologies(project);

  // Cached images can finish loading before React attaches onLoad
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="project-card interactive-card group h-full rounded-2xl bg-white border border-black/10 overflow-hidden flex flex-col justify-between text-[#0a0a0a]">
      <div>
        {/* Project Image & Overlay */}
        <div className="project-card-media relative aspect-[16/10] overflow-hidden bg-stone-100 border-b border-black/10">
          {!imgError ? (
            <img
              ref={imgRef}
              src={project.image}
              alt={`${project.title} - ${project.category}`}
              loading={eager ? 'eager' : 'lazy'}
              decoding="async"
              width="1600"
              height="1000"
              className={`project-card-img w-full h-full object-cover object-top ${loaded ? 'is-loaded' : ''}`}
              onLoad={() => setLoaded(true)}
              onError={() => setImgError(true)}
            />
          ) : (
            /* Placeholder when image fails to load */
            <div className="w-full h-full bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 p-6 flex flex-col justify-between border-b border-black/10">
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-mono font-bold text-[#0F5B4C] px-2.5 py-1 rounded-full bg-white border border-[#0F5B4C]/30 uppercase tracking-widest shadow-xs">
                  {project.category}
                </span>
                <span className="w-8 h-8 rounded-lg bg-[#0F5B4C]/10 border border-[#0F5B4C]/20 flex items-center justify-center text-[#0F5B4C] text-xs font-mono font-bold">
                  {project.id}
                </span>
              </div>
              <div className="z-10 mt-auto pt-4">
                <h4 className="text-xl font-bold text-stone-900">
                  {project.title}
                </h4>
                <p className="text-stone-600 text-xs line-clamp-1 mt-1 font-mono">
                  {technologies.slice(0, 3).join(" • ")}
                </p>
              </div>
            </div>
          )}

          {/* Hover / focus overlay */}
          <div className="project-card-overlay absolute inset-0 flex items-center justify-center p-6 z-20">
            <div className="project-card-overlay-actions flex items-center justify-center gap-3">
              <Link
                to={`/projects/${project.slug}`}
                className="tactile-btn tactile-btn-emerald btn-arrow px-5 py-2.5 text-xs font-semibold flex items-center gap-2 h-10"
                tabIndex={-1}
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-btn tactile-btn-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 p-0"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Visit live website for ${project.title}`}
                  tabIndex={-1}
                >
                  <ExternalLink className="w-4 h-4 text-[#0F5B4C]" />
                </a>
              )}
            </div>
          </div>

          {/* Top Category Badge */}
          {!imgError && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-black/10 text-[#0F5B4C] text-[11px] font-mono font-bold shadow-xs">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Project Card Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[#0a0a0a] group-hover:text-[#0F5B4C] transition-colors duration-300 mb-1">
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          {project.industry && <p className="project-card-industry">{project.industry}</p>}

          <p className="text-stone-600 text-xs leading-relaxed line-clamp-3 mb-5 font-medium">
            {project.shortDescription}
          </p>

          {/* Technologies Tags */}
          <ul className="tech-tag-list flex flex-wrap gap-1.5 mb-2" aria-label="Technologies">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="tech-tag px-2.5 py-1 rounded-full bg-[#f5f1ea] border border-black/5 text-stone-700 text-[10px] font-mono font-semibold"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer Links (keyboard & touch friendly) */}
      <div className="px-6 pb-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs bg-stone-50/50">
        <Link
          to={`/projects/${project.slug}`}
          className="link-arrow font-bold text-stone-900 hover:text-[#0F5B4C] flex items-center gap-1.5 transition-colors"
        >
          <span>Project Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#0F5B4C]" />
        </Link>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow-diagonal font-bold text-[#0F5B4C] hover:text-[#0c4a3e] flex items-center gap-1 transition-colors"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ShoppingBag } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="interactive-card group rounded-2xl bg-forest-card border border-sand-subtle/30 hover:border-gold/60 overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-xl flex flex-col justify-between">
      <div>
        {/* Project Image & Overlay */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1D17]">
          {!imgError ? (
            <img
              src={project.image}
              alt={`${project.title} - ${project.category}`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Elegant Gold/Emerald Placeholder when image doesn't exist yet */
            <div className="w-full h-full bg-gradient-to-br from-[#0F5B4C] via-[#1E4738] to-[#0B1D17] p-6 flex flex-col justify-between border-b border-gold/20">
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-mono font-bold text-gold px-2.5 py-1 rounded bg-[#0B1D17]/80 border border-gold/40 uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-xs font-mono font-bold">
                  {project.id}
                </span>
              </div>
              <div className="z-10 mt-auto pt-4">
                <h4 className="text-xl font-bold text-cream">
                  {project.title}
                </h4>
                <p className="text-sand/70 text-xs line-clamp-1 mt-1 font-mono">
                  {project.technologies.slice(0, 3).join(" • ")}
                </p>
              </div>
            </div>
          )}

          {/* Hover Dark Overlay with Gold Border Accent */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D17] via-[#0B1D17]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
            <div className="flex items-center gap-3">
              <Link
                to={`/projects/${project.slug}`}
                className="btn-primary text-xs px-4 py-2"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-3.5 py-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Top Category Badge (Only shown when image exists) */}
          {!imgError && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full bg-[#0B1D17]/90 backdrop-blur-md border border-gold/40 text-gold text-[11px] font-mono font-bold">
                {project.category}
              </span>
            </div>
          )}
        </div>

        {/* Project Card Info */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-cream group-hover:text-gold transition-colors duration-300 mb-2">
            <Link to={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>

          <p className="text-sand/85 text-xs leading-relaxed line-clamp-3 mb-5 font-medium">
            {project.shortDescription}
          </p>

          {/* Technologies Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-[#0B1D17] border border-sand-subtle/30 text-sand/90 text-[10px] font-mono group-hover:border-gold/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Links */}
      <div className="px-6 pb-6 pt-4 border-t border-sand-subtle/20 flex items-center justify-between">
        <Link
          to={`/projects/${project.slug}`}
          className="text-xs font-bold text-cream hover:text-gold flex items-center gap-1.5 transition-colors"
        >
          <span>Project Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-gold" />
        </Link>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-gold hover:text-gold-light flex items-center gap-1 transition-colors"
          >
            <span>Visit Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}

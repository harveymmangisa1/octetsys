'use client'
import { useState } from 'react';
import { ArrowRight, Eye, ExternalLink, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Portfolio() {
  const [previewProject, setPreviewProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'network', label: 'Infrastructure' },
    { id: 'cctv', label: 'Security' },
    { id: 'training', label: 'Training' },
    { id: 'event', label: 'Events' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? placeholderImages.portfolio
    : placeholderImages.portfolio.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-slate-700" />
            <span className="text-sm font-medium text-slate-700">Our Work</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Projects that deliver
            <span className="block font-semibold mt-2">measurable results</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            From web development to network infrastructure, security systems, and professional training—explore our diverse portfolio of successful projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-slate-200">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeFilter === cat.id ? 'default' : 'secondary'}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={project.src}
                  alt={project.title}
                  data-ai-hint={project.hint}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 flex items-center justify-center gap-3">
                    <Button
                      onClick={() => setPreviewProject(project)}
                      className="bg-white text-slate-900 px-4 py-2 rounded-xl font-medium hover:bg-slate-100 transition-all transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 delay-75 flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </Button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-900 text-white px-4 py-2 rounded-xl font-medium hover:bg-slate-800 transition-all transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 delay-100 flex items-center gap-2"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="default" className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-900 shadow-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                {/* Title */}
                <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>

                {/* Footer Links - Visible on mobile */}
                <div className="flex gap-3 pt-4 md:hidden">
                  <Button
                    onClick={() => setPreviewProject(project)}
                    variant="outline"
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </Button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Visit Site</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Ready to bring your project to life?
          </p>
          <a
            href="/#consultation"
            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Preview Modal */}
      {previewProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
          onClick={() => setPreviewProject(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {previewProject.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1">Live Preview</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={previewProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all"
                >
                  <span>Open Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setPreviewProject(null)}
                >
                    <span className="sr-only">Close</span>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </Button>
              </div>
            </div>

            {/* iFrame */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src={previewProject.url}
                className="w-full h-full border-0"
                title={previewProject.title}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

'use client'
import { useState } from 'react';
import { ArrowRight, Eye, ExternalLink, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Portfolio() {
  const [previewProject, setPreviewProject] = useState<typeof placeholderImages.portfolio[0] | null>(null);
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
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Work</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Projects that deliver
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2">measurable results</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            From web development to network infrastructure, security systems, and professional training—explore our diverse portfolio of successful projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-border">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeFilter === cat.id ? 'default' : 'outline'}
              onClick={() => setActiveFilter(cat.id)}
              className={`rounded-full px-6 transition-all duration-300 ${activeFilter === cat.id
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'hover:bg-secondary text-muted-foreground'
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
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-8 space-y-4 flex-grow">
                <Badge variant="secondary" className="bg-secondary/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground shadow-sm">
                  {project.category}
                </Badge>
                {/* Title */}
                <h3 className="text-2xl font-bold text-card-foreground tracking-tight pt-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-muted-foreground border-border/50">{tag}</Badge>
                  ))}
                </div>
              </div>
              {/* Footer Links */}
              <div className="p-8 pt-0">
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button
                    onClick={() => setPreviewProject(project)}
                    variant="outline"
                    className="flex-1 hover:bg-secondary"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    <span>Preview</span>
                  </Button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
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
          <p className="text-muted-foreground mb-6">
            Ready to bring your project to life?
          </p>
          <a
            href="/#consultation"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Preview Modal */}
      {previewProject && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in-0 duration-300"
          onClick={() => setPreviewProject(null)}
        >
          <div
            className="bg-card border border-border rounded-3xl w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {previewProject.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">Live Preview</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={previewProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all"
                >
                  <span>Open Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setPreviewProject(null)}
                  className="hover:bg-destructive/10 hover:text-destructive"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              </div>
            </div>

            {/* iFrame */}
            <div className="flex-1 overflow-hidden bg-muted/20">
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

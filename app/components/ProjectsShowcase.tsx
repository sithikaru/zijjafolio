'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  stack: string;
  preview: string;
}

const projects: Project[] = [
  { id: 1, title: 'Bondtime', stack: 'Flutter + Node.js + AI', preview: '/bondtime.png' },
  { id: 2, title: 'Leo Club of IIT', stack: 'Next.js + Firebase', preview: 'leo.png' },
  { id: 3, title: 'SkillUp 3.0', stack: 'Next.js + CMS', preview: '/img/projects/skillup.jpg' },
  { id: 4, title: 'CollabTrack', stack: 'Next.js + Kanban UI', preview: '/img/projects/collab.jpg' },
  { id: 5, title: 'Tide', stack: 'HTML/CSS + JS', preview: '/img/projects/tide.jpg' },
];

export default function ProjectsShowcase() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(projects[0]);

  return (
    <section className="min-h-screen bg-[#f5f5f5] px-6 py-20 relative font-sans">
      {/* Image Preview */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex items-center justify-center">
        {hoveredProject && (
          <div className="w-[60%] aspect-[3/4] relative border shadow-md">
            <Image
              src={hoveredProject.preview}
              alt={hoveredProject.title}
              fill
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Project List - Bottom Left */}
      <div className="absolute bottom-20 left-6 w-full md:w-1/2">
        <ul className="space-y-6 text-black">
          {projects.map((project, i) => (
            <li
              key={project.id}
              className="flex justify-between items-center border-b pb-4 hover:cursor-pointer group"
              onMouseEnter={() => setHoveredProject(project)}
            >
              <div className="flex items-center gap-6">
                <span className="text-base text-gray-400">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-xl font-medium tracking-tight group-hover:underline">
                  {project.title}
                </span>
              </div>
              <div className="text-sm text-gray-500 tracking-wide">{project.stack}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

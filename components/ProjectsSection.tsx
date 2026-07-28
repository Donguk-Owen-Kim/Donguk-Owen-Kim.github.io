'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';
import {fetchPublished} from '../sanity/lib/client';
import {projectsQuery} from '../sanity/lib/queries';

type ProjectCard = {
  id: number;
  title: string;
  category?: string;
  description?: string;
  image?: string;
  slideshow?: string[];
  tags?: string[];
  year?: string;
};

export default function ProjectsSection() {
  const fallbackProjects: ProjectCard[] = [
    {
      id: 1,
      title: 'Art&Tech Grad Show: The Film Series',
      category: 'VIDEO EDITING',
      description: 'Three video styles for promoting the graduation exhibition: PR, documentary, and vlog',
      image: '/images/id_1_preview.png',
      slideshow: [
        '/images/AbouT/1.jpg',
        '/images/AbouT/3.jpg',
        '/images/AbouT/5.jpg',
        '/images/AbouT/7.jpg',
      ],
      tags: ['Shooting', 'Editing', 'Promotion Video', 'Documentary Video'],
      year: '2024',
    },
    {
      id: 2,
      title: "Rubik's WCA World Championship 2023",
      category: 'GLOBAL EVENT BRANDING & PRODUCTION',
      description: 'Organized and designed one of the most prestigious global competitions in the world of cubing',
      image: '/images/id_4_preview.png',
      slideshow: [
        '/images/WC/1.jpg',
        '/images/WC/3.JPG',
        '/images/WC/7.JPG',
        '/images/WC/10.JPG',
      ],
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2023',
    },
    {
      id: 3,
      title: 'Air Force Band Annual Concert',
      category: 'Event Design & Protocol Coordination',
      description: 'Supported event logistics and visual design for the Air Force Band Annual Concert in partnership with the Eighth U.S. Army Band',
      image: '/images/id_5_preview.png',
      slideshow: [
        '/images/AF_Band/1.jpg',
        '/images/AF_Band/2.jpg',
        '/images/AF_Band/3.jpg',
      ],
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2022',
    },
    {
      id: 4,
      title: '8th National Pilot Contest in ADEX 2021',
      category: 'EVENT DESIGN',
      description: 'Planned and designed an Air Force experience program that allowed civilians to take part in a fighter jet pilot training simulation',
      image: '/images/id_6_preview.png',
      slideshow: [
        '/images/ADEX/4.jpg',
        '/images/ADEX/3.jpg',
        '/images/ADEX/6.jpg',
        '/images/ADEX/1.jpg',
      ],
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2021',
    },
  ];
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    fetchPublished<ProjectCard[]>(projectsQuery).then((items) => {
      if (items?.length) {
        const managedIds = new Set(items.map((item) => item.id));
        const merged = items.map((item) => {
          const fallback = fallbackProjects.find((project) => project.id === item.id);
          const project = {...fallback, ...item};
          return {
            ...project,
            slideshow: item.slideshow?.length
              ? item.slideshow
              : fallback?.slideshow ?? (project.image ? [project.image] : []),
          } as ProjectCard;
        });
        setProjects([...merged, ...fallbackProjects.filter((item) => !managedIds.has(item.id))]);
      }
    });
    // The local list intentionally remains a stable fallback for gradual CMS migration.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="projects" className="border-t border-black/15 py-24 md:py-36">
      <div className="section-shell">
        <div className="mb-16 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="section-kicker mb-7">Selected work</p>
            <h2 className="section-heading">Projects</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/55 md:text-right">
            Take a scroll through the projects that shaped the journey.
          </p>
        </div>

        <div className="border-t border-black/20">
          {projects.map((project) => (
            <article key={project.id} className="project-row relative border-b border-black/20">
              <Link
                href={`/projects/${project.id}`}
                className="group relative z-10 grid min-h-[150px] grid-cols-[1fr_3rem] items-center gap-8 py-8 md:min-h-[190px] md:py-10"
              >
                <h3 className="max-w-5xl text-[clamp(2.25rem,5.7vw,6.25rem)] font-medium leading-[0.9] tracking-[-0.065em] transition group-hover:text-[#ff5c35]">
                  {project.title}
                </h3>
                <i className="project-arrow ri-arrow-right-up-line text-2xl transition-transform"></i>
              </Link>

              <div className="project-preview pointer-events-none absolute right-[7rem] top-1/2 z-20 hidden h-56 w-80 -translate-y-1/2 overflow-hidden bg-black shadow-2xl md:block xl:h-72 xl:w-[28rem]">
                {(project.slideshow ?? []).map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    className="project-preview-frame absolute inset-0 h-full w-full object-cover"
                    style={{
                      '--slideshow-duration': `${(project.slideshow?.length ?? 1) * 2.2}s`,
                      '--slideshow-delay': `${index * -2.2}s`,
                    } as React.CSSProperties}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

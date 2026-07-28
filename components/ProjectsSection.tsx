'use client';

import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Art&Tech Grad Show: The Film Series',
      category: 'VIDEO EDITING',
      description: 'Three video styles for promoting the graduation exhibition: PR, documentary, and vlog',
      image: '/images/id_1_preview.png',
      tags: ['Shooting', 'Editing', 'Promotion Video', 'Documentary Video'],
      year: '2024',
    },
    {
      id: 2,
      title: "Rubik's WCA World Championship 2023",
      category: 'GLOBAL EVENT BRANDING & PRODUCTION',
      description: 'Organized and designed one of the most prestigious global competitions in the world of cubing',
      image: '/images/id_4_preview.png',
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2023',
    },
    {
      id: 3,
      title: 'Air Force Band Annual Concert',
      category: 'Event Design & Protocol Coordination',
      description: 'Supported event logistics and visual design for the Air Force Band Annual Concert in partnership with the Eighth U.S. Army Band',
      image: '/images/id_5_preview.png',
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2022',
    },
    {
      id: 4,
      title: '8th National Pilot Contest in ADEX 2021',
      category: 'EVENT DESIGN',
      description: 'Planned and designed an Air Force experience program that allowed civilians to take part in a fighter jet pilot training simulation',
      image: '/images/id_6_preview.png',
      tags: ['Exhibition Design', 'Event Planning', 'Product Design'],
      year: '2021',
    },
  ];

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
          {projects.map((project, index) => (
            <article key={project.id} className="project-row relative border-b border-black/20">
              <Link
                href={`/projects/${project.id}`}
                className="group relative z-10 grid min-h-[220px] gap-8 py-8 md:grid-cols-[4rem_1fr_18rem_3rem] md:items-center md:py-10"
              >
                <span className="text-xs tabular-nums text-black/40">0{index + 1}</span>
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.13em] text-black/45">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="max-w-3xl text-[clamp(2rem,4.5vw,5rem)] font-medium leading-[0.95] tracking-[-0.055em] transition group-hover:text-[#ff5c35]">
                    {project.title}
                  </h3>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl md:hidden">
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-5 text-sm leading-6 text-black/55 md:mt-0">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
                <i className="project-arrow ri-arrow-right-up-line text-2xl transition-transform"></i>
              </Link>

              <div className="project-preview pointer-events-none absolute right-[22rem] top-1/2 z-20 hidden h-52 w-72 -translate-y-1/2 overflow-hidden shadow-2xl md:block xl:right-[24rem] xl:h-64 xl:w-96">
                <img src={project.image} alt="" className="h-full w-full object-cover" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import {useEffect, useState} from 'react';
import {PortableText, type PortableTextBlock, type PortableTextComponents} from '@portabletext/react';
import {fetchPublished} from '../sanity/lib/client';
import {siteSettingsQuery} from '../sanity/lib/queries';

type SiteSettings = {
  landingDescription?: string;
  landingContent?: PortableTextBlock[];
  cvUrl?: string;
};

const landingComponents: PortableTextComponents = {
  block: {
    normal: ({children}) => <p>{children}</p>,
  },
  marks: {
    strong: ({children}) => <strong>{children}</strong>,
    em: ({children}) => <em>{children}</em>,
    link: ({children, value}) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline underline-offset-2"
      >
        {children}
      </a>
    ),
    textColor: ({children, value}) => (
      <span style={{color: value?.color}}>{children}</span>
    ),
  },
};

export default function HeroSection() {
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);

  useEffect(() => {
    fetchPublished<SiteSettings>(siteSettingsQuery).then((settings) => {
      if (settings) setSiteSettings(settings);
    });
  }, []);

  const scrollToPublications = () => {
    const element = document.getElementById('publications');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const cvUrl = siteSettings?.cvUrl || '/docs/CV_202608.pdf';

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32">
      <div className="section-shell flex min-h-[calc(100vh-8rem)] flex-col justify-between pb-8">
        <div className="grid items-end gap-12 py-16 lg:grid-cols-[1.5fr_.5fr]">
          <div>
            <p className="section-kicker mb-8">HCI Researcher &amp; Creative Technologist</p>
            <h1 className="max-w-5xl text-[clamp(4.5rem,12vw,11.5rem)] font-medium leading-[0.78] tracking-[-0.085em]">
              Hello,<br />
              I'm <span className="text-[#ff5c35]">Dong-Uk</span> Kim
            </h1>
          </div>
          <div className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:ml-auto">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-black/5">
              <img src="/images/profile.jpg" alt="My profile" className="h-full w-full object-cover object-top grayscale transition duration-500 hover:grayscale-0" />
            </div>
            <span className="absolute -bottom-4 -left-4 rounded-full bg-[#ff5c35] px-4 py-2 text-xs font-semibold text-white">SEOUL, KR</span>
          </div>
        </div>

        <div className="grid gap-8 border-t border-black/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-4xl">
            {siteSettings?.landingContent?.length ? (
              <div className="space-y-1 text-base leading-7 text-black/65 md:text-lg">
                <PortableText value={siteSettings.landingContent} components={landingComponents} />
              </div>
            ) : siteSettings?.landingDescription ? (
              <p className="whitespace-pre-line text-base leading-7 text-black/65 md:text-lg">
                {siteSettings.landingDescription}
              </p>
            ) : (
              <p className="text-base leading-7 text-black/65 md:text-lg">
                I'm UROP in <a href="https://artifab.yoonji-kim.com/main-page" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}><strong>Artifab Lab</strong></a> at Chung-Ang University, advised by <a href="https://www.yoonji-kim.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}><strong>Prof. Yoonji Kim</strong></a>.<br />
                My research interests are <strong>Human-Computer Interaction (HCI)</strong> with a focus on <strong>Accessibility</strong> and <strong>Healthcare</strong>, aiming to help users adapt intuitively in digitally augmented environments. My work integrates <strong>Digital Fabrication</strong>, <strong>Immersive Content Design</strong>, and <strong>User-Centered Innovation</strong>.<br/>
                I earned my B.E. from <a href="https://artech.cau.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
                style={{ textDecoration: "underline" }}><strong>Chung-Ang University (Art&Technology)</strong></a>
              </p>
            )}
          </div>
          <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="button-pill whitespace-nowrap">
            Curriculum Vitae <i className="ri-arrow-right-up-line text-lg"></i>
          </a>
        </div>
      </div>
      <button onClick={scrollToPublications} className="absolute bottom-7 right-6 hidden h-12 w-12 items-center justify-center rounded-full border border-black/15 md:flex" aria-label="Scroll to publications">
        <i className="ri-arrow-down-line"></i>
      </button>
    </section>
  );
}

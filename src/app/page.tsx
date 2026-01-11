"use client"

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { TechPile } from "@/components/tech-pile";
import { TechStack } from "@/components/tech-stack";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

import { ConversationCta } from "@/components/conversation-cta";

const BLUR_FADE_DELAY = 0.04;
import { TimeAlive } from "@/components/time-alive";

import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
        ease={80}
        color={color}
        refresh
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-4xl space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-col flex flex-1 space-y-4">
              <div className="relative">
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {DATA.name}
                </h1>
              </div>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex flex-col items-end text-right">
                <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-1">
                  ON EARTH FOR
                </span>
                <div className="flex items-baseline gap-2">
                  {/* @ts-ignore */}
                  <TimeAlive birthDate={DATA.birthDate} />
                  <span className="text-lg md:text-xl text-muted-foreground font-medium">years</span>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[400px]">
            <BlurFade delay={BLUR_FADE_DELAY * 10} className="h-full">
              <TechPile />
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 11} className="h-full">
              <TechStack />
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>


      <section id="contact" className="px-4 max-w-2xl mx-auto w-full pb-10">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <ConversationCta />
        </BlurFade>
      </section>
    </main>
  );
}

// app/page.tsx
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import AboutText from './components/AboutText';
import AboutScroll from './components/AboutText';
import Img1 from './components/img1';
import ProjectsShowcase from './components/ProjectsShowcase';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutScroll/>
      <Img1/>
      <ProjectsShowcase />
      </>
  );
}

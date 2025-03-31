'use client';

import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';

export default function Home() {
  return (
    <>
      <Hero />
      
      <FeatureSection 
        title="Innovative Teaching Methods"
        description="Dr. Liao's unique teaching approach combines traditional literacy skills with modern communication techniques. Our methods focus on developing critical thinking, analytical skills, and creative expression through engaging and interactive lessons designed for today's students."
        imageSrc="/images/about-image1.jpg"
        imageAlt="Innovative teaching methods in classroom"
      />
      
      <FeatureSection 
        title="Comprehensive Learning Resources"
        description="Access a wide range of specially curated resources including literature guides, essay writing templates, vocabulary builders, and interactive grammar exercises. Our materials are designed to support students at all levels, from foundational English to advanced literary analysis."
        imageSrc="/images/about-image2.jpg"
        imageAlt="Student using digital learning resources"
        reversed={true}
      />
    </>
  );
}

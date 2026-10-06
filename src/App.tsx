/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ActivitiesContent } from './components/ActivitiesContent';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AutoMLPlayground } from './components/AutoMLPlayground';
import { PromptStudioModal } from './components/PromptStudioModal';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    try {
      return localStorage.getItem('portfolio_user_avatar') || PERSONAL_INFO.avatarImage;
    } catch {
      return PERSONAL_INFO.avatarImage;
    }
  });

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isAutoMLOpen, setIsAutoMLOpen] = useState(false);
  const [isPromptStudioOpen, setIsPromptStudioOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleSaveAvatar = (newUrl: string) => {
    setAvatarUrl(newUrl);
    try {
      localStorage.setItem('portfolio_user_avatar', newUrl);
    } catch {
      // Ignore localStorage errors
    }
  };

  const handleResetAvatar = () => {
    setAvatarUrl(PERSONAL_INFO.avatarImage);
    try {
      localStorage.removeItem('portfolio_user_avatar');
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-[#E2E8F0] selection:bg-teal-500 selection:text-white">
      {/* Navigation bar following strict 3-zone top bar contract */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main>
        {/* Split Hero with verified summary, portrait, and core claims */}
        <Hero
          avatarUrl={avatarUrl}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
          onOpenAutoML={() => setIsAutoMLOpen(true)}
          onOpenPromptStudio={() => setIsPromptStudioOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 01. Featured Engineering Projects */}
        <Projects
          onOpenAutoML={() => setIsAutoMLOpen(true)}
          onOpenPromptStudio={() => setIsPromptStudioOpen(true)}
        />

        {/* 02. Skills, Tools & Methodologies + Languages */}
        <SkillsSection />

        {/* 03. Education & Certifications (IBM, Databricks, SNS College, Carmel Garden) */}
        <EducationCertifications />

        {/* 04. Awards & Content Creation (YouTube, LinkedIn, Business Canva Model) */}
        <ActivitiesContent
          onOpenPromptStudio={() => setIsPromptStudioOpen(true)}
        />

        {/* 05. Direct Collaboration & Contact */}
        <ContactSection />
      </main>

      {/* Clean quiet footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Photo Upload / Change Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentAvatar={avatarUrl}
        onSaveAvatar={handleSaveAvatar}
        onResetAvatar={handleResetAvatar}
      />

      {/* Interactive Modals & Sandboxes */}
      <AutoMLPlayground
        isOpen={isAutoMLOpen}
        onClose={() => setIsAutoMLOpen(false)}
      />

      <PromptStudioModal
        isOpen={isPromptStudioOpen}
        onClose={() => setIsPromptStudioOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        avatarUrl={avatarUrl}
        onOpenPhotoModal={() => {
          setIsResumeOpen(false);
          setIsPhotoModalOpen(true);
        }}
      />
    </div>
  );
}

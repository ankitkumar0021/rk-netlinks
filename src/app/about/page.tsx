import AboutCTA from '@/components/about/AboutCTA'
import AboutHero from '@/components/about/AboutHero'
import Journey from '@/components/about/Journey'
import Team from '@/components/about/teamMembers'
import VisionMission from '@/components/about/VisionMission'
import WhyChoose from '@/components/about/WhyChoose'
import React from 'react'

export default function page() {
  return (
    <>
        <AboutHero />
        <VisionMission />
        <Journey />
        <Team />
        <WhyChoose />
        <AboutCTA />
    </>
  )
}

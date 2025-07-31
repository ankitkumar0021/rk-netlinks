import ContactHero from '@/components/contact/ContactHero'
import ContactMap from '@/components/contact/ContactMap'
import FAQ from '@/components/contact/FAQ'
import Locations from '@/components/contact/Locations'
import SupportTeam from '@/components/contact/SupporTeam'
import React from 'react'

export default function page() {
  return (
    <>
        <ContactHero />
        <Locations />
        <ContactMap />
        <SupportTeam />
        <FAQ />
    </>
  )
}

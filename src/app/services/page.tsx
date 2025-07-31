import Broadband from '@/components/services/Broadband'
import FTTH from '@/components/services/FTTH'
import LeaseLine from '@/components/services/LeaseLine'
import ServiceComparison from '@/components/services/ServiceComparison'
import ServicesCTA from '@/components/services/ServicesCTA'
import ServicesHero from '@/components/services/ServicesHero'
import Support from '@/components/services/Support'
import React from 'react'

export default function page() {
  return (
    <>
        <ServicesHero />
        <FTTH />
        <Broadband />
        <LeaseLine />
        <ServiceComparison />
        <Support />
        <ServicesCTA />
    </>
  )
}

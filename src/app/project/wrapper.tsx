import { ReactNode } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { ContactSection } from '@/components/ContactSection'
import { PageLinks } from '@/components/PageLinks'
import { loadCaseStudies, type CaseStudy, type MDXEntry } from '@/lib/mdx'

interface CaseStudyLayoutProps {
  caseStudy: MDXEntry<CaseStudy>
  children: ReactNode
}

const CaseStudyLayout = async ({
  caseStudy,
  children,
}: CaseStudyLayoutProps) => {
  let allCaseStudies = await loadCaseStudies()
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Case Study" title={caseStudy.title} centered>
            <p>{caseStudy.description}</p>
          </PageIntro>
          <FadeIn>
            <Container className="mt-24 sm:mt-32 lg:mt-40">
              <dl className="mx-auto grid max-w-5xl grid-cols-1 gap-x-6 gap-y-4 text-sm text-neutral-950 sm:grid-cols-3">
                <div className="py-4">
                  <dt className="font-semibold">Client</dt>
                  <dd>{caseStudy.client}</dd>
                </div>
                <div className="py-4">
                  <dt className="font-semibold">Year</dt>
                  <dd>
                    <time dateTime={caseStudy.date.split('-')[0]}>
                      {caseStudy.date.split('-')[0]}
                    </time>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="font-semibold">Service</dt>
                  <dd>{caseStudy.service}</dd>
                </div>
              </dl>
            </Container>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>{children}</FadeIn>
        </Container>

        {moreCaseStudies.length > 0 && (
          <PageLinks
            className="mt-24 sm:mt-32 lg:mt-40"
            title="More case studies"
            pages={moreCaseStudies}
          />
        )}

        <ContactSection />
      </article>
    </>
  )
}

export default CaseStudyLayout

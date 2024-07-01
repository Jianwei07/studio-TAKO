/* eslint-disable react/no-unescaped-entities */
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaLight from '@/images/clients/connectKind/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['connectKind', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="text-foreground mt-24 rounded-4xl bg-neutral-800 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Businesses we've impacted
          </h2>
          <div className="h-px flex-auto bg-neutral-500" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <div className="bg-ghost-white-900 py-24 sm:py-32 lg:py-40">
      <Container>
        <SectionIntro title="Our Success Stories" className="mb-16">
          <p>
            Explore our portfolio of successful projects and see how we've
            helped businesses like yours achieve their goals.
          </p>
        </SectionIntro>
        <FadeInStagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="overflow-hidden rounded-xl">
              <Link href={caseStudy.href}>
                <article className="relative h-full bg-alabaster-500 p-6 transition hover:bg-alabaster-700 sm:p-8">
                  <div className="flex">
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-12 w-12 sm:h-16 sm:w-16"
                      unoptimized
                    />
                  </div>
                  <div className="mt-6">
                    <p className="flex gap-x-2 text-xs text-neutral-950 transition group-hover:text-neutral-200 sm:text-sm">
                      <time
                        dateTime={caseStudy.date.split('-')[0]}
                        className="font-semibold"
                      >
                        {caseStudy.date.split('-')[0]}
                      </time>
                      <span
                        className="text-neutral-300 transition group-hover:text-neutral-400"
                        aria-hidden="true"
                      >
                        /
                      </span>
                      <span>Case study</span>
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-neutral-950 transition group-hover:text-neutral-200 sm:mt-3 sm:text-2xl">
                      {caseStudy.title}
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-neutral-600 transition group-hover:text-neutral-300 sm:mt-4 sm:text-base">
                      {caseStudy.description}
                    </p>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </FadeInStagger>
        <div className="mt-12 flex justify-center">
          <Link href="/work">
            <button className="rounded-lg bg-alabaster-700 px-8 py-4 text-base font-semibold text-neutral-950 transition hover:bg-alabaster-600">
              View More
            </button>
          </Link>
        </div>
      </Container>
    </div>
  )
}

function Services() {
  return (
    <>
      <div className="from-moonstone-900 to-moonstone-700 bg-gradient-to-b">
        <SectionIntro
          eyebrow="Services"
          title="Optimizing Your Online Impact"
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            We're not just building websites; we're crafting the digital
            gateways that connect your business to the world. Our services are
            designed to boost your online presence and drive growth, all
            tailored to the unique needs of creators and entrepreneurs.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <div className="lg:flex lg:items-center lg:justify-end">
            <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                <StylizedImage
                  src={imageLaptop}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className="justify-center lg:justify-end"
                />
              </FadeIn>
            </div>
            <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
              <ListItem title="Web development">
                We specialize in designing high-quality, visually stunning
                marketing pages tailored to your brand's unique identity. Our
                approach ensures that each website serves as a dynamic,
                customizable platform ready to engage your audience.
              </ListItem>
              <ListItem title="Application development">
                Our skilled team excels in creating robust applications using
                advanced frameworks to deliver fully customizable and scalable
                solutions. We focus on flexibility to ensure your app evolves
                with your business needs.
              </ListItem>
              <ListItem title="E-commerce">
                We empower your business with fully customizable e-commerce
                solutions that adapt to your specific requirements. Enhance your
                online store’s functionality and user experience to exceed sales
                targets and grow your customer base.
              </ListItem>
              <ListItem title="Custom content management">
                Understanding the critical role of adaptable content, we provide
                powerful, customized content management systems (CMS) that
                streamline content creation and distribution, ensuring your
                message resonates with your audience.
              </ListItem>
            </List>
          </div>
        </Container>
      </div>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

import hero from '../images/hero/technology.svg'

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <div className="min-h-screen">
      <Container className="hero pb-16 pt-24 sm:pb-24 sm:pt-32 md:pt-56">
        <FadeIn className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between md:flex-row">
          <div className="flex-1">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              <span className="gradient-text">
                Transforming Your Digital Presence.
              </span>
            </h1>
            <p className="mt-6 text-xl text-neutral-600 md:max-w-prose">
              From dynamic e-commerce sites to professional freelancer
              portfolios, our Singapore-based team empowers SMEs and freelancers
              with top-tier web development services. Let us help you enhance
              and expand your digital presence with solutions designed to grow
              with your business.
            </p>
          </div>
          <div className="mt-6 hidden flex-shrink-0 md:mt-0 md:block">
            <Image
              src={hero}
              alt="Descriptive Alt Text"
              className="h-auto w-64 scale-[1.4]"
            />
          </div>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'connectKind', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user's microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <Services />
    </div>
  )
}

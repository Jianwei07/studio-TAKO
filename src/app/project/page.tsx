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
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

// const clients = [
//   ['connectKind', logoPhobiaLight],
//   ['Family Fund', logoFamilyFund],
//   ['Unseal', logoUnseal],
//   ['Mail Smirk', logoMailSmirk],
//   ['Home Work', logoHomeWork],
//   ['Green Life', logoGreenLife],
//   ['Bright Path', logoBrightPath],
//   ['North Adventures', logoNorthAdventures],
// ]

// function Clients() {
//   return (
//     <div className="text-foreground mt-24 rounded-4xl bg-neutral-800 py-20 sm:mt-32 sm:py-32 lg:mt-56">
//       <Container>
//         <FadeIn className="flex items-center gap-x-8">
//           <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
//             Businesses we've impacted
//           </h2>
//           <div className="h-px flex-auto bg-neutral-500" />
//         </FadeIn>
//         <FadeInStagger faster>
//           <ul
//             role="list"
//             className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
//           >
//             {clients.map(([client, logo]) => (
//               <li key={client}>
//                 <FadeIn>
//                   <Image src={logo} alt={client} unoptimized />
//                 </FadeIn>
//               </li>
//             ))}
//           </ul>
//         </FadeInStagger>
//       </Container>
//     </div>
//   )
// }

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Crafted for Creators and Entrepreneurs"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At the intersection of innovation and practicality, we deliver web
          solutions that transform the digital landscape for SMEs and
          freelancers.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Optimizing Your Online Impact"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We're not just building websites; we're crafting the digital gateways
          that connect your business to the world. Our services are designed to
          boost your online presence and drive growth, all tailored to the
          unique needs of creators and entrepreneurs.
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
              solutions. We focus on flexibility to ensure your app evolves with
              your business needs.
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
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Transforming Your Digital Presence.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            From dynamic e-commerce sites to professional freelancer portfolios,
            our Singapore-based team empowers SMEs and freelancers with top-tier
            web development services. Let us help you enhance and expand your
            digital presence with solutions designed to grow with your business.
          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'connectKind', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial> */}

      <Services />
    </>
  )
}

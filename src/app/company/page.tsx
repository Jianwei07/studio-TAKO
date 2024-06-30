import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/Gradientdiv'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import Image from 'next/image'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-jet py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Collaborate, grow, and make an impact"
        invert
      >
        <p>
          We are a tight-knit team that values collaboration, continuous
          learning, and making a meaningful difference through our work.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Teamwork" invert>
            We believe in the power of collaboration and work together to
            achieve our goals and deliver exceptional results.
          </GridListItem>
          <GridListItem title="Learning" invert>
            We are committed to continuous learning and growth, staying
            up-to-date with the latest technologies and industry trends.
          </GridListItem>
          <GridListItem title="Balance" invert>
            We strive to maintain a healthy work-life balance, recognizing that
            personal well-being is essential for long-term success.
          </GridListItem>
          <GridListItem title="Purpose" invert>
            We are driven by our purpose to create innovative solutions that
            make a positive impact on society, starting with Singaporeans and
            expanding globally.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, collaborating with their teams to gain deep insights into their
          business processes and challenges.
        </p>
        <p>
          Our experienced consultants conduct thorough assessments, engaging
          with stakeholders across various departments to gather comprehensive
          information about the company's workflows, pain points, and
          aspirations for growth.
        </p>
        <p>
          Once the discovery phase is complete, we analyze the findings and
          develop a{' '}
          <strong className="font-semibold text-neutral-950">
            tailored solution
          </strong>{' '}
          that aligns with the client's objectives, leveraging cutting-edge AI
          technologies to drive efficiency and productivity.
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </Section>
  )
}

function BuildAndDeliver() {
  return (
    <Section title="Build & Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our expert team collaborates closely with you to create tailored
          software solutions that streamline your workflows and drive growth. We
          leverage cutting-edge technologies and agile methodologies to ensure a
          smooth and efficient development process.
        </p>
        <p>
          Throughout the build phase, we maintain open communication, providing
          regular updates and incorporating your feedback. Upon delivery, we
          provide comprehensive training and support to ensure you can fully
          leverage your new software solution.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Key aspects of our Build & Deliver process
      </h3>
      <List className="mt-8">
        <ListItem title="Collaborative Development">
          We work hand-in-hand with you to ensure your software solution meets
          your specific requirements.
        </ListItem>
        <ListItem title="Cutting-Edge Technologies">
          We leverage the latest tools and frameworks to build robust and
          innovative solutions.
        </ListItem>
        <ListItem title="Seamless Deployment & Support">
          We handle the deployment process and provide ongoing support for
          smooth operation.
        </ListItem>
      </List>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

import hero from '@/images/hero/thinking.svg'

export default function Process() {
  return (
    <>
      <div className="bg-ghost relative mt-12 pt-12 sm:mt-16 sm:pt-16 lg:mt-20 lg:pt-20">
        <div className="container mx-auto px-6 py-16 lg:px-8">
          <div className="flex flex-col items-start md:flex-row md:items-center">
            <div className="flex-1">
              <SectionIntro
                eyebrow="Our values"
                title="Balancing reliability and innovation"
              >
                <div className="wrapper">
                  <p>
                    At Tectonic Labs, we strive to strike a perfect balance
                    between leveraging cutting-edge technologies and maintaining
                    a rock-solid foundation. Our values guide us in delivering{' '}
                    <a href="/work" className="text-sienna">
                      innovative solutions
                    </a>
                    &nbsp;that meet our clients' unique needs while ensuring
                    reliability and efficiency.
                  </p>
                </div>
              </SectionIntro>
            </div>
            <div className="mt-6 hidden flex-shrink-0 md:ml-12 md:mt-0 md:block">
              <Image
                src={hero}
                alt=""
                width={350}
                height={350}
                className="mt-8"
              />
            </div>
          </div>
        </div>
        <Container className="mt-12">
          <GridList>
            <GridListItem title="Quality">
              We are committed to delivering high-quality software solutions
              that exceed our clients' expectations.
            </GridListItem>
            <GridListItem title="Efficiency">
              Our streamlined processes and agile methodologies enable us to
              deliver projects on time and within budget.
            </GridListItem>
            <GridListItem title="Adaptability">
              We understand that every business is unique, and we tailor our
              solutions to meet your specific requirements.
            </GridListItem>
            <GridListItem title="Transparency">
              We maintain open and honest communication with our clients
              throughout the development process.
            </GridListItem>
            <GridListItem title="Partnership">
              We view our clients as long-term partners and are committed to
              their success beyond project delivery.
            </GridListItem>
            <GridListItem title="Continuous Improvement">
              We constantly explore new technologies and methodologies to
              enhance our solutions and services.
            </GridListItem>
          </GridList>
        </Container>
      </div>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Culture />
        <Discover />
        <BuildAndDeliver />
      </div>
    </>
  )
}

// function Build() {
//   return (
//     <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
//       <div className="space-y-6 text-base text-neutral-600">
//         <p>
//           With a clear roadmap in place, our expert team of developers and AI
//           specialists collaborate to bring your solution to life. We leverage
//           cutting-edge technologies and agile methodologies to ensure a smooth
//           and efficient development process.
//         </p>
//         <p>
//           Throughout the build phase, we maintain open lines of communication,
//           providing regular updates and incorporating your feedback. Our goal is
//           to deliver a high-quality, scalable, and user-friendly AI solution
//           that meets your unique business needs.
//         </p>
//       </div>
//       {/* <Blockquote
//         author={{ name: 'Samantha Lee', role: 'CTO of TechWave' }}
//         className="mt-12"
//       >
//         Tectonic Labs' expertise and commitment to delivering exceptional modern
//         software solutions exceeded our expectations. Their transparent and
//         collaborative approach made the development process a breeze.
//       </Blockquote> */}
//     </Section>
//   )
// }

// function Deliver() {
//   return (
//     <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
//       <div className="space-y-6 text-base text-neutral-600">
//         <p>
//           About halfway through the Build phase, we push each project out by 6
//           weeks due to a change in{' '}
//           <strong className="font-semibold text-neutral-950">
//             requirements
//           </strong>
//           . This allows us to increase the budget a final time before launch.
//         </p>
//         <p>
//           Despite largely using pre-built components, most of the{' '}
//           <strong className="font-semibold text-neutral-950">progress</strong>{' '}
//           on each project takes place in the final 24 hours. The development
//           time allocated to each client is actually spent making augmented
//           reality demos that go viral on social media.
//         </p>
//         <p>
//           We ensure that the main pages of the site are{' '}
//           <strong className="font-semibold text-neutral-950">
//             fully functional
//           </strong>{' '}
//           at launch — the auxiliary pages will, of course, be lorem ipusm shells
//           which get updated as part of our exorbitant{' '}
//           <strong className="font-semibold text-neutral-950">
//             maintenance
//           </strong>{' '}
//           retainer.
//         </p>
//       </div>

//       <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
//         Included in this phase
//       </h3>
//       <List className="mt-8">
//         <ListItem title="Testing">
//           Our projects always have 100% test coverage, which would be impressive
//           if our tests weren’t as porous as a sieve.
//         </ListItem>
//         <ListItem title="Infrastructure">
//           To ensure reliability we only use the best Digital Ocean droplets that
//           $4 a month can buy.
//         </ListItem>
//         <ListItem title="Support">
//           Because we hold the API keys for every critical service your business
//           uses, you can expect a lifetime of support, and invoices, from us.
//         </ListItem>
//       </List>
//     </Section>
//   )
// }

// function Values() {
//   return (
//     <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
//       <SectionIntro
//         eyebrow="Our values"
//         title="Balancing reliability and innovation"
//       >
//         <p>
//           At Tectonic Labs, we strive to strike a perfect balance between
//           leveraging cutting-edge technologies and maintaining a rock-solid
//           foundation. Our values guide us in delivering innovative solutions
//           that meet our clients' unique needs while ensuring reliability and
//           efficiency.
//         </p>
//       </SectionIntro>
//       <Container className="mt-24">
//         <GridList>
//           <GridListItem title="Quality">
//             We are committed to delivering high-quality software solutions that
//             exceed our clients' expectations.
//           </GridListItem>
//           <GridListItem title="Efficiency">
//             Our streamlined processes and agile methodologies enable us to
//             deliver projects on time and within budget.
//           </GridListItem>
//           <GridListItem title="Adaptability">
//             We understand that every business is unique, and we tailor our
//             solutions to meet your specific requirements.
//           </GridListItem>
//           <GridListItem title="Transparency">
//             We maintain open and honest communication with our clients
//             throughout the development process.
//           </GridListItem>
//           <GridListItem title="Partnership">
//             We view our clients as long-term partners and are committed to their
//             success beyond project delivery.
//           </GridListItem>
//           <GridListItem title="Continuous Improvement">
//             We constantly explore new technologies and methodologies to enhance
//             our solutions and services.
//           </GridListItem>
//         </GridList>
//       </Container>
//     </div>
//   )
// }

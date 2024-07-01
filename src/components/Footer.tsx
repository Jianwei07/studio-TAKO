import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo, Logomark } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import { Button } from './Button'

const navigation = [
  {
    title: 'Projects',
    links: [
      { title: 'Sure Catch', href: '/work/sure-catch' },
      { title: 'PocketTrade', href: '/work/pocketTrade' },
      { title: 'DMC Fishing', href: '/work/dmc-fishing' },
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { title: 'Our Work', href: '/work' },
      { title: 'Process', href: '/company' },
      /*       { title: 'Blog', href: '/blog' },
       */ { title: 'Contact us', href: '/contact' },
    ],
  },
  // {
  //   title: 'Connect',
  //   links: socialMediaProfiles,
  // },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-20 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul
              role="list"
              className="mt-4 text-sm tracking-wide text-neutral-500"
            >
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  return (
    <div className="mt-16 sm:mt-24 lg:mt-32">
      <Container
        as="footer"
        className="max-w-full rounded-t-3xl bg-ghost-white-500 px-6 sm:px-8 md:px-12 lg:px-32"
      >
        <FadeIn>
          <div className="flex flex-col items-center justify-between space-y-6 py-12 md:flex-col lg:flex-row lg:items-start lg:py-16">
            <div className="flex w-full flex-col items-center text-center lg:w-auto lg:items-start lg:text-left">
              <Link
                href="/"
                aria-label="Home"
                className="flex justify-center lg:justify-start"
              >
                <Logomark
                  style={{ height: '40px' }}
                  className="text-neutral-100 sm:hidden"
                />
                <Logo className="m-1" />
              </Link>
              <p className="mt-4 font-league-spartan text-lg font-semibold text-jet">
                From Concept to Creation, Empowered by Technology
              </p>
              <Link
                href="/contact"
                aria-label="Contact Us"
                className="mt-4 inline-flex items-center justify-center rounded-2xl border border-neutral-300 bg-transparent px-6 py-4 text-base font-semibold text-neutral-950 transition-colors hover:bg-jet hover:text-white focus:outline-none focus:ring-2 focus:ring-neutral-950/50 lg:justify-start"
              >
                Contact Us
                <ArrowIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <Navigation />
          </div>
          <div className="border-t border-neutral-950/20 py-8">
            <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
              <p className="text-sm text-neutral-700">
                © Tectonic Labs Pte Ltd. {new Date().getFullYear()}
              </p>
              <ul className="mt-4 flex flex-col items-center space-y-2 text-sm text-neutral-500 lg:mt-0 lg:flex-row lg:space-x-6 lg:space-y-0">
                <li>
                  <Link
                    href="/legal/privacy-policy"
                    aria-label="Privacy Policy"
                    className="transition hover:text-neutral-950"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/usage-policy"
                    aria-label="Usage Policy"
                    className="transition hover:text-neutral-950"
                  >
                    Usage Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/disclosure-policy"
                    aria-label="Disclosure Policy"
                    className="transition hover:text-neutral-950"
                  >
                    Disclosure Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

// function NewsletterForm() {
//   return (
//     <form className="max-w-sm">
//       <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
//         Sign up for our newsletter
//       </h2>
//       <p className="mt-4 text-sm text-neutral-700">
//         Subscribe to get the latest design news, articles, resources and
//         inspiration.
//       </p>
//       <div className="relative mt-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           autoComplete="email"
//           aria-label="Email address"
//           className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
//         />
//         <div className="absolute inset-y-1 right-1 flex justify-end">
//           <button
//             type="submit"
//             aria-label="Submit"
//             className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
//           >
//             <ArrowIcon className="w-4" />
//           </button>
//         </div>
//       </div>
//     </form>
//   )
// }

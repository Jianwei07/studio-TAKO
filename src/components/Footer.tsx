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
      { title: 'FamilyFund', href: '/work/family-fund' },
      { title: 'Unseal', href: '/work/unseal' },
      { title: 'Phobia', href: '/work/phobia' },
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
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-10 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
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
      <Container as="footer" className="max-w-full bg-ghost-white-500">
        <FadeIn>
          <div className="flex flex-col justify-between py-12 lg:flex-row lg:py-16">
            <div className="flex flex-col">
              <Link href="/" aria-label="Home" className="flex">
                <Logomark
                  style={{ height: '40px' }}
                  className="text-neutral-100"
                />
                <Logo className="m-1" />
              </Link>
              <p className="mt-4 text-sm text-jet">
                From Concept to Creation, Empowered by Technology
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 lg:mt-0">
              <div>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="border-b border-neutral-950/20 pb-1 text-sm text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/join"
                      className="border-b border-neutral-950/20 pb-1 text-sm text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950"
                    >
                      Join Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Navigation />
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-950/20 py-8">
            <div className="flex flex-wrap items-center justify-between">
              <p className="text-sm text-neutral-700">
                © Tectonic Labs Pte Ltd. {new Date().getFullYear()}
              </p>
              <ul className="flex space-x-6 text-sm text-neutral-500">
                <li>
                  <Link
                    href="/legal/privacy-policy"
                    className="transition hover:text-neutral-950"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/usage-policy"
                    className="transition hover:text-neutral-950"
                  >
                    Usage Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/disclosure-policy"
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

// function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
//   return (
//     <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
//       <path
//         fill="currentColor"
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M16 3 10 .5v2H0v1h10v2L16 3Z"
//       />
//     </svg>
//   )
// }

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

import { useState, useRef, useEffect, MutableRefObject } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import countryCodes from '@/utils/countryCodes'

interface CountrySelectorProps {
  id: string
  open: boolean
  disabled?: boolean
  onToggle: () => void
  onChange: (value: { name: string; code: string; dial_code: string }) => void
  selectedValue: { name: string; code: string; dial_code: string }
}

const getFlagUrl = (countryCode: string) =>
  `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`

export default function CountrySelector({
  id,
  open,
  disabled = false,
  onToggle,
  onChange,
  selectedValue,
}: CountrySelectorProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const mutableRef = ref as MutableRefObject<HTMLDivElement | null>

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mutableRef.current &&
        !mutableRef.current.contains(event.target as Node) &&
        open
      ) {
        onToggle()
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, open, onToggle])

  return (
    <div ref={ref} className="inline-block">
      <div className="relative">
        <button
          type="button"
          className={`${
            disabled ? 'bg-white' : 'bg-gray-100 hover:bg-gray-200'
          } text-normal focus:ring-primary-500 focus:border-primary-500 relative cursor-pointer rounded-md py-2 pl-3 pr-10 text-left shadow-sm focus:ring-2 sm:text-sm`}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby="listbox-label"
          onClick={onToggle}
          disabled={disabled}
          style={{ minWidth: '105px', width: 'auto' }}
        >
          <span className="flex items-center space-x-2">
            <Image
              src={getFlagUrl(selectedValue.code)}
              alt={`${selectedValue.code} flag`}
              width={20}
              height={15}
              className="rounded-sm"
            />
            <span className="sm:text-normal text-md">
              {selectedValue.dial_code}
            </span>
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute z-20 mt-2 max-h-80 w-64 overflow-auto rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
            >
              <div className="sticky top-0 z-10 bg-white px-3 py-2">
                <input
                  type="search"
                  name="search"
                  autoComplete="off"
                  className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2"
                  placeholder="Search a country"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <hr className="border-gray-200" />
              <div>
                {countryCodes.filter(
                  (country) =>
                    country.name.toLowerCase().includes(query.toLowerCase()) ||
                    country.code.toLowerCase().includes(query.toLowerCase()) ||
                    country.dial_code.includes(query),
                ).length === 0 ? (
                  <li className="px-3 py-2 text-sm text-gray-500">
                    No countries found
                  </li>
                ) : (
                  countryCodes
                    .filter(
                      (country) =>
                        country.name
                          .toLowerCase()
                          .includes(query.toLowerCase()) ||
                        country.code
                          .toLowerCase()
                          .includes(query.toLowerCase()) ||
                        country.dial_code.includes(query),
                    )
                    .map((country, index) => (
                      <li
                        key={`${id}-${index}`}
                        className="flex cursor-pointer items-center px-3 py-2 hover:bg-gray-100"
                        role="option"
                        onClick={() => {
                          onChange(country)
                          setQuery('')
                          onToggle()
                        }}
                      >
                        <Image
                          src={getFlagUrl(country.code)}
                          alt={`${country.code} flag`}
                          width={20}
                          height={15}
                          className="mr-3 rounded-sm"
                        />
                        <span className="text-sm text-gray-700">
                          {country.name} ({country.dial_code})
                        </span>
                      </li>
                    ))
                )}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

'use client'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import Link from 'next/link'
import React, { useState } from 'react'
import CountrySelector from '@/components/selector'
import Swal from 'sweetalert2'

// Validation Schema using yup
const schema = yup.object({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  company: yup.string(),
  phone: yup
    .string()
    .matches(/^\+?[\d\s()-]{10,}$/, 'Invalid phone number')
    .nullable() // Allows the field to be null or empty
    .transform((value) => (value ? value : null)), // Transforms empty strings to null
  message: yup.string().required('Message is required'),
})

// TextInput Component
const TextInput = React.forwardRef(
  ({ label, error, register, required, ...props }: any, ref) => {
    const id = label.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="relative">
        <input
          id={id}
          ref={ref} // Pass the ref to the input
          {...register}
          {...props}
          placeholder={label}
          className={`peer w-full border-b bg-transparent py-3 pl-3 text-base/6 text-neutral-950 placeholder:text-transparent focus:border-neutral-950 focus:outline-none ${
            error ? 'border-red-600' : 'border-neutral-300'
          }`}
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-3 top-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950 ${
            required ? 'after:text-red-600 after:content-["*"]' : ''
          }`}
        >
          {label}
        </label>
        {error && <p className="mt-1 text-xs text-red-600">{error.message}</p>}
      </div>
    )
  },
)

// Assign a display name to your forwardRef component for better debugging
TextInput.displayName = 'TextInput'

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

// Contact Form Component
function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [countrySelectorOpen, setCountrySelectorOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({
    name: 'Singapore',
    code: 'SG',
    dial_code: '+65',
  })
  const [loading, setLoading] = useState(false) // State for loading animation

  const handleCountryChange = (country: {
    name: string
    code: string
    dial_code: string
  }) => {
    setSelectedCountry(country)
  }

  const onSubmit = async (data: any) => {
    console.log('Form data to be submitted:', data) // Debugging statement
    setLoading(true)
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          countryCode: selectedCountry.dial_code,
        }),
      })

      console.log('Response status:', response.status) // Debugging statement

      if (!response.ok) {
        throw new Error('Failed to send enquiry')
      }

      const result = await response.json()

      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: 'Your enquiry has been submitted successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
      })

      reset()
    } catch (error) {
      console.error('An error occurred while sending the enquiry:', error)

      // Show error alert
      Swal.fire({
        title: 'Error!',
        text: 'There was an error submitting your enquiry. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      })
    } finally {
      setLoading(false) // Stop loading animation
    }
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit(onSubmit)} // Ensure this is correct
        className="rounded-2xl bg-white/80 p-8 shadow-xl backdrop-blur-sm"
      >
        <h2 className="mb-8 font-display text-2xl font-semibold text-neutral-950">
          Contact Us
        </h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextInput
              label="First Name"
              {...register('firstName')}
              error={errors.firstName}
              required
            />
            <TextInput
              label="Last Name"
              {...register('lastName')}
              error={errors.lastName}
              required
            />
          </div>
          <TextInput
            label="Email"
            type="email"
            {...register('email')}
            error={errors.email}
            required
          />
          <TextInput
            label="Company"
            {...register('company')}
            error={errors.company}
          />
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <CountrySelector
                id="country-selector"
                open={countrySelectorOpen}
                onToggle={() => setCountrySelectorOpen(!countrySelectorOpen)}
                onChange={handleCountryChange}
                selectedValue={selectedCountry}
              />
            </div>
            <div className="flex-grow">
              <TextInput
                label="Contact No."
                type="tel"
                {...register('phone')}
                error={errors.phone}
              />
            </div>
          </div>
          <div className="relative">
            <textarea
              id="message"
              {...register('message')}
              rows={4}
              placeholder="Tell us more about your project"
              className={`peer w-full resize-none rounded-md border bg-transparent p-3 text-base/6 text-neutral-950 placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none ${
                errors.message ? 'border-red-600' : 'border-neutral-300'
              }`}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6 flex items-center justify-center space-x-2 rounded-md bg-jet-600 px-6 py-2 text-white hover:bg-jet-700"
        >
          <span className="text-base">Submit Enquiry</span>
        </Button>
      </form>
    </FadeIn>
  )
}

{
  /* <fieldset>
  <legend className="text-base/6 text-neutral-500">Budget</legend>
  <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
    <RadioInput label="$25K – $50K" name="budget" value="25" />
    <RadioInput label="$50K – $100K" name="budget" value="50" />
    <RadioInput label="$100K – $150K" name="budget" value="100" />
    <RadioInput label="More than $150K" name="budget" value="150" />
  </div>
</fieldset> */
}

// Contact Details Component
function ContactDetails() {
  return (
    <FadeIn>
      <Border className="mt-16 rounded-2xl py-8 lg:py-10">
        <h2 className="mb-8 font-display text-3xl font-bold text-neutral-950">
          Get in Touch
        </h2>
        <dl className="grid grid-cols-1 gap-8 text-lg">
          <div>
            <dt className="mb-2 flex items-center font-semibold text-neutral-950">
              <FaEnvelope className="mr-3 text-2xl text-jet-600" /> Email Us
            </dt>
            <dd>
              <Link
                href="mailto:support@tectoniclabs.co"
                className="text-xl text-sienna-300 underline underline-offset-4 transition-colors duration-300 hover:text-blue-600"
              >
                support@tectoniclabs.co
              </Link>
            </dd>
          </div>
        </dl>
        <p className="mt-8 text-neutral-700">
          We're excited to hear about your project. Reach out to us anytime, and
          we'll get back to you as soon as possible.
        </p>
      </Border>
    </FadeIn>
  )
}

// Main Contact Page Component
export default function Contact() {
  return (
    <Container className="mt-24 px-4 sm:mt-32 sm:px-8 lg:mt-40">
      <div className="grid grid-cols-1 gap-x-12 gap-y-24 lg:grid-cols-2">
        <div>
          <SectionIntro title="Elevate Your Digital Presence" className="mb-16">
            <p className="font-md leading-snug">
              Tectonic Labs helps small businesses, SMEs, and freelancers thrive
              online with custom websites, apps, and digital solutions.
            </p>
          </SectionIntro>
          <ContactDetails />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Container>
  )
}

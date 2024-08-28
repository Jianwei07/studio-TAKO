import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type Data = {
  message: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, company, message, countryCode } =
      req.body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    // Combine first name and last name into full name
    const fullName = `${firstName} ${lastName}`.trim()
    const fullContactNo = `${countryCode} ${phone}`

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      logger: true, // Enable logging
      debug: true, // Enable debugging
    })

    const mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: process.env.RECEIVING_EMAIL_ADDRESS, // list of receivers
      subject: `New Enquiry from ${fullName}`, // Subject line
      html: `
        <h1>New Enquiry from ${fullName}</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${fullContactNo} || 'Not Provided'</p>
        <p><strong>Company:</strong> ${company || 'Not Provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }

    const autoReplyOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: email, // user's email
      subject: 'We Have Received Your Enquiry',
      html: `
        <p>Dear ${fullName},</p>
        <p>Thank you for your enquiry. We have received your message and will get back to you within 3 working days.</p>
        <p>Best regards,</p>
        <p>Tectonic Labs</p>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      await transporter.sendMail(autoReplyOptions)

      return res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error('Failed to send email:', error)
      return res.status(500).json({
        message: 'Failed to send email',
        error:
          error instanceof Error ? error.message : 'An unknown error occurred',
      })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}

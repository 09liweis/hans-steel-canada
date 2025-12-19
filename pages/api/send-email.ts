import type { NextApiRequest, NextApiResponse } from 'next'
import { CONTACT_EMAIL } from '../../constants/text'

type Data = {
  success: boolean
  message?: string
}

const RESEND_API = 'https://api.resend.com/emails'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  const { name, email, phone, company, service, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_EMAIL || CONTACT_EMAIL

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return res.status(500).json({ success: false, message: 'Email service not configured' })
  }

  if (!toEmail) {
    console.error('Contact email is not set (process.env.CONTACT_EMAIL or constants)')
    return res.status(500).json({ success: false, message: 'Contact email not configured' })
  }

  const subject = `Website Contact — ${name}${service ? ` (${service})` : ''}`
  const html = `
    <h2>New contact from website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
    ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ''}
    <h3>Message</h3>
    <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
  `

  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'no-reply@example.com'

    const r = await fetch(RESEND_API, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject,
        html,
      }),
    })

    if (!r.ok) {
      const text = await r.text()
      console.error('Resend error', r.status, text)
      return res.status(502).json({ success: false, message: 'Failed to send email' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Send email error', err)
    return res.status(500).json({ success: false, message: 'Server error' })
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

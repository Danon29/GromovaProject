'use server'

import { Resend } from 'resend'

export type ContactFormState = {
  status: 'idle' | 'error' | 'success'
  errors?: Partial<Record<'name' | 'contact' | 'message', string>>
  values?: { name: string; contact: string; message: string }
}

function field(formData: FormData, key: string): string {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

const resend = new Resend(process.env.RESEND_API_KEY)

const MAIL_FROM = process.env.MAIL_FROM ?? 'GROMOVA site <noreply@gromova-photo-kld.ru>'

export async function sendMessage(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const values = {
    name: field(formData, 'name'),
    contact: field(formData, 'contact'),
    message: field(formData, 'message'),
  }

  if (field(formData, 'website') !== '') {
    return { status: 'success' }
  }

  const startedAt = Number(field(formData, 'startedAt'))
  if (startedAt > 0 && Date.now() - startedAt < 2000) {
    return { status: 'success' }
  }

  const errors: ContactFormState['errors'] = {}
  if (values.name.length < 2) errors.name = 'Введите имя'
  if (values.contact.length < 5) errors.contact = 'Оставьте e-mail или телефон для связи'
  if (values.message.length > 2000) errors.message = 'Сообщение слишком большое'

  if (Object.keys(errors).length > 0) return { status: 'error', errors, values }

  const { error } = await resend.emails.send({
    from: MAIL_FROM,
    to: process.env.CONTACT_EMAIL!,
    replyTo: values.contact.includes('@') ? values.contact : undefined,
    subject: `Заявка на съёмку — ${values.name}`,
    text: [`Имя: ${values.name}`, `Контакт: ${values.contact}`, '', values.message || '(без описания)'].join('\n'),
  })

  if (error) {
    console.error('Resend error:', error)
    return {
      status: 'error',
      errors: { message: 'Не получилось отправить — напишите на почту напрямую' },
      values,
    }
  }

  return { status: 'success' }
}

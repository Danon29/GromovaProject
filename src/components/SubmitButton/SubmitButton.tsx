'use client'

import { useFormStatus } from 'react-dom'
import styles from '@/components/ContactForm/ContactForm.module.css' // этот — из react-dom!

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending} className={styles.formButton}>
      {pending ? 'Отправляю…' : 'Отправить заявку'}
    </button>
  )
}

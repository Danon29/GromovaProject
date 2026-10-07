'use client'

import styles from './ContactForm.module.css'
import { ContactFormState, sendMessage } from '@/app/actions'
import { useActionState, useEffect, useRef } from 'react'
import { SubmitButton } from '@/components/SubmitButton/SubmitButton'

const initialState: ContactFormState = { status: 'idle' }

export default function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, initialState)

  const startedAtRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now())
  }, [])

  if (state.status === 'success') {
    return (
      <div className={styles.thanks}>
        <p className={styles.thanksTitle}>Спасибо!</p>
        <p>Заявка отправлена. Я свяжусь с вами совсем скоро.</p>
      </div>
    )
  }

  return (
    <form className={styles.contactForm} action={formAction}>
      <label className={styles.formLabel}>
        <span className={styles.formSpan}>Как вас зовут</span>
        <input type="text" name="name" required placeholder="Имя" className={styles.formInput} />
      </label>
      <label className={styles.formLabel}>
        <span className={styles.formSpan}>E-mail или телефон</span>
        <input type="text" name="contact" required placeholder="Контакт для связи" className={styles.formInput} />
      </label>
      <label className={styles.formLabel}>
        <span className={styles.formSpan}>О съёмке</span>
        <textarea name="message" placeholder="Событие, дата, идея..." className={styles.formArea} rows={3} />
      </label>
      <div aria-hidden={true} className={styles.trap}>
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="startedAt" ref={startedAtRef} />
      <SubmitButton />
      resen
    </form>
  )
}

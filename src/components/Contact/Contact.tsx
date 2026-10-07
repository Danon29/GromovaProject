import styles from './Contact.module.css'
import { contact } from '@/content/contact'
import { Reveal } from '@/components/Reveal/Reveal'
import ContactForm from '@/components/ContactForm/ContactForm'

export function Contact() {
  const { contacts, socialNetworks } = contact

  return (
    <section id="contact" className={styles.contact}>
      <Reveal className={styles.wrapper}>
        <>
          <div className={styles.label}>
            <span className={styles.number}>04</span>
            <span className={styles.name}>контакты</span>
          </div>
          <h2 className={styles.title}>
            Давайте
            <br />
            поработаем
          </h2>
          <p className={styles.lead}>Расскажите про идею съёмки — отвечу в течение дня и пришлю условия.</p>
          <div className={styles.contactList}>
            {contacts.map((c, i) => (
              <a className={styles.contactLink} href={c.href} key={i}>
                {c.name}
              </a>
            ))}
            <div className={styles.contactServices}>
              {socialNetworks.map((c, i) => (
                <a className={styles.contactService} href={c.href} key={i}>
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </>
        <ContactForm />
      </Reveal>
    </section>
  )
}

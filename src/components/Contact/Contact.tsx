import styles from './Contact.module.css'
import { contact } from '@/content/contact'

export function Contact() {
  const { contacts, socialNetworks } = contact

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.wrapper}>
        <div>
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
        </div>
        <form className={styles.contactForm}>
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

          <button type="submit" className={styles.formButton}>
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  )
}

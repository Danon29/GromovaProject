import styles from './Backstage.module.css'

export function Backstage() {
  return (
    <section id="backstage" className={styles.container}>
      <div className={styles.leadGrid}>
        <div className={styles.label}>
          <span className={styles.number}>01</span>
          <span className={styles.name}>за кадром / backstage</span>
        </div>
        <h2 className={styles.lead}>
          Вы не заметите, как я делаю кадр, — но результат заметят все. Я снимаю масштаб события, его создателей и тех,
          ради кого всё происходит.
        </h2>
      </div>
    </section>
  )
}

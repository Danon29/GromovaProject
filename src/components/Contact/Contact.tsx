export function Contact() {
  return (
    <section id="contact">
      <div className="label">
        <span className="number">04</span>
        <span className="name">контакты</span>
      </div>
      <h2>Давайте поработаем</h2>
      <p className="lead">Расскажите про идею съёмки — отвечу в течение дня и пришлю условия.</p>
      <ul className="contact-list">
        <li>hello@gromova.photo</li>
        <li>+7 000 000-00-00</li>
      </ul>
      <ul className="contact-links">
        <li>telegram</li>
        <li>instagram</li>
      </ul>
      <form>
        <label>
          <span>Как вас зовут</span>
          <input type="text" name="name" required placeholder="Имя" />
        </label>

        <label>
          <span>E-mail или телефон</span>
          <input type="text" name="contact" required placeholder="Контакт для связи" />
        </label>

        <label>
          <span>О съёмке</span>
          <textarea name="message" placeholder="Событие, дата, идея..." />
        </label>

        <button type="submit">Отправить заявку</button>
      </form>
    </section>
  )
}

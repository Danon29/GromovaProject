export function About() {
  return (
    <section id="about">
      <div className="label">
        <span className="number">03</span>
        <span className="name">обо мне</span>
      </div>
      <h2>Свет, сцена, момент</h2>
      <p className="lead">
        Я — GROMOVA. 4 года снимаю то, что обычно остаётся за кадром: репетиции, гримёрки, сцену за минуту до выхода.
        Работаю на концертах и съёмочных площадках, снимаю живые портреты — без постановочной суеты.
      </p>
      <p className="lead">
        Верю, что лучший кадр рождается, когда человек забывает про камеру. Люблю естественный свет, живую эмоцию и
        честную историю.
      </p>
      <dl className="stats">
        <div className="stat">
          <dt>года опыта</dt>
          <dd>4</dd>
        </div>
        <div className="stat">
          <dt>съёмок</dt>
          <dd>300+</dd>
        </div>
        <div className="stat">
          <dt>кадров в архиве</dt>
          <dd>10 000+</dd>
        </div>
      </dl>
    </section>
  )
}

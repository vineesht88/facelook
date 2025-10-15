import type { ReactElement } from 'react'


const milestones = [
  {
    year: '2019',
    title: 'Founded',
    description: 'We launched Facelook with a mission to connect people around meaningful stories.',
  },
  {
    year: '2021',
    title: '1M creators',
    description: 'Our community of creators grew past one million active storytellers worldwide.',
  },
  {
    year: '2024',
    title: 'Global expansion',
    description: 'Facelook rolled out localized experiences across 15 new regions.',
  },
]

export default function AboutPage(): ReactElement {
  return (
    <section className="about-page">
      <header className="about-page__intro">
        <h1 className="about-page__title">The story behind Facelook</h1>
        <p className="about-page__summary">
          We build tools that help you celebrate your moments, strengthen communities, and share experiences that
          matter. Our platform blends expressive design with privacy-first foundations.
        </p>
      </header>

      <div className="about-page__content">
        <article className="about-page__mission">
          <h2 className="about-page__mission-title">Our mission</h2>
          <p>
            Facelook empowers every voice with a safe and expressive digital canvas. We believe social platforms
            should champion creativity while safeguarding the people who use them. That is why we invest heavily in
            human-centered design, accessibility, and responsible AI.
          </p>
          <p>
            From day one, we have worked closely with creators, educators, and community organizers to craft features
            that respect context and consent. Together, we are redefining what online communities can be.
          </p>
        </article>

        <aside className="about-page__sidebar">
          <div className="about-page__values">
            <h3>What drives us</h3>
            <ul>
              <li>Creativity without compromise</li>
              <li>Privacy that is easy to understand</li>
              <li>Technology that amplifies positive communities</li>
            </ul>
          </div>

          <div className="about-page__milestones">
            <h3>Milestones</h3>
            <dl>
              {milestones.map((item) => (
                <div key={item.year} className="about-page__milestone">
                  <dt>{item.year}</dt>
                  <dd className="about-page__milestone-title">{item.title}</dd>
                  <dd className="about-page__milestone-copy">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </section>
  )
}

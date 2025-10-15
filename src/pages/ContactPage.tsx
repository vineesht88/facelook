import type { ReactElement } from 'react'


export default function ContactPage(): ReactElement {
  return (
    <section className="contact-page">
      <header className="contact-page__intro">
        <h1 className="contact-page__title">Let's build something together</h1>
        <p className="contact-page__summary">
          Our team is ready to help with partnerships, product questions, or community support. Drop a note and we'll
          respond within two business days.
        </p>
      </header>

      <div className="contact-page__body">
        <form className="contact-page__form">
          <div className="contact-page__form-row">
            <label className="contact-page__field">
              <span>First name</span>
              <input type="text" name="firstName" placeholder="Alex" required />
            </label>
            <label className="contact-page__field">
              <span>Last name</span>
              <input type="text" name="lastName" placeholder="Rivera" required />
            </label>
          </div>

          <label className="contact-page__field">
            <span>Email</span>
            <input type="email" name="email" placeholder="you@domain.com" required />
          </label>

          <label className="contact-page__field">
            <span>How can we help?</span>
            <textarea name="message" placeholder="Share details about your request…" required />
          </label>

          <button type="submit" className="contact-page__submit">
            Send message
          </button>
        </form>

        <aside className="contact-page__details">
          <div>
            <h2>General inquiries</h2>
            <p>hello@facelook.com</p>
          </div>
          <div>
            <h2>Partnerships</h2>
            <p>partners@facelook.com</p>
          </div>
          <div>
            <h2>Press</h2>
            <p>press@facelook.com</p>
          </div>
          <div>
            <h2>Headquarters</h2>
            <address>
              1212 Orchard Street
              <br />
              San Francisco, CA 94016
              <br />
              United States
            </address>
          </div>
        </aside>
      </div>
    </section>
  )
}

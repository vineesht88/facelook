import type { ReactElement } from 'react'


const features = [
  {
    title: 'Creator Studio',
    description: 'Plan, schedule, and publish content with collaborative workflows and detailed analytics.',
    badge: 'New',
  },
  {
    title: 'Community Spaces',
    description: 'Host exclusive rooms, curate discussions, and reward your most engaged members.',
  },
  {
    title: 'Signal Boost',
    description: 'Grow the conversations that matter using AI-assisted moderation and smarter recommendations.',
  },
]

const pricing = [
  {
    tier: 'Starter',
    price: '$0',
    tagline: 'Launch your community with the essentials.',
    perks: ['Up to 3 spaces', 'Basic analytics', 'Standard privacy controls'],
  },
  {
    tier: 'Creator',
    price: '$19',
    tagline: 'For growing creators ready to scale.',
    perks: ['Unlimited spaces', 'Advanced insights', 'Priority support'],
  },
  {
    tier: 'Studio',
    price: "Let's talk",
    tagline: 'Custom tooling for large organizations.',
    perks: ['Dedicated success partner', 'Compliance tooling', 'API integrations'],
  },
]

export default function ProductPage(): ReactElement {
  return (
    <section className="product-page">
      <header className="product-page__intro">
        <h1 className="product-page__title">Powerful tools built for modern creators</h1>
        <p className="product-page__summary">
          Facelook delivers a full stack of creation, collaboration, and community features so you can focus on
          storytelling, not spreadsheets.
        </p>
      </header>

      <div className="product-page__features">
        {features.map((feature) => (
          <article key={feature.title} className="product-page__feature">
            {feature.badge ? <span className="product-page__feature-badge">{feature.badge}</span> : null}
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>

      <div className="product-page__pricing">
        <h2 className="product-page__pricing-title">Choose a plan that grows with you</h2>
        <div className="product-page__plans">
          {pricing.map((plan) => (
            <article key={plan.tier} className="product-page__plan">
              <div className="product-page__plan-header">
                <p className="product-page__plan-tier">{plan.tier}</p>
                <p className="product-page__plan-price">{plan.price}</p>
                <p className="product-page__plan-tagline">{plan.tagline}</p>
              </div>
              <ul>
                {plan.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
              <button type="button" className="product-page__plan-action">
                Choose plan
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { Section, SectionHeading, SectionSub } from '../components/common/Section'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

const products = [
  {
    slug: 'car',
    name: 'Car Insurance',
    icon: '🚗',
    blurb: 'Comprehensive, collision, and liability cover for your vehicle.',
    highlights: ['Instant digital proof', '24/7 roadside assistance', 'Glass & rental car options'],
    tag: 'Most popular',
  },
  {
    slug: 'home',
    name: 'Home Insurance',
    icon: '🏠',
    blurb: 'Protect your home and contents from fire, theft, and damage.',
    highlights: ['Building & contents cover', 'Water and fire protection', 'Valuables and electronics add-ons'],
    tag: 'For homeowners',
  },
  {
    slug: 'life',
    name: 'Life Insurance',
    icon: '❤️',
    blurb: 'Financial protection for your loved ones if the unexpected happens.',
    highlights: ['Flexible coverage amounts', 'Fixed premiums over term', 'Optional critical illness riders'],
    tag: 'Family protection',
  },
  {
    slug: 'marine-cargo',
    name: 'Marine Cargo Insurance',
    icon: '🚢',
    blurb: 'Cover for goods transported by sea, air, or land during transit.',
    highlights: ['Door-to-door transit cover', 'Loss, damage, and theft', 'Single shipment or annual policies'],
    tag: 'For importers & exporters',
  },
]

export default function Products() {
  return (
    <Section>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
        <div>
          <SectionHeading>Insurance products</SectionHeading>
          <SectionSub>
            Choose the right cover for your car, home, family, or imported goods. All policies can be quoted and
            managed online.
          </SectionSub>
        </div>
        <div className="flex gap-2 text-sm text-slate-600 flex-wrap">
          <Badge>Digital first</Badge>
          <Badge>No paperwork</Badge>
          <Badge>Self-service portal</Badge>
        </div>
      </div>

      {/* Grid of products */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <Link
            key={p.slug}
            to={`/products/${p.slug}`}
            className="card hover:shadow-md hover:-translate-y-0.5 transition-transform"
          >
            <div className="card-body flex flex-col h-full">
              {/* Icon + tag */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl" aria-hidden>
                  {p.icon}
                </span>
                {p.tag && (
                  <span className="rounded-full bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand-700">
                    {p.tag}
                  </span>
                )}
              </div>

              {/* Title & blurb */}
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-slate-600 text-sm mt-2">{p.blurb}</p>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600 flex-1">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-0.5 text-brand-600">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-5">
                <Button variant="ghost" full>
                  View details &gt;
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Help strip */}
      <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-800">Not sure which cover you need?</p>
          <p className="text-sm text-slate-600">
            Start with a quick quote or visit our Help Center to see examples and recommendations.
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/" className="btn btn-primary">
            Start quick quote
          </Link>
          <Link to="/help" className="btn">
            Visit Help &amp; FAQ
          </Link>
        </div>
      </div>
    </Section>
  )
}

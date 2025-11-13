import { Link } from 'react-router-dom'
import QuickQuote from '../components/home/QuickQuote'
import { Section, SectionHeading, SectionSub } from '../components/common/Section'
import StarRating from '../components/ui/StarRating'
import Accordion from '../components/ui/Accordion'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

export default function Home() {
  return (
    <div>

      {/* HERO – Ethiopia-focused */}
      <section className="bg-gradient-to-b from-white to-slate-50 border-b">
        <div className="container-prose section grid lg:grid-cols-12 gap-10 items-start">
          {/* Left: headline + featured product + trust */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="h1">
                Insurance in Ethiopia,{' '}
                <span className="text-brand-700">simple & transparent</span>
              </h1>
              <p className="p mt-4 max-w-2xl">
                Calculate your premium, sign policies online, pay with local banks or Telebirr, and manage
                everything from Addis Ababa to the regions – without long queues or paper files.
              </p>
            </div>

            {/* Featured product card: Car Insurance, localized */}
            <div className="card">
              <div className="card-body grid sm:grid-cols-3 gap-4 items-center">
                <div className="sm:col-span-2">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    ተመረጠ እቃ (Featured)
                  </p>
                  <h2 className="text-xl font-semibold flex items-center gap-2 mt-1">
                    Car Insurance
                    <span className="text-2xl" aria-hidden>🚗</span>
                  </h2>
                  <p className="text-sm text-slate-600 mt-1">
                    Third-party and comprehensive cover designed for Ethiopian roads, taxi fleets and private cars.
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-2xl font-semibold text-brand-700">
                      from 1,200 ETB
                    </span>
                    <span className="text-xs text-slate-500">/ month*</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:items-stretch">
                  <Link
                    to="/products/car"
                    className="btn btn-primary w-full text-sm"
                  >
                    Calculate premium
                  </Link>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full text-sm"
                  >
                    Request a call back
                  </Button>
                </div>
              </div>
            </div>

            {/* Trust row */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <span aria-hidden className="text-xl">🇪🇹</span>
                <div>
                  <div className="font-medium">Built for Ethiopia</div>
                  <p className="text-xs text-slate-500">
                    Products tailored for local banks, traffic rules and business realities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span aria-hidden className="text-xl">💬</span>
                <div>
                  <div className="font-medium">Local languages</div>
                  <p className="text-xs text-slate-500">
                    Support in Amharic, English and Afaan Oromo for key processes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span aria-hidden className="text-xl">📱</span>
                <div>
                  <div className="font-medium">Mobile-first</div>
                  <p className="text-xs text-slate-500">
                    Works on smartphones – perfect for customers in Addis and regions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span aria-hidden className="text-xl">🏦</span>
                <div>
                  <div className="font-medium">Local payments</div>
                  <p className="text-xs text-slate-500">
                    Pay via bank transfer, Telebirr, or card. Receipts sent instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Quote Card */}
          <div className="lg:col-span-5">
            <QuickQuote />
          </div>
        </div>
      </section>

      {/* TOP PRODUCTS – adapted to Car, Home, Life, Marine Cargo in Ethiopian context */}
      <Section>
        <SectionHeading>Top insurance products</SectionHeading>
        <SectionSub>
          Whether you are driving in Addis, protecting your home, planning for your family or importing goods
          through Djibouti – start here.
        </SectionSub>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              slug: 'car',
              name: 'Car Insurance',
              icon: '🚗',
              price: 'from 1,200 ETB / month*',
              blurb: 'Third-party and comprehensive cover for private and commercial vehicles.',
              bullets: [
                'Instant digital confirmation',
                'Support for taxi, ride-hailing & private cars',
                'Optional roadside assistance',
              ],
            },
            {
              slug: 'home',
              name: 'Home Insurance',
              icon: '🏠',
              price: 'from 800 ETB / month*',
              blurb: 'Protect your house or apartment in Addis Ababa and beyond.',
              bullets: [
                'Fire, theft and water damage',
                'Covers furniture, electronics & valuables',
                'Landlord or tenant options',
              ],
            },
            {
              slug: 'life',
              name: 'Life Insurance',
              icon: '❤️',
              price: 'from 600 ETB / month*',
              blurb: 'Support your family financially if the unexpected happens.',
              bullets: [
                'Flexible cover amount in ETB',
                'Optional critical illness benefits',
                'Designed for salaried and self-employed',
              ],
            },
            {
              slug: 'marine-cargo',
              name: 'Marine Cargo',
              icon: '🚢',
              price: 'from 1,500 ETB / shipment*',
              blurb: 'Cover goods imported via Djibouti, air cargo or overland transport.',
              bullets: [
                'From port of loading to final warehouse',
                'Loss, damage and theft cover',
                'Ideal for SMEs & diaspora shipments',
              ],
            },
          ].map((p) => (
            <div key={p.slug} className="card hover:shadow-md transition">
              <div className="card-body flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span aria-hidden className="text-2xl">{p.icon}</span>
                    <h3 className="font-semibold text-base">{p.name}</h3>
                  </div>
                  <Badge className="bg-brand/10 text-brand-700 text-[11px]">Online</Badge>
                </div>

                <p className="text-sm text-brand-700 font-semibold">{p.price}</p>
                <p className="text-slate-600 text-sm mt-1">{p.blurb}</p>

                <ul className="mt-3 space-y-1.5 text-xs text-slate-600 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-[2px] text-brand-600">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex gap-2">
                  <Link to={`/products/${p.slug}`} className="btn btn-primary flex-1 text-xs">
                    Learn more
                  </Link>
                  <Link to={`/products/${p.slug}`} className="btn btn-ghost flex-1 text-xs">
                    Calculate now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 mt-3">
          *Illustrative monthly premiums in Ethiopian Birr. Final premiums depend on driver profile, property value,
          shipment details and selected coverage.
        </p>
      </Section>

      {/* WHY CHOOSE US – localized messaging */}
      <Section className="bg-slate-50 border-y">
        <SectionHeading>Why customers in Ethiopia choose Insurely</SectionHeading>
        <SectionSub>
          Digital processes with human support – for individuals, SMEs and diaspora families.
        </SectionSub>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Digital, but human',
              desc: 'Calculate and manage policies online, and talk to a real person when you need help.',
              icon: '👨‍💼',
            },
            {
              title: 'Fits local reality',
              desc: 'Products designed for Ethiopian roads, homes, businesses and shipping routes.',
              icon: '🌍',
            },
            {
              title: 'Fast claims handling',
              desc: 'File claims online, upload documents and track status instead of chasing paper files.',
              icon: '⚡',
            },
            {
              title: 'Secure & compliant',
              desc: 'Data hosted securely with processes aligned to local regulations and best practice.',
              icon: '🔒',
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <div className="card-body">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10">
                  <span aria-hidden>{f.icon}</span>
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-slate-600 mt-2 text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CUSTOMER FEEDBACK – Ethiopian names and context */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <SectionHeading>What our customers say</SectionHeading>
            <SectionSub>
              Feedback from drivers, homeowners, importers and families across Ethiopia.
            </SectionSub>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <StarRating value={4.7} />
            <div>
              <div className="font-medium">4.7 / 5</div>
              <p className="text-xs text-slate-500">&gt; 3,000 ratings from customers in Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Mekdes A.',
              quote: 'I renewed my car insurance from my phone in Bole – no need to visit the branch.',
              date: 'Addis Ababa, 2025',
            },
            {
              name: 'Abebe G.',
              quote: 'Our shipment through Djibouti arrived with damage. The cargo claim was handled clearly.',
              date: 'Hawassa, 2025',
            },
            {
              name: 'Hanna T.',
              quote: 'Life insurance gave us peace of mind. The online portal is easy to understand.',
              date: 'Bahir Dar, 2025',
            },
          ].map((t) => (
            <div key={t.name} className="card">
              <div className="card-body">
                <StarRating value={5} className="mb-2" />
                <p className="text-slate-800 text-sm">“{t.quote}”</p>
                <p className="text-xs text-slate-500 mt-3">
                  — {t.name}, {t.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICE STRIP – portal, claims, help with Ethiopian flavor */}
      <Section className="bg-slate-50 border-y">
        <SectionHeading>Insurely Service</SectionHeading>
        <SectionSub>
          Access your portal, report a claim or get support via phone, WhatsApp or email.
        </SectionSub>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Link to="/dashboard" className="card hover:shadow-md transition">
            <div className="card-body flex items-center justify-between">
              <div>
                <h3 className="font-semibold">My Insurely Portal</h3>
                <p className="text-sm text-slate-600 mt-1">
                  View contracts, download receipts and update your contact details.
                </p>
              </div>
              <span aria-hidden className="text-2xl">🔑</span>
            </div>
          </Link>

          <Link to="/claims/start" className="card hover:shadow-md transition">
            <div className="card-body flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Report a claim</h3>
                <p className="text-sm text-slate-600 mt-1">
                  File a new claim online, attach photos and documents and track progress.
                </p>
              </div>
              <span aria-hidden className="text-2xl">📝</span>
            </div>
          </Link>

          <Link to="/help" className="card hover:shadow-md transition">
            <div className="card-body flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Contact & info</h3>
                <p className="text-sm text-slate-600 mt-1">
                  FAQs, phone numbers and WhatsApp contact for Addis and the regions.
                </p>
              </div>
              <span aria-hidden className="text-2xl">📞</span>
            </div>
          </Link>
        </div>
      </Section>

      {/* ABOUT SECTION – localized metrics */}
      <Section>
        <SectionHeading>About Insurely Ethiopia</SectionHeading>
        <SectionSub>
          A digital-first insurance experience built for Ethiopia, in partnership with established insurers.
        </SectionSub>

        <div className="mt-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Customer satisfaction', value: '91%' },
            { label: 'Average online completion time', value: '3 min' },
            { label: 'Claims support availability', value: '24/7' },
            { label: 'Customers who would recommend us', value: '96%' },
          ].map((m) => (
            <div key={m.label} className="card">
              <div className="card-body">
                <div className="text-2xl font-semibold text-brand-700">{m.value}</div>
                <p className="text-xs text-slate-600 mt-1">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading>Frequently asked questions</SectionHeading>
        <div className="mt-6 max-w-3xl">
          <Accordion
            items={[
              {
                id: 'q1',
                question: 'How do I pay for my insurance in Ethiopia?',
                answer:
                  'You can pay via bank transfer, card payment or mobile money (such as Telebirr) depending on the product. Payment instructions are shown clearly during checkout.',
              },
              {
                id: 'q2',
                question: 'Can I manage everything online or do I need to visit an office?',
                answer:
                  'Most actions – quote, purchase, renewal, downloading documents and claims filing – can be done fully online. For complex cases, our team can support you by phone or in person where needed.',
              },
              {
                id: 'q3',
                question: 'What happens when I have a claim?',
                answer:
                  'You can report a claim through the portal or the claim form, upload photos and documents, and track status in real time. Our Ethiopian claims team will contact you if more details are required.',
              },
            ]}
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand text-white rounded-none">
        <div className="container-prose flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Ready to protect what matters?</h2>
            <p className="mt-2 text-white/80">
              Start a quote in under 2 minutes and finish everything online – wherever you are in Ethiopia.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/products" className="btn bg-white text-brand hover:bg-slate-100">
              Get a quote
            </Link>
            <Button
              variant="ghost"
              className="!border-white !text-white hover:!bg-white/10"
            >
              Talk to support
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

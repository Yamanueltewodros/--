import { useEffect, useMemo, useState } from 'react'
import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import Input from '../components/ui/Input'
import Select from '../components/ui/Select'
import Button from '../components/ui/Button'
import { Card, CardBody } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { cn } from '../lib/cn'

// --- product catalog & pricing model (mock) ---
const PRODUCT_META: Record<
  string,
  {
    title: string
    subtitle: string
    features: string[]
    tiers: { id: 'basic' | 'standard' | 'premium'; name: string; desc: string; factor: number }[]
    deductibles: number[]
    addons: { id: string; name: string; price: number; desc?: string }[]
    base: number
  }
> = {
  auto: {
    title: 'Auto Insurance',
    subtitle: 'Liability, collision & roadside assistance',
    features: ['Instant proof of insurance', 'Worldwide roadside partners', 'Glass coverage options'],
    tiers: [
      { id: 'basic', name: 'Basic', desc: 'Liability only', factor: 1.0 },
      { id: 'standard', name: 'Standard', desc: 'Liability + collision', factor: 1.3 },
      { id: 'premium', name: 'Premium', desc: 'Comprehensive + extras', factor: 1.6 },
    ],
    deductibles: [150, 300, 500, 1000],
    addons: [
      { id: 'roadside', name: 'Roadside assistance', price: 4.5 },
      { id: 'glass', name: 'Glass protection', price: 6.0 },
      { id: 'rental', name: 'Rental car', price: 5.0 },
    ],
    base: 42,
  },
  home: {
    title: 'Home Contents',
    subtitle: 'Protect what’s inside your home',
    features: ['Theft & vandalism', 'Water damage options', 'New-for-old replacement'],
    tiers: [
      { id: 'basic', name: 'Basic', desc: 'Core contents', factor: 1.0 },
      { id: 'standard', name: 'Standard', desc: 'Core + accidental damage', factor: 1.25 },
      { id: 'premium', name: 'Premium', desc: 'All-risk + valuables', factor: 1.5 },
    ],
    deductibles: [100, 250, 500],
    addons: [
      { id: 'bike', name: 'Bicycle cover', price: 3.5 },
      { id: 'electronics', name: 'Electronics boost', price: 4.0 },
      { id: 'flood', name: 'Flood add-on', price: 6.5 },
    ],
    base: 28,
  },
  liability: {
    title: 'Personal Liability',
    subtitle: 'Coverage for everyday accidents',
    features: ['Third-party injury & damage', 'Legal support', 'Worldwide coverage'],
    tiers: [
      { id: 'basic', name: 'Basic', desc: '€1M limit', factor: 1.0 },
      { id: 'standard', name: 'Standard', desc: '€3M limit', factor: 1.2 },
      { id: 'premium', name: 'Premium', desc: '€5M limit', factor: 1.35 },
    ],
    deductibles: [0, 150, 300],
    addons: [
      { id: 'pets', name: 'Pet liability', price: 2.5 },
      { id: 'sports', name: 'Sports extension', price: 1.8 },
    ],
    base: 16,
  },
  pet: {
    title: 'Pet Insurance',
    subtitle: 'Care for furry family members',
    features: ['Vet bills & meds', 'Emergency surgery', 'Tele-vet access'],
    tiers: [
      { id: 'basic', name: 'Basic', desc: 'Accidents', factor: 1.0 },
      { id: 'standard', name: 'Standard', desc: 'Accidents + illness', factor: 1.25 },
      { id: 'premium', name: 'Premium', desc: 'Comprehensive care', factor: 1.5 },
    ],
    deductibles: [0, 100, 250],
    addons: [
      { id: 'dental', name: 'Dental care', price: 3.0 },
      { id: 'wellness', name: 'Wellness visits', price: 4.5 },
    ],
    base: 19,
  },
}

function estimateMonthly(base: number, tierFactor: number, deductible: number, addonsTotal: number) {
  // Simple mock pricing:
  // premium = base * tier - (deductible credit) + addons
  const deductibleCredit = Math.min(deductible / 1000, 1) * 6 // up to €6 off for €1000 deductible
  const monthly = base * tierFactor - deductibleCredit + addonsTotal
  return Math.max(8.9, Math.round(monthly * 100) / 100)
}

export default function ProductDetail() {
  const { slug = 'auto' } = useParams()
  const meta = PRODUCT_META[slug] ?? PRODUCT_META['auto']

  // query params from QuickQuote
  const [searchParams] = useSearchParams()
  const initialZip = searchParams.get('zip') ?? ''
  const initialStart = searchParams.get('start') ?? ''
  const navigate = useNavigate()

  // form state
  const [zip, setZip] = useState(initialZip)
  const [startDate, setStartDate] = useState(initialStart)
  const [tier, setTier] = useState<'basic' | 'standard' | 'premium'>(meta.tiers[1].id) // default standard
  const [deductible, setDeductible] = useState<number>(meta.deductibles[Math.floor(meta.deductibles.length / 2)])
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  useEffect(() => {
    // if slug changes (user navigates), reset to product defaults
    const m = PRODUCT_META[slug ?? 'auto'] ?? PRODUCT_META.auto
    setTier(m.tiers[1].id as any)
    setDeductible(m.deductibles[Math.floor(m.deductibles.length / 2)])
    setSelectedAddons([])
  }, [slug])

  const addonsTotal = useMemo(
    () =>
      selectedAddons.reduce((sum, id) => {
        const a = meta.addons.find(x => x.id === id)
        return sum + (a?.price ?? 0)
      }, 0),
    [selectedAddons, meta.addons],
  )

  const monthly = useMemo(() => {
    const f = meta.tiers.find(t => t.id === tier)?.factor ?? 1
    return estimateMonthly(meta.base, f, deductible, addonsTotal)
  }, [meta, tier, deductible, addonsTotal])

  // simple validation
  const zipValid = zip.trim().length >= 3
  const startValid = !!startDate
  const canContinue = zipValid && startValid

  const toggleAddon = (id: string) =>
    setSelectedAddons(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))

  const onContinue = () => {
    if (!canContinue) return
    // simulate going to checkout or portal
    navigate(`/dashboard`, { replace: false })
  }

  return (
    <div className="container-prose section">
      {/* breadcrumb */}
      <nav className="text-sm text-slate-600 mb-4">
        <a className="nav-link" href="/products">Products</a>
        <span className="mx-2">/</span>
        <span className="capitalize">{slug}</span>
      </nav>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Main content */}
        <div className="lg:col-span-8">
          <header className="mb-2">
            <h1 className="h2 flex items-center gap-3">
              {meta.title}
              <Badge className="bg-brand/10 text-brand-700">Online</Badge>
            </h1>
            <p className="p mt-1">{meta.subtitle}</p>
          </header>

          {/* feature bullets */}
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
            {meta.features.map(f => (
              <li key={f} className="flex items-start gap-2">
                <span className="mt-1 text-brand-700">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* quote form */}
          <Card className="mt-6">
            <CardBody>
              <h3 className="font-semibold text-lg">Customize your cover</h3>
              <p className="text-slate-600 text-sm mt-1">Answer a few details to see your price.</p>

              <div className="mt-5 grid md:grid-cols-2 gap-4">
                {/* ZIP / City */}
                <label className="block">
                  <span className="text-sm">ZIP / City</span>
                  <Input
                    className={cn('mt-1', !zipValid && 'border-red-400')}
                    placeholder="e.g., 10115 Berlin"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                  />
                  {!zipValid && <span className="text-xs text-red-600">Please enter at least 3 characters.</span>}
                </label>

                {/* Start date */}
                <label className="block">
                  <span className="text-sm">Start Date</span>
                  <Input
                    type="date"
                    className={cn('mt-1', !startValid && 'border-red-400')}
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                  />
                  {!startValid && <span className="text-xs text-red-600">Select a start date.</span>}
                </label>
              </div>

              {/* coverage tier */}
              <div className="mt-6">
                <span className="text-sm block mb-2">Coverage tier</span>
                <div className="grid sm:grid-cols-3 gap-3">
                  {meta.tiers.map(t => {
                    const active = tier === t.id
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTier(t.id)}
                        className={cn(
                          'rounded-2xl border p-4 text-left hover:bg-slate-50 transition',
                          active ? 'border-brand bg-brand/5' : 'border-slate-200',
                        )}
                      >
                        <div className="font-semibold">{t.name}</div>
                        <div className="text-sm text-slate-600">{t.desc}</div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* deductible */}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm">Deductible (EUR)</span>
                  <Select
                    className="mt-1"
                    value={String(deductible)}
                    onChange={e => setDeductible(Number(e.target.value))}
                  >
                    {meta.deductibles.map(d => (
                      <option key={d} value={d}>
                        €{d}
                      </option>
                    ))}
                  </Select>
                </label>
              </div>

              {/* add-ons */}
              <div className="mt-6">
                <span className="text-sm block mb-2">Add-ons (optional)</span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {meta.addons.map(a => {
                    const on = selectedAddons.includes(a.id)
                    return (
                      <label
                        key={a.id}
                        className={cn(
                          'rounded-2xl border p-4 hover:bg-slate-50 cursor-pointer',
                          on ? 'border-brand bg-brand/5' : 'border-slate-200',
                        )}
                      >
                        <input
                          type="checkbox"
                          className="mr-2 align-middle"
                          checked={on}
                          onChange={() => toggleAddon(a.id)}
                        />
                        <span className="font-medium">{a.name}</span>
                        <span className="ml-2 text-sm text-slate-600">+€{a.price.toFixed(2)}/mo</span>
                        {a.desc && <div className="text-xs text-slate-500 mt-1">{a.desc}</div>}
                      </label>
                    )
                  })}
                </div>
              </div>
            </CardBody>
          </Card>

          {/* disclosure */}
          <p className="text-xs text-slate-500 mt-4">
            Prices shown are estimates and may change after additional underwriting questions. By continuing, you agree to our Terms and acknowledge our Privacy Policy.
          </p>
        </div>

        {/* Sticky summary */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-20">
            <Card>
              <CardBody>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-slate-600">Your quote</div>
                    <div className="text-2xl font-semibold mt-1">€{monthly.toFixed(2)}<span className="text-base font-normal text-slate-500"> / month</span></div>
                  </div>
                  <Badge className="bg-slate-100">Est.</Badge>
                </div>

                <ul className="mt-5 space-y-2 text-sm">
                  <li className="flex justify-between"><span>Product</span><span className="capitalize">{slug}</span></li>
                  <li className="flex justify-between"><span>Tier</span><span>{meta.tiers.find(t => t.id === tier)?.name}</span></li>
                  <li className="flex justify-between"><span>Deductible</span><span>€{deductible}</span></li>
                  <li className="flex justify-between"><span>Add-ons</span><span>€{addonsTotal.toFixed(2)}/mo</span></li>
                  <li className="flex justify-between"><span>ZIP / City</span><span className="truncate max-w-[160px]" title={zip || '—'}>{zip || '—'}</span></li>
                  <li className="flex justify-between"><span>Start</span><span>{startDate || '—'}</span></li>
                </ul>

                <Button
                  onClick={onContinue}
                  disabled={!canContinue}
                  className="w-full mt-6"
                >
                  {canContinue ? 'Continue' : 'Complete details to continue'}
                </Button>

                <p className="text-xs text-slate-500 mt-3">
                  You can adjust coverage later before purchase.
                </p>
              </CardBody>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  )
}

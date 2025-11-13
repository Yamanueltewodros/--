import { useState } from 'react'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import Button from '../../components/ui/Button'
import { Card, CardBody } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'
import { cn } from '../../lib/cn'

type ClaimType = 'car' | 'home' | 'life' | 'marine-cargo'

const CLAIM_TYPES: { value: ClaimType; label: string }[] = [
  { value: 'car', label: 'Car Insurance' },
  { value: 'home', label: 'Home Insurance' },
  { value: 'life', label: 'Life Insurance' },
  { value: 'marine-cargo', label: 'Marine Cargo Insurance' },
]

export default function ClaimStart() {
  const [type, setType] = useState<ClaimType>('car')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // here you would call your API
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container-prose section">
      <h1 className="h2 mb-1">Report a Claim</h1>
      <p className="p text-slate-600 mb-4">
        Tell us what happened and we’ll guide you through the next steps. The more detail you provide, the faster
        we can help.
      </p>

      {submitted && (
        <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          <span className="font-semibold">Thank you.</span> Your claim has been submitted. A claims specialist will
          contact you shortly using the details you provided.
        </div>
      )}

      <Card className="max-w-3xl">
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Claim type & basic info */}
            <section className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-semibold text-slate-900">1. Claim type & policy details</h2>
                <Badge className="bg-slate-100">Required</Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm">Insurance product</span>
                  <Select
                    className="mt-1"
                    value={type}
                    onChange={(e) => setType(e.target.value as ClaimType)}
                  >
                    {CLAIM_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </Select>
                </label>

                <label className="block">
                  <span className="text-sm">Policy number</span>
                  <Input
                    className="mt-1"
                    placeholder="e.g., POL-2025-00123"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm">Claim date</span>
                  <Input
                    type="date"
                    className="mt-1"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm">Country / City of incident</span>
                  <Input
                    className="mt-1"
                    placeholder="e.g., Addis Ababa, Ethiopia"
                    required
                  />
                </label>
              </div>
            </section>

            {/* Step 2: Incident details – conditional fields by type */}
            <section className="space-y-4">
              <h2 className="font-semibold text-slate-900">2. Incident details</h2>

              {/* Common fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm">Date of incident</span>
                  <Input type="date" className="mt-1" required />
                </label>

                <label className="block">
                  <span className="text-sm">Time of incident</span>
                  <Input type="time" className="mt-1" />
                </label>
              </div>

              {/* Type-specific sections */}
              {type === 'car' && (
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm">Vehicle registration / plate</span>
                    <Input className="mt-1" placeholder="e.g., ABC-12345" />
                  </label>
                  <label className="block">
                    <span className="text-sm">Vehicle make & model</span>
                    <Input className="mt-1" placeholder="e.g., Toyota Corolla 2015" />
                  </label>
                  <label className="block">
                    <span className="text-sm">Damage type</span>
                    <Select className="mt-1">
                      <option>Collision</option>
                      <option>Theft</option>
                      <option>Glass / windscreen</option>
                      <option>Vandalism</option>
                      <option>Other</option>
                    </Select>
                  </label>
                  <label className="block">
                    <span className="text-sm">Was another party involved?</span>
                    <Select className="mt-1">
                      <option>No</option>
                      <option>Yes, another vehicle</option>
                      <option>Yes, pedestrian / cyclist</option>
                      <option>Yes, property</option>
                    </Select>
                  </label>
                </div>
              )}

              {type === 'home' && (
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm">Property address</span>
                    <Input className="mt-1" placeholder="Street, city, postal code" />
                  </label>
                  <label className="block">
                    <span className="text-sm">Property type</span>
                    <Select className="mt-1">
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Commercial unit</option>
                    </Select>
                  </label>
                  <label className="block">
                    <span className="text-sm">Cause of loss</span>
                    <Select className="mt-1">
                      <option>Fire</option>
                      <option>Water / flood</option>
                      <option>Theft / burglary</option>
                      <option>Storm / wind</option>
                      <option>Other</option>
                    </Select>
                  </label>
                  <label className="block">
                    <span className="text-sm">Estimated damage amount (approx.)</span>
                    <Input type="number" className="mt-1" placeholder="e.g., 5000" />
                  </label>
                </div>
              )}

              {type === 'life' && (
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm">Insured person full name</span>
                    <Input className="mt-1" placeholder="Full name" />
                  </label>
                  <label className="block">
                    <span className="text-sm">Your relationship to insured</span>
                    <Select className="mt-1">
                      <option>Self</option>
                      <option>Spouse / partner</option>
                      <option>Child</option>
                      <option>Parent</option>
                      <option>Other</option>
                    </Select>
                  </label>
                  <label className="block">
                    <span className="text-sm">Type of event</span>
                    <Select className="mt-1">
                      <option>Death</option>
                      <option>Critical illness</option>
                      <option>Disability</option>
                    </Select>
                  </label>
                  <label className="block">
                    <span className="text-sm">Date of event</span>
                    <Input type="date" className="mt-1" />
                  </label>
                </div>
              )}

              {type === 'marine-cargo' && (
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm">Shipment reference / BL / AWB</span>
                    <Input className="mt-1" placeholder="Bill of Lading / Air Waybill number" />
                  </label>
                  <label className="block">
                    <span className="text-sm">Mode of transport</span>
                    <Select className="mt-1">
                      <option>Sea</option>
                      <option>Air</option>
                      <option>Land / Truck</option>
                      <option>Multimodal</option>
                    </Select>
                  </label>
                  <label className="block">
                    <span className="text-sm">Port / place of loading</span>
                    <Input className="mt-1" placeholder="e.g., Shanghai, CN" />
                  </label>
                  <label className="block">
                    <span className="text-sm">Port / place of discharge</span>
                    <Input className="mt-1" placeholder="e.g., Djibouti, DJ" />
                  </label>
                  <label className="block">
                    <span className="text-sm">Nature of loss</span>
                    <Select className="mt-1">
                      <option>Shortage</option>
                      <option>Damage</option>
                      <option>Theft / pilferage</option>
                      <option>Total loss</option>
                      <option>Other</option>
                    </Select>
                  </label>
                  <label className="block">
                    <span className="text-sm">Estimated loss value (approx.)</span>
                    <Input type="number" className="mt-1" placeholder="e.g., 15000" />
                  </label>
                </div>
              )}

              {/* Common description */}
              <label className="block">
                <span className="text-sm">Detailed description</span>
                <textarea
                  className={cn(
                    'mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none',
                    'focus:border-brand focus:ring-2 focus:ring-brand/20'
                  )}
                  rows={5}
                  placeholder="Describe what happened in detail, including who was involved, how the damage occurred, and any immediate actions taken."
                  required
                />
              </label>

              {/* Optional attachments info (placeholder) */}
              <label className="block">
                <span className="text-sm">Attachments (optional)</span>
                <p className="text-xs text-slate-500 mb-1">
                  You will be able to upload photos, invoices, and reports after submitting this form.
                </p>
                <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3 py-2 text-xs text-slate-500">
                  No files uploaded yet · Uploads are handled on the next step.
                </div>
              </label>
            </section>

            {/* Step 3: Contact details */}
            <section className="space-y-4">
              <h2 className="font-semibold text-slate-900">3. Contact details</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm">Full name</span>
                  <Input className="mt-1" placeholder="Your full name" required />
                </label>
                <label className="block">
                  <span className="text-sm">Email address</span>
                  <Input type="email" className="mt-1" placeholder="you@example.com" required />
                </label>
                <label className="block">
                  <span className="text-sm">Phone number</span>
                  <Input className="mt-1" placeholder="+251 ..." required />
                </label>
                <label className="block">
                  <span className="text-sm">Preferred contact method</span>
                  <Select className="mt-1">
                    <option>Email</option>
                    <option>Phone</option>
                    <option>WhatsApp</option>
                  </Select>
                </label>
              </div>
            </section>

            {/* Submit */}
            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="text-xs text-slate-500">
                By submitting, you confirm that the information provided is accurate to the best of your knowledge.
              </p>
              <Button variant="primary" type="submit">
                Submit claim
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

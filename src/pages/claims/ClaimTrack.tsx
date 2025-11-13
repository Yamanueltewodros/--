import { useState } from 'react'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import Button from '../../components/ui/Button'
import { Card, CardBody } from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'

type ClaimType = 'car' | 'home' | 'life' | 'marine-cargo'

export default function ClaimTrack() {
  const [type, setType] = useState<ClaimType>('car')
  const [found, setFound] = useState(false)

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    // here you’d call your backend; we just mock a “found” result
    setFound(true)
  }

  return (
    <div className="container-prose section space-y-6">
      <div>
        <h1 className="h2 mb-1">Track Claim</h1>
        <p className="p text-slate-600">
          Check the status of an existing claim by entering a few details. For privacy, we ask for both the claim
          number and a personal reference.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Form */}
        <div className="lg:col-span-7">
          <Card className="max-w-xl">
            <CardBody>
              <form className="space-y-5" onSubmit={handleCheck}>
                <section className="space-y-3">
                  <h2 className="font-semibold text-slate-900 text-sm">Claim reference</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm">Insurance product</span>
                      <Select
                        className="mt-1"
                        value={type}
                        onChange={(e) => setType(e.target.value as ClaimType)}
                      >
                        <option value="car">Car Insurance</option>
                        <option value="home">Home Insurance</option>
                        <option value="life">Life Insurance</option>
                        <option value="marine-cargo">Marine Cargo Insurance</option>
                      </Select>
                    </label>
                    <label className="block">
                      <span className="text-sm">Claim number</span>
                      <Input
                        className="mt-1"
                        placeholder="e.g., CLM-2025-0001"
                        required
                      />
                    </label>
                  </div>
                </section>

                <section className="space-y-3">
                  <h2 className="font-semibold text-slate-900 text-sm">Identity check</h2>
                  <p className="text-xs text-slate-500">
                    We use your personal details to ensure that only authorized persons can see claim information.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm">Policyholder last name</span>
                      <Input className="mt-1" placeholder="e.g., Hailemariam" required />
                    </label>
                    <label className="block">
                      <span className="text-sm">Date of birth (policyholder)</span>
                      <Input type="date" className="mt-1" required />
                    </label>

                    {/* Optional alternative reference */}
                    <label className="block md:col-span-2">
                      <span className="text-sm">
                        Alternative reference (optional)
                      </span>
                      <Input
                        className="mt-1"
                        placeholder={
                          type === 'car'
                            ? 'e.g., vehicle plate number'
                            : type === 'marine-cargo'
                            ? 'e.g., shipment reference / BL'
                            : 'Policy number or ID number'
                        }
                      />
                    </label>
                  </div>
                </section>

                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-xs text-slate-500">
                    We’ll show status, latest updates, and contact channels for your claim.
                  </p>
                  <Button variant="primary" type="submit" full={false}>
                    Check status
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>

        {/* Result / status panel */}
        <div className="lg:col-span-5">
          <Card className="lg:sticky lg:top-24">
            <CardBody>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-slate-900 text-sm">Claim status</h2>
                <Badge className="bg-slate-100">Read-only</Badge>
              </div>

              {!found ? (
                <p className="text-sm text-slate-600">
                  Enter your claim details on the left to see the latest status, expected processing time, and your
                  assigned claims handler.
                </p>
              ) : (
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Status</span>
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
                      In review
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Last update</span>
                    <span>2025-11-10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Product</span>
                    <span className="capitalize">
                      {type === 'marine-cargo' ? 'Marine Cargo' : type}
                    </span>
                  </div>

                  <div className="mt-3">
                    <p className="text-slate-700 font-medium mb-1">Next steps</p>
                    <ul className="list-disc ml-5 text-slate-600 space-y-1">
                      <li>Our team is reviewing your documentation.</li>
                      <li>You may be contacted for additional information if needed.</li>
                      <li>We aim to provide a decision within 5–7 working days.</li>
                    </ul>
                  </div>

                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <p className="text-slate-700 font-medium mb-1">Need help?</p>
                    <p className="text-xs text-slate-500">
                      Contact our claims team using the phone or email listed in your confirmation email, or visit
                      the Help Center for more details.
                    </p>
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

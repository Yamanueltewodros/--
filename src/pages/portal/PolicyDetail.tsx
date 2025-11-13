import { useParams } from 'react-router-dom'

export default function PolicyDetail() {
  const { policyId } = useParams()
  return (
    <div className="space-y-4">
      <h1 className="h2">Policy {policyId}</h1>
      <div className="card"><div className="card-body">
        <div className="grid md:grid-cols-2 gap-4">
          <div><div className="font-semibold">Coverage</div><p className="text-slate-600">Liability + Collision</p></div>
          <div><div className="font-semibold">Status</div><p className="text-slate-600">Active</p></div>
          <div><div className="font-semibold">Premium</div><p className="text-slate-600">€58.90 / month</p></div>
          <div><div className="font-semibold">Next Payment</div><p className="text-slate-600">Dec 5</p></div>
        </div>
        <div className="mt-6 flex gap-3">
          <button className="btn btn-primary">Download Documents</button>
          <button className="btn">Change Address</button>
          <button className="btn">Update Bank Details</button>
        </div>
      </div></div>
    </div>
  )
}

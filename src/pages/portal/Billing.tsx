export default function Billing() {
  return (
    <div className="space-y-4">
      <h1 className="h2">Billing</h1>
      <div className="card"><div className="card-body space-y-4">
        <div>
          <div className="font-semibold">Payment Method</div>
          <p className="text-slate-600">Visa •••• 4242 · Exp 12/27</p>
        </div>
        <button className="btn">Change Payment Method</button>
        <div>
          <div className="font-semibold mt-4">History</div>
          <ul className="list-disc ml-6 text-slate-600">
            <li>2025-11-05 · €58.90 · Paid</li>
            <li>2025-10-05 · €58.90 · Paid</li>
          </ul>
        </div>
      </div></div>
    </div>
  )
}

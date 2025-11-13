export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <h1 className="h2">Admin Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card"><div className="card-body"><div className="font-semibold">Quotes Today</div><div className="text-3xl mt-2">42</div></div></div>
        <div className="card"><div className="card-body"><div className="font-semibold">New Policies</div><div className="text-3xl mt-2">11</div></div></div>
        <div className="card"><div className="card-body"><div className="font-semibold">Open Claims</div><div className="text-3xl mt-2">7</div></div></div>
      </div>
    </div>
  )
}

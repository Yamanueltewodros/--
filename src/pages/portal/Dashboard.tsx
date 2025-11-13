export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="h2">Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card"><div className="card-body"><div className="font-semibold">Active Policies</div><div className="text-3xl mt-2">3</div></div></div>
        <div className="card"><div className="card-body"><div className="font-semibold">Open Claims</div><div className="text-3xl mt-2">1</div></div></div>
        <div className="card"><div className="card-body"><div className="font-semibold">Next Payment</div><div className="text-3xl mt-2">Dec 5</div></div></div>
      </div>
    </div>
  )
}

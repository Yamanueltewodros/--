export default function Policies() {
  const items = [
    { id: 'POL-001', name: 'Auto Insurance', status: 'Active' },
    { id: 'POL-002', name: 'Home Contents', status: 'Active' },
    { id: 'POL-003', name: 'Personal Liability', status: 'Active' }
  ];
  return (
    <div className="space-y-4">
      <h1 className="h2">Policies</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(p => (
          <a key={p.id} href={`/policies/${p.id}`} className="card">
            <div className="card-body">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-slate-600 mt-1">{p.id} · {p.status}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Documents() {
  const docs = [
    { name: 'Policy POL-001.pdf', date: '2025-10-01' },
    { name: 'Invoice 2025-11.pdf', date: '2025-11-01' }
  ];
  return (
    <div className="space-y-4">
      <h1 className="h2">Documents</h1>
      <div className="card"><div className="card-body">
        <ul className="divide-y">
          {docs.map(d => (
            <li key={d.name} className="py-3 flex items-center justify-between">
              <span>{d.name}</span>
              <span className="text-sm text-slate-600">{d.date}</span>
            </li>
          ))}
        </ul>
      </div></div>
    </div>
  )
}

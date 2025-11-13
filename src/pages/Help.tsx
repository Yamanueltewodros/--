export default function Help() {
  const tiles = [
    { href: '/help/login', title: 'Login Help' },
    { href: '/claims/start', title: 'Report a Claim' },
    { href: '/help/documents', title: 'Documents' },
    { href: '/help/changes', title: 'Contract Changes' }
  ];
  return (
    <div className="container-prose section">
      <h1 className="h2 mb-6">Help & Contact</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map(t => (
          <a key={t.href} href={t.href} className="card">
            <div className="card-body">
              <div className="text-lg font-semibold">{t.title}</div>
              <p className="text-slate-600 mt-2">Find answers and start common tasks.</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

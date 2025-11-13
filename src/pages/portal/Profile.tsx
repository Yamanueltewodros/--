export default function Profile() {
  return (
    <div className="space-y-4">
      <h1 className="h2">Profile & Security</h1>
      <form className="card max-w-2xl">
        <div className="card-body grid md:grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm">Full Name</span>
            <input className="mt-1 w-full rounded-lg border px-3 py-2" defaultValue="Ermias Hailemariam" />
          </label>
          <label className="block">
            <span className="text-sm">Email</span>
            <input className="mt-1 w-full rounded-lg border px-3 py-2" defaultValue="user@example.com" />
          </label>
          <label className="block md:col-span-2">
            <span className="text-sm">Address</span>
            <input className="mt-1 w-full rounded-lg border px-3 py-2" defaultValue="Street 1, City" />
          </label>
          <button className="btn btn-primary md:col-span-2" type="button">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

import { Outlet, NavLink } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="min-h-[70vh] grid grid-cols-12">
      <aside className="col-span-12 md:col-span-3 lg:col-span-2 border-r bg-white">
        <div className="p-4 font-bold text-xl">Admin</div>
        <nav className="flex flex-col gap-1 p-4">
          <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
          <NavLink className="nav-link" to="/admin/content/help">Help CMS</NavLink>
          <NavLink className="nav-link" to="/admin/content/forms">Forms</NavLink>
        </nav>
      </aside>
      <main className="col-span-12 md:col-span-9 lg:col-span-10 p-6">
        <Outlet />
      </main>
    </div>
  )
}

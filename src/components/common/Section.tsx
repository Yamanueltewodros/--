import { cn } from '../../lib/cn'

export function Section({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('section', className)}><div className="container-prose">{children}</div></section>
}
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="h2">{children}</h2>
}
export function SectionSub({ children }: { children: React.ReactNode }) {
  return <p className="p text-slate-600 mt-2">{children}</p>
}

import { cn } from '../../lib/cn'

export default function StarRating({ value = 5, className }: { value?: number; className?: string }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return 'full'
    if (i === full && half) return 'half'
    return 'empty'
  })
  return (
    <div className={cn('flex items-center', className)}>
      {stars.map((t, i) => (
        <span key={i} className={cn('text-yellow-500', t === 'empty' && 'text-slate-300')}>
          {t === 'half' ? '★' : '★'}
        </span>
      ))}
    </div>
  )
}

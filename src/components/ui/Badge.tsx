import { cn } from '../../lib/cn';

export default function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700', className)}>
      {children}
    </span>
  );
}

import { cn } from '../../lib/cn';

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('card', className)}>{children}</div>;
}
export function CardBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('card-body', className)}>{children}</div>;
}

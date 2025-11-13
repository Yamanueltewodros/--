import { forwardRef, SelectHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Props = SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn(
        'w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none',
        'focus:border-brand focus:ring-2 focus:ring-brand/20',
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = 'Select';
export default Select;

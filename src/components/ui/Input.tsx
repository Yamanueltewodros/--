import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none',
        'placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20',
        className
      )}
      {...props}
    />
  );
});
Input.displayName = 'Input';
export default Input;

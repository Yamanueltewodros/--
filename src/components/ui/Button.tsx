import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/cn';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
  full?: boolean;
};

const Button = forwardRef<HTMLButtonElement, Props>(({ className, variant='primary', full, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn('btn', variant === 'primary' ? 'btn-primary' : 'btn-ghost', full && 'w-full', className)}
      {...props}
    />
  );
});
Button.displayName = 'Button';
export default Button;

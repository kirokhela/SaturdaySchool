'use client';

import Link from 'next/link';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'danger';
  href?: string;
};

export default function Button({ variant = 'primary', href, className = '', children, ...props }: ButtonProps) {
  const base = 'btn';
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'danger' ? 'btn-danger' : 'btn-ghost';

  if (href) {
    return (
      <Link href={href as string} className={`${base} ${variantClass} ${className}`} {...(props as any)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

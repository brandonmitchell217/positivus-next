import React from 'react'

export default function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={`relative container ${className}`}>{children}</div>
}

import React from 'react'

interface Props {
  children: string
  href?: string
  className?: string
  onClick?: (e) => void | any
}

export default function Button({ children, href, className, onClick }: Props) {
  return (
    <a
      href={!onClick ? href : undefined}
      onClick={onClick}
      className={`border border-dark bg-dark text-white py-5 px-8 rounded-xl.5 text-center hover:bg-white hover:text-dark transition-colors duration-300 ease-in-out ${className}`}
    >
      {children}
    </a>
  )
}

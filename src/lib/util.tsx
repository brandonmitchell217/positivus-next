import { Facebook, Linkedin, Twitter } from 'lucide-react'
import { ReactNode } from 'react'

export const navLinks: { name: string; path: string }[] = [
  {
    name: 'About us',
    path: '/about',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Use Cases',
    path: '/use-cases',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Request a Quote',
    path: '/quote-request',
  },
]

export const socialLinks: { icon: ReactNode; label: string; url: string }[] = [
  {
    icon: <Linkedin size={24} />,
    label: 'LinkedIn',
    url: 'https://www.linkedin.com',
  },
  {
    icon: <Facebook size={24} />,
    label: 'Facebook',
    url: 'https://www.facebook.com',
  },
  {
    icon: <Twitter size={24} />,
    label: 'Twitter',
    url: 'https://www.twitter.com',
  },
]

export function sendForm(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  alert('Form would typically submit! 🎉')
}

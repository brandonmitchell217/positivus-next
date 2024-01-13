export interface ContactInfoProps {
  label: string
  phone: {
    label: string
    number: string
  }
  email: {
    label: string
    email: string
  }
  address: {
    label: string
    street: string
    city: string
    state: string
    zip: string
  }
}

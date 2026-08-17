import { ContactInfo } from '@/content/types'

export const contact = {
  socialNetworks: [
    {
      href: '',
      name: 'Instagram',
    },
    {
      href: '',
      name: 'Telegram',
    },
  ],
  contacts: [
    {
      href: 'mailto:hello@gromova.photo',
      name: 'hello@gromova.photo',
    },
    {
      href: 'tel:+70000000000',
      name: '+7 000 000-00-00',
    },
  ],
} as const satisfies ContactInfo

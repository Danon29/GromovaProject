import { ContactInfo } from '@/content/types'

export const contact = {
  socialNetworks: [
    {
      href: 'https://instagram.com/_vyalenaya_vobla_',
      name: 'Instagram',
    },
    {
      href: 'https://t.me/v_vobla',
      name: 'Telegram',
    },
  ],
  contacts: [
    {
      href: 'mailto:masha.gromova@icloud.com',
      name: 'masha.gromova@icloud.com',
    },
    {
      href: 'tel:+79107411495',
      name: '+7 910 741-14-95',
    },
  ],
} as const satisfies ContactInfo

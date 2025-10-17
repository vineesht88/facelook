import Icon from '@mdi/react'
import { mdiWhatsapp } from '@mdi/js'

const WHATSAPP_PHONE = '+971564406045'

export default function WhatsAppChatButton() {
  const chatHref = `https://wa.me/${WHATSAPP_PHONE}`

  return (
    <a
      href={chatHref}
      className="whatsapp-chat"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <Icon path={mdiWhatsapp} size={1.2} className="whatsapp-chat__icon" aria-hidden="true" />
      
    </a>
  )
}

import { useMutation } from '@tanstack/react-query'
import { ContactService, ContactFormData } from '@/services/supabase/contact.service'
import { logger } from '@/shared/utils/logger'

export const useContact = () => {
  return useMutation({
    mutationKey: ['contact'],
    mutationFn: (data: ContactFormData) => ContactService.sendContactMessage(data),
    onSuccess: () => {
      logger.info('Contact message sent successfully')
    },
    onError: (error) => {
      logger.error('Failed to send contact message', error)
    },
  })
}
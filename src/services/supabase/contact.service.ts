import { supabase } from '@/integrations/supabase/client'
import { logger } from '@/shared/utils/logger'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export class ContactService {
  static async sendContactMessage(data: ContactFormData): Promise<void> {
    if (data.message.length > 1000) {
      throw new Error('Message too long')
    }

    const { error } = await supabase
      .from('contacts')
      .insert([data])

    if (error) {
      logger.error('Failed to send contact message', error)
      throw new Error('Failed to send message')
    }
  }
}
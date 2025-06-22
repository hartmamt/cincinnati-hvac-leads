import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type definitions for our database
export interface Lead {
  id: string
  created_at: string
  company_name: string
  contact_name: string
  phone: string
  email?: string
  building_type: 'office' | 'warehouse' | 'retail' | 'restaurant' | 'medical' | 'manufacturing' | 'other'
  building_size: 'under_5000' | '5000_15000' | '15000_50000' | 'over_50000'
  service_type: 'maintenance' | 'repair' | 'installation' | 'emergency'
  timeline: 'asap' | 'within_week' | 'within_month' | 'planning_ahead'
  preferred_contact: 'phone' | 'email' | 'text'
  additional_details?: string
  status: 'new' | 'contacted' | 'qualified' | 'quoted' | 'closed_won' | 'closed_lost'
  assigned_partner_id?: string
  source: string
  ip_address?: string
  user_agent?: string
}

export interface Partner {
  id: string
  created_at: string
  company_name: string
  contact_name: string
  phone: string
  email: string
  website?: string
  license_number?: string
  insurance_verified: boolean
  service_areas: string[]
  specialties: string[]
  status: 'prospect' | 'active' | 'inactive' | 'suspended'
  commission_rate: number
  leads_received: number
  leads_closed: number
  average_response_time?: string
  customer_rating?: number
  accepts_emergency: boolean
  max_leads_per_month: number
  preferred_contact_method: 'email' | 'phone' | 'text'
}

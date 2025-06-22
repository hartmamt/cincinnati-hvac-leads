-- Cincinnati HVAC Lead Generation Database Schema
-- Run this in Supabase SQL Editor

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-secret-here';

-- Create leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Contact Information
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  
  -- Project Details
  building_type TEXT NOT NULL CHECK (building_type IN ('office', 'warehouse', 'retail', 'restaurant', 'medical', 'manufacturing', 'other')),
  building_size TEXT NOT NULL CHECK (building_size IN ('under_5000', '5000_15000', '15000_50000', 'over_50000')),
  service_type TEXT NOT NULL CHECK (service_type IN ('maintenance', 'repair', 'installation', 'emergency')),
  timeline TEXT NOT NULL CHECK (timeline IN ('asap', 'within_week', 'within_month', 'planning_ahead')),
  
  -- Preferences
  preferred_contact TEXT NOT NULL CHECK (preferred_contact IN ('phone', 'email', 'text')),
  additional_details TEXT,
  
  -- Lead Status
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'quoted', 'closed_won', 'closed_lost')),
  assigned_partner_id UUID REFERENCES partners(id),
  
  -- Metadata
  source TEXT DEFAULT 'website',
  ip_address INET,
  user_agent TEXT
);

-- Create partners table
CREATE TABLE partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  
  -- Company Information
  company_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  
  -- Business Details
  license_number TEXT,
  insurance_verified BOOLEAN DEFAULT false,
  service_areas TEXT[] DEFAULT '{}',
  specialties TEXT[] DEFAULT '{}',
  
  -- Partnership Status
  status TEXT DEFAULT 'prospect' CHECK (status IN ('prospect', 'active', 'inactive', 'suspended')),
  commission_rate DECIMAL(5,2) DEFAULT 25.00,
  
  -- Performance Tracking
  leads_received INTEGER DEFAULT 0,
  leads_closed INTEGER DEFAULT 0,
  average_response_time INTERVAL,
  customer_rating DECIMAL(3,2),
  
  -- Contact Preferences
  accepts_emergency BOOLEAN DEFAULT true,
  max_leads_per_month INTEGER DEFAULT 10,
  preferred_contact_method TEXT DEFAULT 'email' CHECK (preferred_contact_method IN ('email', 'phone', 'text'))
);

-- Create indexes for performance
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_service_type ON leads(service_type);
CREATE INDEX idx_partners_status ON partners(status);
CREATE INDEX idx_partners_service_areas ON partners USING GIN(service_areas);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;

-- Create policies (allow all operations for now - we'll refine later)
CREATE POLICY "Allow all operations on leads" ON leads FOR ALL USING (true);
CREATE POLICY "Allow all operations on partners" ON partners FOR ALL USING (true);

-- Insert a test partner
INSERT INTO partners (
  company_name, 
  contact_name, 
  phone, 
  email, 
  service_areas, 
  specialties,
  status
) VALUES (
  'Cincinnati Commercial HVAC Pro',
  'John Smith',
  '(513) 555-0123',
  'john@cincyhvacpro.com',
  ARRAY['Cincinnati', 'Northern Kentucky', 'Hamilton County'],
  ARRAY['Commercial Maintenance', 'Emergency Repair', 'System Installation'],
  'active'
);

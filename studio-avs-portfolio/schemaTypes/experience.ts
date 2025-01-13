import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
    name: 'jobTitle',
    title: 'JobTitle',
    type: 'string',

  },
  {
    name: 'company',
    title: 'Company',
    type: 'string',

  },
  {
    name: 'companyImage',
    title: 'CompanyImage',
    type: 'image', 
    options: {
      hotspot: true,
    },

  },
 
  {
    name: 'dateStart',
    title: 'DateStart',
    type: 'date',
  },
  {
    name: 'dateEnded',
    title: 'DateEnded',
    type: 'date',
    
  },
  {
    name: 'isCurrentlyWorkingHere',
    title: 'IsCurrentlyWorkingHere',
    type: 'boolean',

  },
  {
    name: 'technologies',
    title: 'Technologies',
    type: 'array',
    of: [{ type: 'reference', to: { type: 'skill' } }],

  },
  {
    name: 'points',
    title: 'Points',
    type: 'array',
    of: [{ type: 'string' }],

  },

  ]
})

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

import { SanityImageSource } from '@sanity/image-url/lib/types/types'


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  
})




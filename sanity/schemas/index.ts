import blogPost from './blogPost'

import { objectTypes } from './objects'
import { sharedDocumentTypes } from './documents/shared'
import { pageDocumentTypes } from './documents/pages'

export const schemaTypes = [
  // Object types (used inline by documents)
  ...objectTypes,

  // Shared singleton documents
  ...sharedDocumentTypes,

  // Page singleton documents
  ...pageDocumentTypes,

  // Content list document types (non-singleton)
  blogPost,
]

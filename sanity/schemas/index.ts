import testimonial from './testimonial'
import caseStudy from './caseStudy'
import lesson from './lesson'
import course from './course'
import courseLesson from './courseLesson'
import stage from './stage'
import program from './program'
import standaloneModule from './standaloneModule'
import ikiGuy from './ikiGuy'
import podcastEpisode from './podcastEpisode'
import blogPost from './blogPost'
import module from './module'
import curriculumWeek from './curriculumWeek'

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
  testimonial,
  caseStudy,
  lesson,
  course,
  courseLesson,
  stage,
  program,
  standaloneModule,
  ikiGuy,
  podcastEpisode,
  blogPost,
  module,
  curriculumWeek,
]

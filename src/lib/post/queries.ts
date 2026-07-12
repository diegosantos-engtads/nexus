import { postRepository } from '@/repositories/post'
import { cache } from 'react'

export const findAllPublicPostsCached = cache(async () => {
  return postRepository.findAllPublic()
})

export const findPostBySlugCached = cache((slug: string) => {
  return postRepository.findBySlug(slug)
})

export const findPostByIdCached = cache((id: string) => {
  return postRepository.findById(id)
})

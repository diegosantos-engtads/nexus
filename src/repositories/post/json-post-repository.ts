import type { PostModel } from '@/models/post/post-model'
import { readFile } from 'fs/promises'
import { resolve } from 'path'
import type { PostRepository } from './post-repository'

const SIMULATE_WAIT_IN_MS = 500

const ROOT_DIR = process.cwd()
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
)

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf8')
    const parsedJson = JSON.parse(jsonContent)
    const { posts } = parsedJson
    return posts
  }
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return
    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS))
  }
  async findAllPublic(): Promise<PostModel[]> {
    await this.simulateWait()
    const posts = await this.readFromDisk()
    console.log('findAllPuclic')
    return posts.filter(posts => posts.published)
  }
  async findById(id: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic()
    return posts.find(post => post.id === id) ?? null
  }
  async findBySlug(slug: string): Promise<PostModel | null> {
    const posts = await this.findAllPublic()
    return posts.find(post => post.slug === slug) ?? null
  }
}

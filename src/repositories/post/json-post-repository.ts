import type { PostModel } from '@/models/post/post-model'
import { readFile } from 'fs/promises'
import { resolve } from 'path'
import { PostRepository } from './post-repository'

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
  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk()
    return posts
  }
  async findById(id: string): Promise<PostModel> {
    const posts = await this.findAll()
    const post = posts.find(post => post.id === id)
    if (!post) throw new Error('Post ID Não Encontrado')
    return post
  }
}

export const postRepository = new JsonPostRepository()

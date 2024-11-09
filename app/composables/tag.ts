export type Tag = {
  key: string
  label: string
}

export const tags: Tag[] = [
  { key: 'javascript', label: 'JavaScript' },
  { key: 'vue', label: 'Vue.js' },
  { key: 'react', label: 'React' },
  { key: 'markdown', label: 'Markdown' },
  { key: 'openai', label: 'OpenAI' },
  { key: 'nuxt', label: 'Nuxt.js' },
  { key: '振り返り', label: '振り返り' },
  { key: '2023', label: '2023年' },
  { key: '2024', label: '2024年' },
  { key: 'html', label: 'HTML' },
  { key: 'css', label: 'CSS' },
  { key: 'github', label: 'GitHub' },
  { key: 'vscode', label: 'VSCode' },
  { key: 'eslint', label: 'ESLint' },
  { key: 'prettier', label: 'Prettier' },
]

export const getTag = (key?: string): Tag | undefined => tags.find(tag => tag.key === key)
export const tagLabel = (tag?: Tag | null) => tag ? tag.label : ''

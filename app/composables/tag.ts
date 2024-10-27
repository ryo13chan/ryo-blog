export type Tag = {
  key: string
  label: string
}

export const tags: Tag[] = [
  { key: 'javascript', label: 'JavaScript' },
  { key: 'vue', label: 'Vue.js' },
  { key: 'react', label: 'React' },
]

export const getTag = (key: string): Tag | undefined => tags.find(tag => tag.key === key)

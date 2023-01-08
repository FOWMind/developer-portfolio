interface WorkLink {
  repository?: string
  demo?: string
}

interface WorkImage {
  preview: string
}

export interface Work {
  id: string
  title: string
  links: WorkLink
  technologies: string[]
  images: WorkImage
}

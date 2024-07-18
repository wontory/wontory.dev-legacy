interface Post {
  author: {
    username: string
    profilePicture: string
    socialMediaLinks: {
      github: string
      linkedin: string
      website: string
    }
  }
  content: {
    markdown: string
  }
  coverImage: { url: string }
  id: string
  publishedAt: string
  slug: string
  subtitle: string
  title: string
  seo: {
    title: string
    description: string
  }
  ogMetaData: {
    image: string
  }
}

export type { Post }

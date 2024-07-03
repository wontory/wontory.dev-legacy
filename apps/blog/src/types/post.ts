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
    html: string
  }
  coverImage: { url: string }
  id: string
  publishedAt: string
  slug: string
  subtitle: string
  title: string
}

export type { Post }

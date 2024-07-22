import type { Query } from '~/types/query'
import type { Post } from '~/types/post'

export const queryInstance = async ({ query, variables, tags }: Query) => {
  const data = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      tags,
    },
  }).then((result) => result.json())

  return data
}

const getAllPosts = async (page: number): Promise<Post[]> => {
  const {
    data: { publication },
  } = await queryInstance({
    query: `
      query ($host: String!, $page: Int!) {
        publication(host: $host) {
          postsViaPage(pageSize: 10, page: $page) {
            nodes {
              author {
                username
                profilePicture
              }
              coverImage {
                url
              }
              id
              publishedAt
              slug
              subtitle
              title
            }
          }
        }
      }
    `,
    variables: {
      host: 'wontory.hashnode.dev',
      page,
    },
  })

  return publication.postsViaPage.nodes.map((node: Post) => node)
}

const getPost = async (slug: string): Promise<Post> => {
  const {
    data: { publication },
  } = await queryInstance({
    query: `
      query($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            author {
              username
              profilePicture
              socialMediaLinks {
                github
                linkedin
                website
              }
            }
            content {
              markdown
            }
            coverImage {
              url
            }
            id
            publishedAt
            subtitle
            title
            seo {
              title
              description
            }
            ogMetaData {
              image
            }
          }
        }
      }
    `,
    variables: {
      host: 'wontory.hashnode.dev',
      slug,
    },
  })

  return publication.post
}

export { getAllPosts, getPost }

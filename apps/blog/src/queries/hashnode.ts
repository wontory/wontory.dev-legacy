import type { Query } from '~/types/query'
import type { Post } from '~/types/post'

export const queryInstance = async ({ query, variables, tags }: Query) => {
  const data = await fetch('https://gql.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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

const getAllPosts = async (): Promise<Post[]> => {
  const {
    data: { publication },
  } = await queryInstance({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
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
      }
    `,
    variables: {
      host: 'wontory.hashnode.dev',
    },
  })

  return publication.posts.edges.map(({ node }: { node: Post }) => node)
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
              html
            }
            coverImage {
              url
            }
            id
            publishedAt
            subtitle
            title
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

import type { Post } from '~/types/post'

interface Query {
  query: string
  variables?: object
  tags?: Array<string>
}

export const query = async ({ query, variables, tags }: Query) => {
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
  } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 10) {
            edges {
              node {
                title
                brief
                slug
                id
                coverImage {
                  url
                }
                publishedAt
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

export { getAllPosts }

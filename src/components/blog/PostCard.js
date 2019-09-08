import React from 'react'

import { H3, P } from '../../components/text'
import { Link } from '../../components/navigation'
import { Image } from '../../components/elements'
import Card from '../../components/elements/Card'
import Box from '../../components/layout/Box'
import { formatPostTitle } from './BlogPost'

const PostCard = ({
  post: { path, imageUrl, title, excerpt },
  imageProps = {},
}) => {
  const formatedTitle = formatPostTitle(title)

  return (
    <Card small variant="secondary" mb={5}>
      <Link to={`${path}`} className="articles-summary">
        <Image {...imageProps} src={imageUrl} alt={formatedTitle} mb={0} />
      </Link>
      <Box p={2}>
        <Link to={`${path}`} className="articles-summary">
          <H3>{formatedTitle}</H3>
        </Link>
        <P>{excerpt}</P>
        <P>
          <Link to={`${path}`} className="articles-summary">
            Read more
          </Link>
        </P>
      </Box>
    </Card>
  )
}

export const query = graphql`
  fragment SanityPostItemFragment on SanityPost {
    title
    excerpt
    category
    mainImage {
      asset {
        localFile(width: 500, height: 333) {
          publicURL
        }
      }
    }
    slug {
      current
    }
  }

  fragment MarkdownPostItemFragment on MarkdownRemark {
    fields {
      slug
    }
    frontmatter {
      title
      imageUrl
    }
    excerpt
  }
`

export default PostCard

// const PostCard = ({ post, imageProps = {} }) => (
//   <Card small variant="secondary" mb={5}>
//     <Link to={`${post.fields.slug}`} className="articles-summary">
//       <Image
//         {...imageProps}
//         src={
//           post.frontmatter.imageUrl ||
//           (post.frontmatter.imageSrc &&
//             post.frontmatter.imageSrc.childImageSharp.fluid.src)
//         }
//         alt={formatPostTitle(post.frontmatter.title)}
//         mb={0}
//       />
//     </Link>
//     <Box p={2}>
//       <Link to={`${post.fields.slug}`} className="articles-summary">
//         <H3>{formatPostTitle(post.frontmatter.title)}</H3>
//       </Link>
//       <P>{post.excerpt}</P>
//       <P>
//         <Link to={`${post.fields.slug}`} className="articles-summary">
//           Read more
//         </Link>
//       </P>
//     </Box>
//   </Card>
// )

// export default PostCard

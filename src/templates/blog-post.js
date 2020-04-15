import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <SEO title={props.data.contentfulBlog.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlog.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlog.publishedDate}
        </span>

        {props.data.contentfulBlog.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlog.featuredImage.fluid}
            alt={props.data.contentfulBlog.title}
          />
        )}
        {documentToReactComponents(props.data.contentfulBlog.body.json)}
      </div>
    </Layout>
  )
}

export default BlogPost
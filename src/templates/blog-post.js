import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import style from "../components/blog-page/style.module.scss"

export const query = graphql`
    query($slug: String) {
      contentfulBlog(slug: { eq: $slug }) {
        title
        publishedDate(formatString: "YYYY/MM/D")
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
      <div className={style.content}>
        <h1>{props.data.contentfulBlog.title}</h1>
        

        {props.data.contentfulBlog.featuredImage && (
          <Img
            className={style.featured}
            fluid={props.data.contentfulBlog.featuredImage.fluid}
            alt={props.data.contentfulBlog.title}
          />
        )}
        <span className={style.meta}>
          {props.data.contentfulBlog.publishedDate}
        </span>
        {documentToReactComponents(props.data.contentfulBlog.body.json)}
      </div>
      {/* <BlogPage/> */}
    </Layout>
  )
}

export default BlogPost
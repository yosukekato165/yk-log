import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blog-list"

const Blog = () => {
  
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogList />
    </Layout>
  )
}

export default Blog
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blog-list"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BlogList/>
    <Link to="/blog/">Go to Blog</Link>
  </Layout>
)

export default IndexPage

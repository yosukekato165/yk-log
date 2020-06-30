import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blog-list"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <BlogList/>
    <Link to="/blog/">Go to Blog </Link>
  </Layout>
)

export default IndexPage

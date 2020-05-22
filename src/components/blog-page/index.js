import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import SEO from "../seo"
import style from "./style.module.scss"

// const data = useStaticQuery(
//         graphql`
//     query($slug: String!) {
//     contentfulBlog(slug: { eq: $slug }) {
//         title
//         publishedDate(formatString: "Do MMMM, YYYY")
//         featuredImage {
//         fluid(maxWidth: 750) {
//             ...GatsbyContentfulFluid
//         }
//         }
//         body {
//         json
//         }
//     }
// }`)


const BlogPage = () => {

    const data = useStaticQuery(
        graphql`
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
    `)

    return (
        <>
            <SEO title={data.contentfulBlog.title} />
            <Link to="../../pages/blog.js">Visit the Blog Page</Link>
            <div className={style.content}>
            <h1 className={style.tit}>{data.contentfulBlog.title}</h1>
            <span className="meta">
                Posted on {data.contentfulBlog.publishedDate}
            </span>

            {data.contentfulBlog.featuredImage && (
                <Img
                className="featured"
                fluid={data.contentfulBlog.featuredImage.fluid}
                alt={data.contentfulBlog.title}
                />
            )}
            {documentToReactComponents(data.contentfulBlog.body.json)}
            </div>
        </>
    )
}

export default BlogPage
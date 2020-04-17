import { useStaticQuery, graphql, Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import style from "./style.module.scss";
import Img from "gatsby-image"

const BlogList = () => {

    const data = useStaticQuery(
        graphql`
            query {
            allContentfulBlog(sort: { fields: publishedDate, order: DESC }) {
                edges {
                node {
                    title
                    id
                    slug
                    publishedDate(formatString: "Do MMMM, YYYY")
                    featuredImage {
                    fluid(maxWidth: 750) {
                        ...GatsbyContentfulFluid
                    }
                    }
                    excerpt {
                    childMarkdownRemark {
                        excerpt(pruneLength: 150)
                    }
                    }
                }
                }
            }
            }
        `)
    return (
        <>
        <ul className={style.postList}>
            {data.allContentfulBlog.edges.map(edge => {
            return (
                <li className={style.postItem} key={edge.node.id}>
                <Link to={`/blog/${edge.node.slug}/`}>
                
                {edge.node.featuredImage && (
                    <Img
                    className={style.postImg}
                    fluid={edge.node.featuredImage.fluid}
                    alt={edge.node.title}
                    />
                )}
                
                <h2 className={style.postTitle}>
                {edge.node.title}
                </h2>
                <p className={style.postExcerpt}>
                    {edge.node.excerpt.childMarkdownRemark.excerpt}
                </p>
                <div className={style.postDate}>
                    <span>公開日 {edge.node.publishedDate}</span>
                </div>
                </Link>
                </li>
            )
            })}
        </ul>
        </>
    )
        }


export default BlogList

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/footer"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
      <section class="section">
        <div class="single">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <a href={node.frontmatter.link}>{node.frontmatter.title}</a>
          </div>
        ))}
        </div>

        <div class="single">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>                        
            <a href={node.frontmatter.link}>{node.frontmatter.format}</a>
          </div>
        ))}
        </div>

        <div class="single">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>                        
            <a href={node.frontmatter.link}>{node.frontmatter.cat_prefix}{node.frontmatter.number}</a>
          </div>
        ))}
        </div>

        <div class="single">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>                            
            <a href={node.frontmatter.link}>{node.frontmatter.edition}</a>
          </div>
        ))}
        </div>

        <div class="single">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>                        
            <a href={node.frontmatter.link}>{node.frontmatter.limited}</a>
          </div>
        ))}
        </div>

        <div class="single">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>                        
            <a href={node.frontmatter.link}>{node.frontmatter.date}</a>
          </div>
        ))}
        </div>        
        </section>        
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (sort: {order: DESC, fields: fileAbsolutePath}) {
      edges {
        node {
          frontmatter {
            link
            title
            format
            cat_prefix
            number
            edition
            limited
            date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
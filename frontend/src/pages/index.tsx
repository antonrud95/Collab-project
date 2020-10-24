import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import Dropdown from '~/components/ui/general/dropdown/dropdown.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Unikorns Starter Kit" />
    <HeroSection heroes={data.allStrapiHeroes.nodes} />
    <Dropdown dropdowns={data.allStrapiDropdowns.nodes} />
  </Layout>
)
export const query = graphql`
  query {
    allStrapiHeroes {
      nodes {
        id
        title
        subtitle
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allStrapiDropdowns {
      nodes {
        id
        title
        description
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default IndexPage

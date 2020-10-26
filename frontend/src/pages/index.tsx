import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import FeaturesSection from '~/components/sections/features-section/features-section.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Unikorns Starter Kit" />
    <HeroSection heroes={data.allStrapiHeroes.nodes} />
    <FeaturesSection />
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
  }
`
export default IndexPage

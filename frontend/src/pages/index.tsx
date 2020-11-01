import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import FeaturesSection from '~/components/sections/features-section/features-section.component'
import SignupSection from '~/components/sections/signup-section/signup-section.component'
import AdvantagesSection from '~/components/sections/advantages-section/advantages-section.component'
import PrototyingSection from '~/components/sections/prototying-section/prototying-section.component'
import PlanSection from '~/components/sections/plan-section/plan-section.component'
import EffortlessSection from '~/components/sections/effortless-section/effortless-section.component'
import CreatedSection from '~/components/sections/created-section/created-section.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Collab" />
    <HeroSection heroes={data.allStrapiHeroes.nodes} />
    <FeaturesSection />
    <SignupSection />
    <AdvantagesSection />
    <PrototyingSection />
    <PlanSection />
    <EffortlessSection effortlesses={data.allStrapiEffortless.nodes} />
    <CreatedSection />
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
    allStrapiEffortless {
      nodes {
        id
        title
        text
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        link
      }
    }
  }
`
export default IndexPage

import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { fadeBumpDelayLong, fadeBumpDelay, fadeBump, fade } from "../helpers/transitionHelper"

const PhotographyPage = ({ data: { photography }, location}) => {
  return (
    <>
      <SEO
        titleOverride={ "Photography" }
        pathnameOverride={ location.pathname}
      />
      
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="pt-20 md:pt-40 pb-12 md:pb-40 overflow-hidden relative"
        data-scroll-section
      >
        <motion.div variants={fadeBumpDelay} className="hidden md:block fixed top-0 left-0 z-0 w-2/12 xl:pr-8 mt-20vw -ml-8" data-scroll data-scroll-speed="3">
          <Img className="w-full opacity-50" fluid={photography.edges[3].node.featuredImage.fluid } alt={photography.edges[3].node.featuredImage.alt} />
        </motion.div>

        <motion.div variants={fadeBumpDelayLong} className="hidden md:block fixed bottom-0 right-0 z-0 w-2/12 xl:pl-6 mb-15vw -mr-8" data-scroll data-scroll-speed="3">
          <Img className="w-full opacity-50" fluid={photography.edges[4].node.featuredImage.fluid } alt={photography.edges[4].node.featuredImage.alt} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            enter: { transition: { staggerChildren: 0.025 } }
          }}
        >
          <div className="w-full md:w-8/12 md:pl-16 xl:w-6/12 xl:pl-0 mx-auto relative mb-12 md:mb-20">
            <nav className="px-4 md:px-0">
              <ul>
              {photography.edges.map(({ node }, index) => (
                <motion.li
                  key={index}
                  variants={fadeBump}
                >
                  <Link className="text-9xlvw md:text-7xlvw xl:text-6xlvw font-display relative font-light leading-none border-b border-transparent mb-5 md:mb-4vw xl:mb-3vw flex flex-wrap tracking-tighter uppercase" to={`/photography/${node.slug}`}>
                    {node.title}

                    <span className="font-thin text-4xlvw md:text-2xlvw ml-3">({node.date})</span>
                  </Link>
                </motion.li>
              ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      </motion.section>

      {/* <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div variants={SwipeInOut} className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-gray-200 z-30">
        </motion.div>
        
      </motion.section> */}
    </>
  )
}

export default PhotographyPage

export const query = graphql`
  query PhotographyQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    photography: allDatoCmsPhotography(sort: {fields: date, order: DESC}) {
      edges {
        node {        
          title
          location
          featuredImage {
            url
            title
            alt
            fluid(
              maxWidth: 600,
              imgixParams: {w: "600", h: "1100", fit: "crop", fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          date
          id
          slug
        }
      }
    }
  }
`


import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Moment from "react-moment"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { fade } from "../helpers/transitionHelper"
import Scroll from "../components/locomotiveScroll"

const JournalPage = ({ data: { journal, photography }, location }) => {
  return (
    <>
      <SEO
        titleOverride={ "Journal" }
        pathnameOverride={ location.pathname}
      />

      <Scroll callback={location} />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="pt-12 md:pt-40 pb-24 md:pb-40 overflow-hidden relative"
        data-scroll-section
      >
        <motion.div variants={fade} className="hidden md:block fixed top-0 left-0 z-0 w-2/12 xl:pr-8 mt-35vh -ml-8" data-scroll data-scroll-speed="2.25">
          <Img className="w-full opacity-50" fluid={photography.edges[4].node.featuredImage.fluid} alt={photography.edges[4].node.featuredImage.alt} />
        </motion.div>

        <motion.div variants={fade} className="hidden md:block fixed top-0 right-0 z-0 w-2/12 xl:pl-6 mt-65vh lg:mt-45vh -mr-8" data-scroll data-scroll-speed="2.25">
          <Img className="w-full opacity-50" fluid={photography.edges[5].node.featuredImage.fluid } alt={photography.edges[5].node.featuredImage.alt} />
        </motion.div>

        <div className="w-full md:w-1/2 md:pl-16 lg:w-7/12 mx-auto relative">
          {journal.edges.map(({ node }, index) => {
            return (
              <motion.div
                key={index}
                variants={fade}
                className="relative mb-12 md:mb-16"
              >
                <Link to={`/journal/${node.slug}`} className="flex flex-wrap lg:-mx-3 items-center group">
                  <div className="w-full lg:w-1/3 lg:px-3 mb-4 lg:mb-0">
                    <div className="relative overflow-hidden">
                      <Img className="w-full transition ease-in-out duration-1000 transform group-hover:scale-110 group-focus:scale-110" fluid={node.featuredImage.fluid } alt={node.featuredImage.alt} />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 lg:px-3">
                    <div className="px-4 md:px-0">
                      <span className="block uppercase text-xs font-sans tracking-widest mb-3 pl-1"><Moment format="DD MMMM Y">{ node.meta.createdAt }</Moment></span>
                      <span className="text-8xlvw md:text-3xlvw lg:text-xlvw font-display relative leading-none  tracking-tighter uppercase pb-0 mb-0">{ node.title }</span>
                    </div>
                  </div>
                </Link>
              </motion.div> 
            )
          })}
        </div>
      </motion.section>
    </>
  )
}

export default JournalPage

export const query = graphql`
  query JournalQuery {
    site: datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    photography: allDatoCmsPhotography {
      edges {
        node {
          featuredImage {
            url
            title
            alt
            fluid(
              maxWidth: 600,
              imgixParams: {w: "600", h: "1000", fit: "crop", fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    journal: allDatoCmsJournal {
      edges {
        node {        
          title
          metaTags {
            title
            description
            twitterCard
            image {
              url
            }
          }
          meta {
            createdAt
          }
          featuredImage {
            url
            title
            alt
            fluid(
              maxWidth: 950,
              imgixParams: {w: "950", h: "650", fit: "crop", fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid
            }
          }
          content {
            ... on DatoCmsText {
              id
              model { apiKey }
              text
            }
            ... on DatoCmsSingleImage {
              id
              model { apiKey }
              single: images {
                title
                fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsSizes
                }
                alt
              }
            }
            ... on DatoCmsDoubleImage {
              id
              model { apiKey }
              imageOne {
                title
                fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsSizes
                }
                alt
              }
              imageTwo {
                title
                fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsSizes
                }
                alt
              }
            }
          }
          id
          slug
        }
      }
    }
  }
`


import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { fade } from "../helpers/transitionHelper"
import Scroll from "../components/locomotiveScroll"

const IndexPage = ({ data: { bio, photography }, location }) => {
  return (
    <>
      <SEO
        titleOverride={ bio.metaTags && bio.metaTags.title ? bio.metaTags.title : bio.title }
        descriptionOverride={ bio.metaTags && bio.metaTags.description ? bio.metaTags.description : null }
        pathnameOverride={ location.pathname}
        imageOverride={ bio.metaTags && bio.metaTags.image ? bio.metaTags.image.url : null }
      />

      <Scroll callback={location} />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        data-scroll-section
      >
        <div className="pt-40 md:pt-15vw pb-24 md:pb-40 overflow-hidden relative">

          <motion.div variants={fade} className="hidden md:block absolute top-0 left-0 z-0 w-2/12 xl:pr-8 mt-55vh -ml-8" data-scroll data-scroll-speed="3">
            <Img className="w-full opacity-50" fluid={photography.edges[0].node.featuredImage.fluid } alt={photography.edges[0].node.featuredImage.alt} />
          </motion.div>

          <motion.div variants={fade} className="hidden md:block absolute bottom-0 right-0 z-0 w-2/12 xl:pl-6 mb-25vh -mr-8" data-scroll data-scroll-speed="3">
            <Img className="w-full opacity-50" fluid={photography.edges[1].node.featuredImage.fluid } alt={photography.edges[1].node.featuredImage.alt} />
          </motion.div>

          <div className="w-full md:w-1/2 md:pl-16 xl:w-1/2 3xl:w-5/12 mx-auto relative mb-12 md:mb-20">
            <motion.div
              variants={fade}
              className="relative index-image pt-7vw"
            >
              <span className="text-xl md:text-2xl uppercase font-sans tracking-widest md:upright absolute bottom-0 right-0 md:right-auto z-10 md:left-0 -mb-4 pb-px mr-8 md:-ml-5 md:mb-24 xl:mb-32 md:pb-0" data-scroll data-scroll-speed="0.65">Biography &bull; MH</span>

              <div className="relative overflow-hidden w-full h-full -mt-2vw" data-scroll data-scroll-speed="1.25">
                <div className="opacity-75">
                  <Img fluid={bio.featuredImage.fluid} key={bio.featuredImage.title} alt={bio.featuredImage.title} className="w-full image-scale-in" />
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fade}
              className="absolute top-0 right-0 z-10 px-4 md:px-0 -mt-20vw md:-mt-5vw"
              data-scroll
              data-scroll-speed="0.5"
            >
              <h1 className="text-10xlvw md:text-6xlvw xl:text-5xlvw 3xl:text-4xlvw w-full pr-10vw md:pr-0 md:w-full md:ml-auto md:-mr-15vw xl:w-11/12 xl:-mr-15vw leading-minimal uppercase">
                { bio.heading }
              </h1>
            </motion.div>
          </div>

          <motion.div variants={fade} data-scroll data-scroll-speed="1.25">
            <div className="w-full md:w-1/2 md:pl-16 xl:w-1/2 mx-auto relative max-w-2xl -mt-5vw">
              <div className="px-4 md:px-0 w-11/12 md:w-full">
                <div className="mb-8 md:mb-12">
                  <span className="block text-xs tracking-wider font-sans uppercase mb-3">Info</span>
                  <span className="content" dangerouslySetInnerHTML={{__html:bio.content}}></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
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
    bio: datoCmsBiography {
      heading
      content
      metaTags {
        title
        description
        twitterCard
        image {
          url
        }
      }
      featuredImage {
        url
        title
        alt
        fluid(
          maxWidth: 1200,
          imgixParams: {w: "1200", h: "1400", fit: "crop" }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { fadeBumpDelayLong, fadeBumpDelay, fadeBump, fade } from "../helpers/transitionHelper"

const JournalTemplatePage = ({ data: { journal }, location }) => {
  return (
    <>
      <SEO
        titleOverride={ journal.metaTags && journal.metaTags.title ? journal.metaTags.title : journal.title }
        descriptionOverride={ journal.metaTags && journal.metaTags.description ? journal.metaTags.description : null }
        pathnameOverride={ location.pathname}
        imageOverride={ journal.metaTags && journal.metaTags.image ? journal.metaTags.image.url : null }
      />

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="pb-24 md:pb-32 overflow-hidden relative"
        data-scroll-section
      >
        <div className="w-full">
          <div className="relative">
            <div className="w-full md:w-10/12 md:pl-24 lg:w-10/12 lg:pl-16 xl:pl-32 xl:w-11/12 md:ml-auto relative">
              <motion.div variants={fade} className="relative overflow-hidden">
                { journal.featuredImage && (
                  <Img className="w-full h-full object-cover object-center image-scale-in" fluid={journal.featuredImage.fluid} alt={journal.featuredImage.alt} />
                )}                 
              </motion.div>

              <motion.div variants={fadeBump} className="w-full md:w-8/12 xl:w-8/12 ml-auto mb-10 md:mb-5vw xl:mb-4vw px-4 md:px-0 text-right">
                <h1 className="text-10xlvw md:text-5xlvw font-display relative leading-none border-b border-transparent tracking-tighter mb-3 pb-0 uppercase md:pr-12 mt-3 md:mt-5">
                  {journal.title}
                </h1>
              </motion.div>
            </div>


            <motion.div variants={fade} className="px-4 md:px-12">
              {
                journal.content.map((block) => (
                  <div key={block.id}>
                    {
                      block.model.apiKey === 'text' &&
                        <div className="w-10/12 md:w-10/12 md:pl-16 lg:w-10/12 lg:pl-8 xl:pl-20 xl:w-11/12 md:ml-auto relative mb-8 md:mb-12 xl:mb-16">
                          <div className="w-full md:w-9/12 xl:pl-2">
                            <div className="content max-w-xl" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                          </div>
                        </div>
                    }
                    {
                      block.model.apiKey === 'single_image' &&
                        <figure className="mb-8 md:mb-12 xl:mb-16">
                        <Img fluid={block.single.fluid} key={block.single.title} alt={block.single.alt} className="w-full" />
                        { block.single.title && (
                          <figcaption>
                            { block.single.title }
                          </figcaption>
                        )}
                        </figure>
                    }
                    {
                      block.model.apiKey === 'double_image' &&
                        <div className="overflow-hidden">
                          <div className="flex flex-wrap md:-mx-2 lg:-mx-6">
                            <div className="w-full md:w-1/2 md:px-2 lg:px-6 mb-6 md:mb-12 xl:mb-16">
                              <figure>
                                <Img fluid={block.imageOne.fluid} key={block.imageOne.title} alt={block.imageOne.alt} className="w-full" />
                                { block.imageOne.title && (
                                  <figcaption>
                                    { block.imageOne.title }
                                  </figcaption>
                                )}
                              </figure>
                            </div>
                            <div className="w-full md:w-1/2 md:px-6 mb-8 md:mb-12 xl:mb-16">
                              <figure>
                                <Img fluid={block.imageTwo.fluid} key={block.imageTwo.title} alt={block.imageTwo.alt} className="w-full" />
                                { block.imageTwo.title && (
                                  <figcaption>
                                    { block.imageTwo.title }
                                  </figcaption>
                                )}
                              </figure>
                            </div>
                          </div>
                        </div>
                    }
                  </div>
                ))
              }
            </motion.div>
          </div> 
        </div>
      </motion.section>
    </>
  )
}

export default JournalTemplatePage

export const query = graphql`
  query JournalTemplateQuery($slug: String!) {
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
    journal: datoCmsJournal(slug: { eq: $slug }) { 
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
          maxWidth: 1650,
          imgixParams: {w: "1650", h: "800", fit: "crop", fm: "jpg", auto: "compress" }) {
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
`


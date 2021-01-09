import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Moment from "react-moment"
import { motion } from 'framer-motion'
import { fade } from "../helpers/transitionHelper"

const JournalPage = ({ data: { journal, photography } }) => {
  return (
    <>
      <SEO title="Journal" />
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        className="pt-12 md:pt-40 pb-24 md:pb-40 overflow-hidden relative"
      >
        <motion.div variants={fade} className="hidden md:block absolute top-0 left-0 z-0 w-2/12 xl:pr-8 mt-95vh -ml-8">
          <Img className="w-full opacity-50" fluid={photography.edges[4].node.featuredImage.fluid } />
        </motion.div>

        <motion.div variants={fade} className="hidden md:block absolute bottom-0 right-0 z-0 w-2/12 xl:pl-6 mb-55vh -mr-8">
          <Img className="w-full opacity-50" fluid={photography.edges[5].node.featuredImage.fluid } />
        </motion.div>

        <div className="w-full md:w-7/12 md:pl-16 xl:w-7/12 xl:pl-0 mx-auto relative px-6 md:px-0">
          {journal.edges.map(({ node }, index) => {
            return (
              <motion.div
                key={index}
                variants={fade}
                className="relative border-b border-gray-200 mb-12 md:mb-20 pb-12 md:pb-20"
              >
                { node.featuredImage && (
                  <Img fluid={node.featuredImage.fluid} alt={node.featuredImage.title} className="w-full opacity-75" />
                )}

                <span className="text-xl md:text-2xl uppercase font-sans tracking-widest  absolute top-0 left-0 z-10 -mt-4 ml-5vw">Journal &bull; MH</span>

                <div className="md:-mr-10vw w-10/12 ml-auto mb-10 md:mb-5vw xl:mb-4vw">
                  <h1 className="text-10xlvw md:text-5xlvw font-display relative leading-none border-b border-transparent flex flex-wrap tracking-tighter -mt-5vw md:-mt-3vw mb-3 pb-0">
                    {node.title} <span className="font-light text-4xlvw md:text-2xlvw ml-3"></span>
                  </h1>
                  <span className="block uppercase text-xs font-sans tracking-widest pl-1">Posted <Moment format="DD MMMM Y">{ node.meta.createdAt }</Moment></span>
                </div>


                <motion.div variants={fade} className="max-w-3xl mx-auto">
                  {/* <span className="block uppercase text-xs font-sans tracking-widest mb-4">Info</span> */}
                  {
                    node.content.map((block) => (
                      <div key={block.id}>
                        {
                          block.model.apiKey === 'text' &&
                            <div className="content w-11/12 lg:w-10/12 xl:w-8/12" dangerouslySetInnerHTML={{ __html: block.text }}></div>
                        }
                        {
                          block.model.apiKey === 'single_image' &&
                            <figure>
                            <Img fluid={block.single.fluid} key={block.single.title} alt={block.single.alt} className="w-full mb-8 md:mb-12" />
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
                                <div className="w-full md:w-1/2 md:px-2 lg:px-6 mb-6 md:mb-12">
                                  <figure>
                                    <Img fluid={block.imageOne.fluid} key={block.imageOne.title} alt={block.imageOne.alt} className="w-full" />
                                    { block.imageOne.title && (
                                      <figcaption>
                                        { block.imageOne.title }
                                      </figcaption>
                                    )}
                                  </figure>
                                </div>
                                <div className="w-full md:w-1/2 md:px-6 mb-8 md:mb-12">
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
          meta {
            createdAt
          }
          featuredImage {
            url
            title
            alt
            fluid(
              maxWidth: 1100,
              imgixParams: {w: "1100", h: "650", fit: "crop", fm: "jpg", auto: "compress" }) {
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


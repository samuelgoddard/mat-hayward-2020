import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { motion } from 'framer-motion'
import { fade } from "../helpers/transitionHelper"
import Scroll from "../components/locomotiveScroll"

const PhotographyPostPage = ({ data: { current, related }, location }) => {
  return (
    <>
      <SEO
        titleOverride={ current.seoMeta && current.seoMeta.title ? current.seoMeta.title : current.title }
        descriptionOverride={ current.seoMeta && current.seoMeta.description ? current.seoMeta.description : null }
        pathnameOverride={ location.pathname}
        imageOverride={ current.seoMeta && current.seoMeta.image ? current.seoMeta.image.url : null }
      />

      <Scroll callback={location} />

    {/* <div className="hidden md:block fixed bottom-0 right-0 z-10 p-6 md:p-12">
      <span className="text-sm uppercase font-sans leading-none">
      Back to top
      </span>
    </div>
    
    <div className="hidden md:block fixed bottom-0 left-0 z-10 p-6 md:p-12">
      <span className="text-sm uppercase font-sans leading-none">
      Share on Social
      </span>
    </div> */}

      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        data-scroll-section
      >
        <div className="pt-10 md:pt-0 pb-10 md:pb-0 overflow-hidden">
          <div className="w-full ml-auto flex flex-wrap md:h-screen mb-6 md:mb-10vw">
            <motion.div
              variants={fade}
              className="block md:hidden pb-2"
            >
              <h1 className="font-display uppercase tracking-tighter text-11xlvw mb-3 pb-0 px-4">{current.title}</h1>
            </motion.div>

            <div className="w-full md:w-7/12 h-full flex flex-wrap relative order-2 md:order-1">
              <div className="w-full self-center">
                <motion.div
                  variants={fade}
                  className="w-full md:w-7/12 xl:w-5/12 mx-auto px-4 md:px-0 max-w-2xl"
                >
                  <span data-scroll data-scroll-speed="0.5" className="block content" dangerouslySetInnerHTML={{__html:current.blurb}}></span>
                </motion.div>
              </div>
              <motion.div
                variants={fade}
                className="hidden md:block md:absolute z-10 bottom-0 left-0 p-6 md:p-12 self-end w-full"
              >
                <h1 className="font-display tracking-tighter uppercase md:text-7xlvw mb-0 pb-0" data-scroll data-scroll-speed="0.5">{current.title}</h1>
              </motion.div>
            </div>

            <motion.div variants={fade} className="w-full md:w-5/12 h-72 md:h-full relative order-1 md:order-2 mb-6 md:mb-0 md:pl-5">
              <span className="text-lg md:text-2xl uppercase font-sans tracking-widest upright absolute bottom-0 md:bottom-auto md:top-0 right-0 md:right-auto md:left-0 md:mt-5vw md:-ml-0 z-10 mr-5 md:-mr-0 mb-12 md:mb-0" data-scroll data-scroll-speed="1.5">{current.location} &bull; {current.date}</span>


              <div className="w-full h-full relative overflow-hidden" data-scroll data-scroll-speed="0">
                <div className="w-full relative overflow-hidden" data-scroll>
                  <div data-scroll data-scroll-speed="0.5" className="overflow-hidden -m-10">
                    <Img className="w-full h-full object-cover object-center image-scale-in p-10" fluid={current.featuredImage.fluid} alt={current.featuredImage.alt} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="pb-10 md:pb-10 px-0 md:px-12">
          <motion.div variants={fade}>
          {
            current.imageryModular.map((block) => (
              <div key={block.id}>
                {
                  block.model.apiKey === 'single_image' &&
                    <div className="relative overflow-hidden mb-0 md:mb-12" data-scroll data-scroll-speed="0" key={block.single.title}>
                      <div className="w-full relative overflow-hidden" data-scroll>
                        <div data-scroll data-scroll-speed="0.5" className="overflow-hidden -m-10">
                          <Img className="w-full h-full object-cover object-center p-10" fluid={block.single.fluid} alt={block.single.alt} />
                        </div>
                      </div>
                    </div>
                }
                {
                  block.model.apiKey === 'double_image' &&
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap md:-mx-6">
                        <div className="w-full md:w-1/2 md:px-6 mb-0 md:mb-12">
                          <div className="relative overflow-hidden" data-scroll data-scroll-speed="0" key={block.imageOne.title}>
                            <div className="w-full relative overflow-hidden" data-scroll>
                              <div data-scroll data-scroll-speed="0.5" className="overflow-hidden -m-10">
                                <Img className="w-full h-full object-cover object-center p-10" fluid={block.imageOne.fluid} alt={block.imageOne.alt} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-6 mb-0 md:mb-12">
                          <div className="relative overflow-hidden" data-scroll data-scroll-speed="0" key={block.imageTwo.title}>
                            <div className="w-full relative overflow-hidden" data-scroll>
                              <div data-scroll data-scroll-speed="0.5" className="overflow-hidden -m-10">
                                <Img className="w-full h-full object-cover object-center p-10" fluid={block.imageTwo.fluid} alt={block.imageTwo.alt} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                }
              </div>
            ))
          }
          </motion.div>
        </div>

        <div className=" container px-4  md:justify-center overflow-hidden">
          {/* <motion.div variants={fade}>
          <span className="md:ml-auto block text-xs tracking-wider font-sans uppercase mb-3 md:mb-5 md:text-center">Other Locations</span>
            <div className="w-full xl:w-auto ml-auto md:flex md:flex-wrap md:justify-end">
              {related.edges.map(({ node }, index) => (
                <Link key={index} to={`/photography/${node.slug}`} className="font-display font-light tracking-tighter leading-none text-2xl md:text-3xlvw xl:text-xlvw mr-5 block">{ node.title }</Link>
              ))}
            </div>
          </motion.div> */}

        <motion.div variants={fade} className="">
          <span className="md:ml-auto block text-xs tracking-wider font-sans uppercase md:text-center ">Next location</span>
            <Link  to={``} className="font-display font-light tracking-tighter leading-none text-2xl md:text-3xlvw xl:text-11xlvw mr-5 block -mb-8 text-center">Highlands</Link>
          </motion.div>

          <motion.div variants={fade} className="ml-auto self-end md:hidden">
            <span className="text-sm uppercase font-sans meta-date leading-none block -mt-10">
            —2016
              <span className="block text-right">2021</span>
            </span>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default PhotographyPostPage

export const query = graphql`
  query PhotographyPostQuery($slug: String!) {
    related: allDatoCmsPhotography(filter: {slug: {ne: $slug}}, limit: 3) {
      edges {
        node {
          title
          slug
        }
      }
    }
    current: datoCmsPhotography(slug: { eq: $slug }) {
      title
      location
      date
      seoMeta {
        title
        description
        twitterCard
        image {
          url
        }
      }
      blurb
      featuredImage {
        url
        title
        alt
        fluid(
          maxWidth: 1200,
          imgixParams: {w: "1200", h: "1600", fit: "crop", fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid
        }
        
      }
      imageryModular {
        ... on DatoCmsSingleImage {
          id
          model { apiKey }
          single: images {
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
            fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
            alt
          }
          imageTwo {
            fluid(maxWidth: 1600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
            alt
          }
        }
      }
    }
  }
`

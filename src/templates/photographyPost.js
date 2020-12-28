import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import { motion } from 'framer-motion'
import { fade } from "../helpers/transitionHelper"

const PhotographyPostPage = ({ data: { current } }) => {
  return (
    <>
      <SEO title={current.title} />
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <div className="pt-10 md:pt-0 pb-10 md:pb-0 overflow-hidden">
          <div className="w-full ml-auto flex flex-wrap md:h-screen mb-6 md:mb-10vw">
            <motion.div
              variants={fade}
              className="block md:hidden pb-2"
            >
              <h1 className="font-display text-10xlvw mb-3 pb-0 px-6">{current.title}</h1>
            </motion.div>

            <div className="w-full md:w-7/12 h-full flex flex-wrap relative order-2 md:order-1">
              <div className="w-full self-center">
                <motion.div
                  variants={fade}
                  className="w-full md:w-7/12 xl:w-5/12 mx-auto px-6 md:px-0 max-w-2xl"
                >
                  <span className="block text-xs tracking-wider font-sans uppercase mb-3">Info</span>
                  <span className="block content" dangerouslySetInnerHTML={{__html:current.blurb}}></span>
                </motion.div>
              </div>
              <motion.div
                variants={fade}
                className="hidden md:block md:absolute z-10 bottom-0 left-0 p-6 md:p-12 self-end w-full"
              >
                <h1 className="font-display md:text-8xlvw mb-0 pb-0">{current.title}</h1>
              </motion.div>
            </div>

            <motion.div variants={fade} className="w-full md:w-5/12 h-72 md:h-full relative order-1 md:order-2 mb-6 md:mb-0">
              <BackgroundImage
                Tag="div"
                className="w-full h-full"
                fluid={current.featuredImage.fluid}
                backgroundColor={`#040e18`}
              >
                <span className="text-lg md:text-2xl uppercase font-sans tracking-widest upright absolute bottom-0 md:bottom-auto md:top-0 right-0 md:right-auto md:left-0 md:mt-16 md:-ml-5 z-10 mr-5 md:-mr-0 mb-12 md:mb-0">{current.location} &bull; {current.date}</span>
              </BackgroundImage>
            </motion.div>
          </div>
        </div>

        <div className="pb-10 md:pb-10 px-6 md:px-12">
          <motion.div variants={fade}>
          {
            current.imageryModular.map((block) => (
              <div key={block.id}>
                {
                  block.model.apiKey === 'single_image' &&
                    <Img fluid={block.single.fluid} key={block.single.title} alt={block.single.alt} className="w-full mb-6 md:mb-12" />
                }
                {
                  block.model.apiKey === 'double_image' &&
                    <div className="overflow-hidden">
                      <div className="flex flex-wrap md:-mx-6">
                        <div className="w-full md:w-1/2 md:px-6 mb-6 md:mb-12">
                          <Img fluid={block.imageOne.fluid} key={block.imageOne.title} alt={block.imageOne.alt} className="w-full" />
                        </div>
                        <div className="w-full md:w-1/2 md:px-6 mb-6 md:mb-12">
                          <Img fluid={block.imageTwo.fluid} key={block.imageTwo.title} alt={block.imageTwo.alt} className="w-full" />
                        </div>
                      </div>
                    </div>
                }
              </div>
            ))
          }
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center container px-6 pb-8 md:pb-24 xl:pb-32 md:justify-center">
          <motion.div variants={fade}>
          <span className="md:ml-auto block text-xs tracking-wider font-sans uppercase mb-3 md:mb-5 md:text-center">Other Locations</span>
            <div className="w-full xl:w-auto ml-auto md:flex md:flex-wrap md:justify-end">
              <Link to="/post" className="font-display font-light tracking-tighter leading-none text-2xl md:text-3xlvw xl:text-xlvw leading-snug mr-5 block">Jasper</Link>
              <Link to="/post" className="font-display font-light tracking-tighter leading-none text-2xl md:text-3xlvw xl:text-xlvw leading-snug mr-5 block">Mt Assiniboine</Link>
              <Link to="/post" className="font-display font-light tracking-tighter leading-none text-2xl md:text-3xlvw xl:text-xlvw leading-snug mr-0">Kananaskis</Link>
            </div>
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
    current: datoCmsPhotography(slug: { eq: $slug }) {
      title
      location
      date
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

import React, { useState} from "react";
import Layout from '../components/Layout'
import {graphql} from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/gallery.css';
export default function Gallery ({data, data2, data3}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Layout>
      <h1>Gallery</h1>
      <h2>경기</h2>
      <Carousel className={isMenuOpen ? "menu-open": ""}>
          {data.slideShow1.edges.map(({ node }) => {
            const image = getImage(node.childImageSharp.gatsbyImageData);
              const aspectRatio = image.width / image.height;

            return (
              <Carousel.Item key={node.id}>
                <div 
                  style={{  
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                  }}
                >
                  <GatsbyImage 
                    image={image} 
                    alt={node.base} 
                    objectFit='cover'
                  />
                </div>
              </Carousel.Item>
            );
         })}
      </Carousel>

      <h2>회식</h2>

      <Carousel className={isMenuOpen ? "menu-open": ""}>
          {data.slideShow2.edges.map(({ node }) => {
            const image = getImage(node.childImageSharp.gatsbyImageData);
              const aspectRatio = image.width / image.height;

            return (
              <Carousel.Item key={node.id}>
                <div 
                  style={{  
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                  }}
                >
                  <GatsbyImage 
                    image={image} 
                    alt={node.base} 
                    objectFit='cover'
                  />
                </div>
              </Carousel.Item>
            );
         })}
      </Carousel>

      <h2>이벤트</h2>

      <Carousel className={isMenuOpen ? "menu-open": ""}>
          {data.slideShow3.edges.map(({ node }) => {
            const image = getImage(node.childImageSharp.gatsbyImageData);
              const aspectRatio = image.width / image.height;

            return (
              <Carousel.Item key={node.id}>
                <div 
                  style={{  
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                  }}
                >
                  <GatsbyImage 
                    image={image} 
                    alt={node.base} 
                    objectFit='cover'
                  />
                </div>
              </Carousel.Item>
            );
         })}
      </Carousel>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    slideShow1: allFile(
      filter: {relativeDirectory: {eq: "경기"}}, 
      sort: {base: ASC}
    ) {
      edges {
        node {
          id
          base
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              height: 600
              width: 900
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width: 100}
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
          }
        }
      }
    }
    slideShow2: allFile(
      filter: {relativeDirectory: {eq: "회식"}}, 
      sort: {base: ASC}
    ) {
      edges {
        node {
          id
          base
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              height: 600
              width: 900
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width: 100}
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
          }
        }
      }
    }
    slideShow3: allFile(
      filter: {relativeDirectory: {eq: "이벤트"}}, 
      sort: {base: ASC}
    ) {
      edges {
        node {
          id
          base
          relativePath
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              height: 600
              width: 900
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width: 100}
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
          }
        }
      }
    }
  }
`;
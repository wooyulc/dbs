/* index.js */
import React, { useState} from "react";
import Layout from "../components/Layout";
import {graphql} from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../asset/dbslogo.png'

export default function Home({data}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Layout isMenuOpen={isMenuOpen}>
      <h1 className="team-name">Daegu Basketball Squad</h1>
      <div className='logo'>
        <img src={logo} alt="intro" />
      </div>
      <div >
        <div className="intro-txt">
          나이, 성별, 실력 차이 없이<br/>
          모두 함께 즐기는 건강한 농구를 지향하는<br/>
          대구를 거점으로 하는 농구 클럽입니다.<br/>
        </div>
      </div>
        
      <Carousel className={isMenuOpen ? "menu-open": ""}>
        {data.slideShow.edges.map(({ node }) => {
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
    slideShow:  allFile(
      filter: {relativeDirectory: {eq: "뿌잉뿌잉 방장님"}}, 
      sort: {base: ASC}) {
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
`

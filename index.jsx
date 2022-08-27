import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Typography } from "@mui/material";
import {AiFillPlayCircle} from 'react-icons/ai'
export default class MyCarousel extends Component {
  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      background: "#000000",
      justifyContent: "center",
      alignItems: "flex-start",
    };
  }

  static get CARD_STYLE() {
    return {
      height: "400px",
      width: "400px",
      textAlign: "center",
      background: "#000",
      color: "#006699",
      fontFamily: "sans-serif",
      fontSize: "16px",
      borderRadius: "10px",
      margin: "40px 330px",
    };
  }

  static get CARD_STYLE_Heading() {
    return {
      background: "orange",
      color: "#ffffff",
      fontFamily: "sans-serif",
      fontSize: "18px",
      padding: "20px",
      boxSizing: "border-box",
      borderRadius: "10px 10px 0 0",
    };
  }

  render() {
    return (
      <div style={{background: "#000"}}>
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={false} autoplay_speed={5000}>
          <div style={MyCarousel.CARD_STYLE}>
            <img style={{width: "100%"}} src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems3.jpg.pagespeed.ic.lQV173t2AP.webp"/>
            <div style={MyCarousel.CARD_STYLE_Heading}>Add to Cart</div>
            <Typography sx={{color: "#fff"}}>
              Sweet surprise <br/>
              <em style={{color: "gold"}}>
              $98.00
              </em>
             </Typography>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <img  style={{width: "100%"}} src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems2.jpg.pagespeed.ic.icHdvDZ_5F.webp"/>
            <div style={MyCarousel.CARD_STYLE_Heading}>Add to Cart</div>
             <Typography sx={{color: "#fff"}}>
              Sweet surprise <br/>
              <em style={{color: "gold"}}>
              $98.00
              </em>
             </Typography>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <img style={{width: "100%"}} src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems1.jpg.pagespeed.ic.6dmE-qTqMS.webp"/>
            <div style={MyCarousel.CARD_STYLE_Heading}>Add to Cart</div>
            <Typography sx={{color: "#fff"}}>
              Sweet surprise <br/>
              <em style={{color: "gold"}}>
              $98.00
              </em>
             </Typography>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <img  style={{width: "100%"}} src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems2.jpg.pagespeed.ic.icHdvDZ_5F.webp"/>
            <div style={MyCarousel.CARD_STYLE_Heading}>Add to Cart</div>
            <Typography sx={{color: "#fff"}}>
              Sweet surprise <br/>
              <em style={{color: "gold"}}>
              $98.00
              </em>
             </Typography>
          </div>
         
        </ReactCardCarousel>
      </div>
      <div>
        <img style={{marginLeft: "10%"}} src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/video-bg.jpg" alt="" />
 
      </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MyCarousel />, rootElement);

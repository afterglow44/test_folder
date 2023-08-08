import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import {
  CloseBtn,
  Global,
  Header,
  ImgWrapper,
  Indicator,
  Overlay,
  SlickWrapper,
} from "./styles";
import { CloseOutlined } from "@ant-design/icons";

const ImageZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>
          <CloseOutlined />
        </CloseBtn>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          {/* 사진 밑에 번호 */}
          <Indicator>
            <div>
              {currentSlide + 1}
              {""}/{images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImageZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageZoom;

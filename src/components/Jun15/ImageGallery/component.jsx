import React from 'react'
import ImgGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export const ImageGallery = (props) => {
    return (<div className='imgGalleryContainer'>
        <ImgGallery items={props.images} showFullscreenButton showIndex />
    </div>)
}
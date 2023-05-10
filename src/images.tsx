// product display product images
import productOne from "/src/images/image-product-1.jpg";
import productTwo from "/src/images/image-product-2.jpg";
import productThree from "/src/images/image-product-3.jpg";
import productFour from "/src/images/image-product-4.jpg";
// product display product thumbnail images
import productThumbOne from "/src/images/image-product-1-thumbnail.jpg";
import productThumbTwo from "/src/images/image-product-2-thumbnail.jpg";
import productThumbThree from "/src/images/image-product-3-thumbnail.jpg";
import productThumbFour from "/src/images/image-product-4-thumbnail.jpg";
// Icons
import close from "/src/images/icon-close.svg";
import previous from "/src/images/icon-previous.svg";
import next from "/src/images/icon-next.svg";

import profileImg from "/src/images/image-avatar.png";

const productDisplayImages = {
	displayImages: [productOne, productTwo, productThree, productFour],
	thumbnailImages: [
		productThumbOne,
		productThumbTwo,
		productThumbThree,
		productThumbFour,
	],
	close: close,
	previous: previous,
	next: next,
};

export { productDisplayImages, profileImg };

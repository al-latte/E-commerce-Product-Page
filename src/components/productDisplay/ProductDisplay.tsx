import { useState } from "react";
import { productDisplayImages } from "../../images";
import "./productDisplay.css";

interface Props {
	toggleLightbox: () => void;
}

const ProductDisplay = ({ toggleLightbox }: Props) => {
	const displayImages = productDisplayImages.displayImages;
	const thumbnailImages = productDisplayImages.thumbnailImages;
	const [index, setIndex] = useState(0);

	const handleNext = () => {
		if (index < displayImages.length - 1) {
			setIndex((index) => index + 1);
		}
		if (index === displayImages.length - 1) {
			setIndex(0);
		}
	};

	const handlePrev = () => {
		if (index <= displayImages.length - 1) {
			setIndex((index) => index - 1);
		}
		if (index === 0) {
			setIndex(displayImages.length - 1);
		}
	};

	return (
		<section className="product_display">
			<button onClick={handlePrev} id="prev">
				<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11 1 3 9l8 8"
						stroke="#1D2026"
						strokeWidth="3"
						fill="none"
						fillRule="evenodd"
					/>
				</svg>
			</button>

			<img
				onClick={toggleLightbox}
				id="displayImg"
				src={displayImages[index]}
				alt=""
			/>
			<button onClick={handleNext} id="next">
				<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
					<path
						d="m2 1 8 8-8 8"
						stroke="#1D2026"
						strokeWidth="3"
						fill="none"
						fillRule="evenodd"
					/>
				</svg>
			</button>

			<div id="thumbnailImgs">
				{thumbnailImages.map((img, imgIndex) => (
					<button
						onClick={() => setIndex(imgIndex)}
						type="button"
						className={imgIndex === index ? "selected thumb" : "thumb"}
						key={imgIndex}
					>
						<img
							src={img}
							alt=""
							className={imgIndex === index ? "active" : ""}
						/>
					</button>
				))}
			</div>
		</section>
	);
};

export default ProductDisplay;

import { useState } from "react";
import { productDisplayImages } from "../../images";
import "./lightbox.css";

interface Props {
	toggleLightbox: () => void;
}

const Lightbox = ({ toggleLightbox }: Props) => {
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
		<div className="lightbox">
			<section className="lightbox-display">
				<svg
					onClick={toggleLightbox}
					id="lb-close-btn"
					width="14"
					height="15"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
						fill="#69707D"
						fillRule="evenodd"
					/>
				</svg>
				<button onClick={handlePrev} id="lb-prev">
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							className="next-prev"
							d="M11 1 3 9l8 8"
							stroke="#1D2026"
							strokeWidth="3"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
				</button>

				<img id="lb-displayImg" src={displayImages[index]} alt="" />
				<button onClick={handleNext} id="lb-next">
					<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
						<path
							className="next-prev"
							d="m2 1 8 8-8 8"
							stroke="#1D2026"
							strokeWidth="3"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
				</button>

				<div id="lb-thumbnailImgs">
					{thumbnailImages.map((img, imgIndex) => (
						<button
							onClick={() => setIndex(imgIndex)}
							type="button"
							className={
								imgIndex === index ? "lb-selected lb-thumb" : "lb-thumb"
							}
							key={imgIndex}
						>
							<img
								src={img}
								alt=""
								className={imgIndex === index ? "lb-active" : ""}
							/>
						</button>
					))}
				</div>
			</section>
		</div>
	);
};

export default Lightbox;

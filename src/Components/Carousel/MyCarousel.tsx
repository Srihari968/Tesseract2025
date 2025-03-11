import React from 'react';
import { Carousel, CarouselItem, CarouselRef } from 'react-round-carousel';

// Create an array of Carousel Items
const items: CarouselItem[] = Array(20)
	.fill('')
	.map((_: string, index: number) => ({
	alt: 'A random photo',
	image: `https://picsum.photos/${210 + index}`,
	content: (
		<div>
		<strong>Round Carousel</strong>
		<span>Slide number {index + 1}</span>
		</div>
	)
	}));

const App = () => {
	const carouselRef = React.createRef<CarouselRef>();

	return (
		<Carousel
			ref={carouselRef}
			items={items}
			slideOnClick
		/>
	)
}
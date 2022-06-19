import React from 'react'
import styled from 'styled-components'
import Testimonial from '../components/Testimonial'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import avatarOne from '../assets/avatar1.jpg'
import avatarTwo from '../assets/avatar2.jpg'
import avatarThree from '../assets/avatar3.jpg'
import avatarFour from '../assets/avatar4.jpg'

const Testimonials = () => {
	return (
		<STestimonials>
			<div className="container">
				<div className="text">
					<p>What SKills I Have</p>

					<h2>My Experience</h2>
				</div>

				<div className="content">
					<Swiper
						spaceBetween={50}
						slidesPerView={1}
						modules={[Pagination]}
						pagination={{ clickable: true }}
						grabCursor
					>
						<SwiperSlide>
							<Testimonial image={avatarOne} />
						</SwiperSlide>

						<SwiperSlide>
							<Testimonial image={avatarTwo} />
						</SwiperSlide>

						<SwiperSlide>
							<Testimonial image={avatarThree} />
						</SwiperSlide>

						<SwiperSlide>
							<Testimonial image={avatarFour} />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</STestimonials>
	)
}

export default Testimonials

const STestimonials = styled.section`
	height: 100vh;

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding-top: 3rem;
		gap: 5rem;

		.text {
			color: white;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;

			h2 {
				color: #4cb4f6;
			}
		}

		.content {
			max-width: 500px;
			width: 100%;
			margin-inline: auto;
			padding-bottom: 2rem;
			position: relative;

			.swiper {
				position: unset;
			}

			.swiper-pagination {
				position: absolute;
				bottom: 0;
			}

			.swiper-pagination-bullet {
				background-color: #253a5a;
				opacity: 1;
			}

			.swiper-pagination-bullet-active {
				background-color: #4cb4f6;
			}
		}
	}
`

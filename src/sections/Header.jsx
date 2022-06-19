import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import picture from '../assets/me.png'
import { FaLinkedin, FaGithub, FaDribbble } from 'react-icons/fa'
import Button from '../components/Button'

const Header = () => {
	return (
		<SHeader id="header">
			<div className="container">
				<div className="text">
					<p>Hello, I&apos;m</p>

					<h1>Kach Bnadem</h1>

					<span>Front-end Developer</span>
				</div>

				<div className="btns">
					<Button text="Download CV" variant="secondary" />

					<Button text="Let's Talk" variant="primary" />
				</div>

				<div className="picture">
					<motion.img animate={{ y: [500, 0] }} src={picture} />
				</div>

				<ul className="social-links">
					<li>
						<FaLinkedin />
					</li>
					<li>
						<FaGithub />
					</li>
					<li>
						<FaDribbble />
					</li>
				</ul>

				<button className="scroll-down">Scroll Down</button>
			</div>
		</SHeader>
	)
}

export default Header

const SHeader = styled.section`
	.container {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-top: 7rem;

		.text {
			color: white;
			text-align: center;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			p {
				font-weight: bold;
			}

			span {
				font-size: 0.8rem;
			}
		}

		.btns {
			display: flex;
			gap: 1rem;
		}

		.picture {
			position: absolute;
			max-width: 350px;
			max-height: 350px;
			bottom: 0;
			background: linear-gradient(to bottom, #4cb4f6, black);
			border-radius: 100vmax 100vmax 0 0;
			padding: 2rem;
			padding-bottom: 0;
			overflow: hidden;
		}

		.social-links {
			position: absolute;
			left: 3rem;
			bottom: 5rem;
			display: flex;
			flex-direction: column;
			gap: 1rem;

			@media (max-width: 768px) {
				top: 5rem;
				bottom: unset;
			}

			&::after {
				content: '';
				position: absolute;
				bottom: calc(-50px - 10px);
				left: 50%;
				width: 1px;
				height: 50px;
				background-color: #4cb4f6;

				@media (max-width: 768px) {
					top: calc(-50px - 10px);
					bottom: unset;
				}
			}

			li {
				color: #4cb4f6;
			}
		}

		.scroll-down {
			position: absolute;
			right: 1rem;
			bottom: 5rem;
			transform: rotate(90deg);
			color: #4cb4f6;
			background-color: transparent;
			border: none;

			@media (max-width: 768px) {
				top: 7rem;
				bottom: unset;
			}
		}
	}
`

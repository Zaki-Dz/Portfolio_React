import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
	return (
		<SFooter>
			<div className="container">
				<div className="title">Footer</div>

				<ul>
					<li>
						<a href="#">Home</a>
					</li>

					<li>
						<a href="#">About</a>
					</li>

					<li>
						<a href="#">Experience</a>
					</li>

					<li>
						<a href="#">Services</a>
					</li>

					<li>
						<a href="#">Portfolio</a>
					</li>

					<li>
						<a href="#">Testimonials</a>
					</li>

					<li>
						<a href="#">Contact</a>
					</li>
				</ul>

				<div className="social">
					<div className="link">
						<FaFacebookF />
					</div>

					<div className="link">
						<FiInstagram />
					</div>

					<div className="link">
						<AiOutlineTwitter />
					</div>
				</div>

				<p className="copyright">© Zaki.All right reserved</p>
			</div>
		</SFooter>
	)
}

export default Footer

const SFooter = styled.footer`
	background-color: #4cb4f6;
	padding-block: 3rem 8rem;
	text-align: center;

	.container {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		.title {
			font-size: 2rem;
		}

		ul,
		.social {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			li {
				transition: 0.2s;

				&:hover {
					color: white;
				}
			}

			.link {
				background-color: #1e1d37;
				padding: 1rem;
				border-radius: 1rem;
				border: 1px solid transparent;
				color: white;
				display: flex;
				transition: 0.2s;

				&:hover {
					background-color: transparent;
					color: #1e1d37;
					border-color: #1e1d37;
				}
			}
		}

		.copyright {
			font-size: 0.9rem;
		}
	}
`

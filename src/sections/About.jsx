import React from 'react'
import styled from 'styled-components'
import picture from '../assets/me-about.jpg'
import Box from '../components/Box'
import Button from '../components/Button'
import { FaMedal, FaUserFriends, FaFolderOpen } from 'react-icons/fa'

const About = () => {
	return (
		<SAbout id="about">
			<div className="container">
				<div className="text">
					<p>Get To Know</p>

					<h2>About Me</h2>
				</div>

				<div className="bottom">
					<div className="image">
						<img src={picture} />
					</div>

					<div className="content">
						<div className="boxes">
							<Box Icon={FaMedal} title="Experience" desc="3+ Years Working" />

							<Box Icon={FaUserFriends} title="Clients" desc="300+ Worldwide" />

							<Box Icon={FaFolderOpen} title="Projects" desc="80+ Completed" />
						</div>

						<p>
							Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Eveniet
							quam officia laudantium. Facere quo rerum minima. Assumenda
							cupiditate temporibus obcaecati, ab autem consectetur pariatur
							rem, nesciunt tempore omnis, in excepturi!
						</p>

						<Button text="Let's Talk" variant="primary" />
					</div>
				</div>
			</div>
		</SAbout>
	)
}

export default About

const SAbout = styled.section`
	min-height: 100vh;

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		padding-top: 5rem;

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

		.bottom {
			flex: 1;
			display: flex;
			align-items: center;
			gap: 7rem;

			@media (max-width: 768px) {
				flex-direction: column;
				padding-top: 5rem;
				gap: 5rem;
			}

			.image {
				max-width: 300px;
				border-radius: 2rem;
				background: linear-gradient(45deg, transparent, #4cb4f6, transparent);

				&:hover {
					img {
						transform: rotate(0);
					}
				}

				img {
					border-radius: 2rem;
					transform: rotate(10deg);
					transition: 0.2s;
				}
			}

			.content {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: start;
				gap: 2rem;

				.boxes {
					display: flex;
					gap: 1rem;
					width: 100%;
				}

				> p {
					color: #ddd;
					line-height: 1.5rem;
				}
			}
		}
	}
`

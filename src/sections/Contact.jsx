import React from 'react'
import styled from 'styled-components'
import Box from '../components/Box'
import Form from '../components/Form'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
	return (
		<SContact id="contact">
			<div className="container">
				<div className="text">
					<p>Get In Touch</p>

					<h2>Contact Me</h2>
				</div>

				<div className="content">
					<div className="left">
						<Box
							Icon={HiOutlineMail}
							title="Email"
							desc="exemple@gmail.com"
							url="https://www.google.com"
						/>

						<Box
							Icon={RiMessengerLine}
							title="Messenger"
							desc="Bnadem"
							url="https://www.google.com"
						/>

						<Box
							Icon={BsWhatsapp}
							title="Whatsapp"
							desc="+213-123456789"
							url="https://www.google.com"
						/>
					</div>

					<Form />
				</div>
			</div>
		</SContact>
	)
}

export default Contact

const SContact = styled.section`
	min-height: 100vh;

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding-block: 3rem;
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
			display: flex;
			gap: 5rem;

			@media (max-width: 768px) {
				flex-direction: column;
			}

			.left {
				flex: 1;
				display: flex;
				flex-direction: column;
				gap: 2rem;
			}

			form {
				flex: 2;
			}
		}
	}
`

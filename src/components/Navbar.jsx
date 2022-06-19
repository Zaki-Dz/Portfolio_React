import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { TbHeartHandshake } from 'react-icons/tb'

const Navbar = () => {
	const [active, setActive] = useState(0)

	const handleClick = (x) => {
		setActive(x)
	}

	return (
		<SNavbar animate={{ y: [200, 0], x: '-50%' }}>
			<div
				className={`link ${active === 0 ? 'active' : ''}`}
				onClick={() => handleClick(0)}
			>
				<a href="#header">
					<AiOutlineHome />
				</a>
			</div>

			<div
				className={`link ${active === 1 ? 'active' : ''}`}
				onClick={() => handleClick(1)}
			>
				<a href="#about">
					<AiOutlineUser />
				</a>
			</div>

			<div
				className={`link ${active === 2 ? 'active' : ''}`}
				onClick={() => handleClick(2)}
			>
				<a href="#skills">
					<BiBook />
				</a>
			</div>

			<div
				className={`link ${active === 3 ? 'active' : ''}`}
				onClick={() => handleClick(3)}
			>
				<a href="#services">
					<TbHeartHandshake />
				</a>
			</div>

			<div
				className={`link ${active === 4 ? 'active' : ''}`}
				onClick={() => handleClick(4)}
			>
				<a href="#contact">
					<BiMessageSquareDetail />
				</a>
			</div>
		</SNavbar>
	)
}

export default Navbar

const SNavbar = styled(motion.nav)`
	position: fixed;
	left: 50%;
	bottom: 2rem;
	transform: translateX(-50%);
	z-index: 10;
	background-color: #0003;
	backdrop-filter: blur(1rem);
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 1rem 2rem;
	border-radius: 100vmax;

	.link {
		border-radius: 50%;
		overflow: hidden;
		color: white;
		transition: 0.3s;

		&:hover {
			background-color: #0005;
		}

		&.active {
			background-color: #4cb4f6;
			color: #1e1d37;
		}

		a {
			width: 50px;
			height: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`

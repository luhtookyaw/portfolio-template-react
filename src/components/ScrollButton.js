import React, { useState, useEffect } from 'react';
import { BiCaretUp } from "react-icons/bi";
import { Button } from './Styles';

const ScrollButton = () =>{

	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 200){
			setVisible(true)
		}
		else if (scrolled <= 200){
			setVisible(false)
		}
	};

	const scrollToTop = () =>{
		window.scrollTo({
		top: 0,
		behavior: 'smooth'
		/* you can also use 'auto' behaviour
			in place of 'smooth' */
		});
	};

	
	useEffect(() => {
		window.addEventListener('scroll', toggleVisible);
		return () => {
			window.removeEventListener('scroll', toggleVisible)
		};
	}, []);

	return (
		<Button style={{display: visible ? 'inline' : 'none'}}>
			<BiCaretUp 
				onClick={scrollToTop} 
				size={60}
			/>
		</Button>
	);
}

export default ScrollButton;

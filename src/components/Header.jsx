import React, { useEffect, useState, useRef } from "react";
import { Title } from "./Title";

export const Header = () => {
	const [isScroll, setIsScroll] = useState(false);
	const headerRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > headerRef.current.offsetHeight) {
				setIsScroll(true);
			} else {
				setIsScroll(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScroll]);

	return (
		<header className="w-full h-fit" ref={headerRef}>
			<div className="flex items-center justify-between px-5 md:px-10 py-5 border-b border-gray-200">
				<h1 className="text-xl md:text-3xl font-medium font-body text-gray-900">
					<span className="text-blue-500 font-space font-bold">
						Ayo's
					</span>{" "}
					Log Explorer
				</h1>

				<div className="flex items-center gap-5 md:gap-6 text-gray-600">
					<div className="flex items-center">
						<span className="mr-2 font-semibold hidden md:block">
							User
						</span>
						<img
							src="https://avatars.githubusercontent.com/u/26472227?v=4"
							alt="avatar"
							className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80 hover:transition-opacity duration-300 ease-in-out"
						/>
					</div>

					<button
						className="flex items-center gap-1 px-[10px] py-[6px] group text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 hover:transition-all hover:duration-300 hover:scale-95 ease-in-out shadow-md"
						onClick={() =>
							window.open(
								"https://github.com/ifeoluwaayo/log-explorer",
								"_blank"
							)
						}>
						<span>View Code</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" />
							<polyline points="9 6 15 12 9 18" />
						</svg>
					</button>
				</div>
			</div>
			<Title />
		</header>
	);
};

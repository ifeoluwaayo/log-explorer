import React from "react";
import { useLocation } from "react-router-dom";

export const Title = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	const nameString = path === "log" ? location.pathname.split("/")[2] : "";

	const name = nameString ? nameString.replace(/-/g, " ") : "";

	console.log(path);
	return (
		<div className="w-full border-b border-gray-200 py-8 text-4xl lg:pl-16 pl-5 md:pl-8font-medium flex flex-col">
			<p className="text-base font-light">
				{path === "log" ? "Currently viewing" : "Welcome back,"}{" "}
				<span className="text-blue-500 font-semibold">
					{path === "log" ? "" : "User"}
				</span>
			</p>
			<h1 className="font-body">
				{path === "log" ? name : "Log Explorer"}
			</h1>
		</div>
	);
};

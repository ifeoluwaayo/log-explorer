import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Input = ({ value, onChange }) => {
	return (
		<div className="flex relative items-center flex-1">
			<input
				type="text"
				placeholder="Search for a Log..."
				className="w-full h-10 px-5 pr-10 text-sm text-gray-700 placeholder-gray-500 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
				value={value}
				onChange={onChange}
			/>
			<AiOutlineSearch className="absolute right-3 text-gray-500" />
		</div>
	);
};

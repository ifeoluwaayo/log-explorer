import React from "react";

export const Title = () => {
	return (
		<div className="w-full border-b border-gray-200 py-8 text-4xl lg:pl-16 pl-5 md:pl-8font-medium flex flex-col">
			<p className="text-base font-light">
				Welcome back,{" "}
				<span className="text-blue-500 font-semibold">User</span>
			</p>
			<h1 className="font-body">Log Explorer</h1>
		</div>
	);
};

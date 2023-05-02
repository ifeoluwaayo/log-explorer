import React from "react";
import {
	AiOutlineLoading3Quarters,
	AiOutlinePartition,
	AiOutlineFieldTime,
} from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

function getDateAgo(dateString, unit) {
	const date = new Date(dateString);
	const today = new Date();
	const diffTime = today - date;

	switch (unit) {
		case "days":
			return Math.abs(Math.round(diffTime / (1000 * 60 * 60 * 24)));
		case "months":
			return Math.abs(Math.round(diffTime / (1000 * 60 * 60 * 24 * 30)));
		case "years":
			return Math.abs(Math.round(diffTime / (1000 * 60 * 60 * 24 * 365)));
		default:
			throw new Error(
				'Invalid unit. Please specify "days", "months", or "years".'
			);
	}
}

export const Log = ({
	log: { name, date, time, failed, production, isFirst, image },
	key,
}) => {
	const building = isFirst ? "true" : "false";
	const id = name.replace(/ /g, "-").toLowerCase();

	const handleClick = () => {
		localStorage.setItem(
			"currentLog",
			JSON.stringify({
				name,
				date,
				time,
				failed,
				production,
				isFirst,
				image,
			})
		);
	};

	return (
		<div
			key={key}
			className="flex items-center w-full px-5 py-5 border-b border-gray-200 bg-white rounded-t-md 
        last:border-b-0 last:rounded-b-md">
			<div className="flex md:w-[28.5%] w-[45%]">
				<div className="flex flex-col">
					<p
						className={`text-base text-black font-semibold truncate w-[45%] md:w-[45%] lg:w-[60%] xl:w-full
                        ${
							building === "true"
								? "cursor-not-allowed"
								: "cursor-pointer"
						}
                    `}>
						<Link to={`/log/${id}`} onClick={handleClick}>
							{name}
						</Link>
					</p>
					<p className="text-sm text-gray-500">
						{production ? "Production " : "Development "}
						{isFirst ? "(Ready)" : ""}
					</p>
				</div>
			</div>
			<div className="flex md:w-[14.25%] w-[35%]">
				<p
					className={`${
						building === "true"
							? "bg-blue-500"
							: failed === "true"
							? "bg-red-500"
							: "bg-green-500"
					} text-white text-xs font-semibold rounded-md px-2 py-1 ml-4 md:ml-0`}>
					{building === "true"
						? "Building"
						: failed === "true"
						? "Failed"
						: "Success"}
					{building === "true" ? (
						<AiOutlineLoading3Quarters className="inline-block animate-spin ml-1" />
					) : (
						""
					)}
				</p>
			</div>
			<div className="lg:flex lg:w-[14.25%] hidden">
				<div className="flex flex-col">
					<p className="text-base text-black font-medium truncate gap-1 flex items-center">
						<AiOutlinePartition className="inline-block" /> Master
					</p>
					<p className="text-xs text-gray-600 font-semibold gap-1 flex items-center">
						<AiOutlineFieldTime className="inline-block" /> {date}{" "}
						{time}
					</p>
				</div>
			</div>
			<div className="flex flex-1 justify-end gap-3 items-center">
				<p className="text-sm text-gray-600 hidden lg:flex">
					{getDateAgo(date, "days")} days ago by random user
				</p>
				<img
					src={image}
					alt="avatar"
					className="w-8 h-8 rounded-full"
				/>
				<FaEllipsisV className="text-gray-500 cursor-pointer md:ml-3" />
			</div>
		</div>
	);
};

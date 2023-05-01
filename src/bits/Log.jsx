import React from "react";
import {
	AiOutlineLoading3Quarters,
	AiOutlinePartition,
	AiOutlineFieldTime,
} from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";

export const Log = ({
	log: { name, date, time, message, building, failed, production, isFirst },
	key,
}) => {
	return (
		<div
			key={key}
			className="flex items-center w-full px-3 py-5 border-b border-gray-200 bg-white rounded-t-md 
        last:border-b-0 last:rounded-b-md">
			<div className="flex md:w-[28.5%]">
				<div className="flex flex-col">
					<p className="text-base text-black font-semibold truncate cursor-pointer">
						{name}
					</p>
					<p className="text-sm text-gray-500">
						{production ? "Production " : "Development "}
						{isFirst ? "(Ready)" : ""}
					</p>
				</div>
			</div>
			<div className="flex md:w-[14.25%]">
				<p
					className={`${
						building === "true"
							? "bg-blue-500"
							: failed === "true"
							? "bg-red-500"
							: "bg-green-500"
					} text-white text-xs font-semibold rounded-md px-2 py-1`}>
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
			<div className="flex md:w-[14.25%]">
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
				<p className="text-sm text-gray-600">7d ago by random user</p>
				<img
					src="https://avatars.githubusercontent.com/u/54926861?v=4"
					alt="avatar"
					className="w-8 h-8 rounded-full"
				/>
				<FaEllipsisV className="text-gray-500 cursor-pointer ml-3" />
			</div>
		</div>
	);
};

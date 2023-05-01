import React from "react";
import { Log } from "../bits";

const data = [
	{
		id: 1,
		name: "Hello",
		date: "2021-09-01",
		time: "12:00:00",
		message: "World",
	},
	{
		id: 2,
		name: "I'm",
		date: "2021-09-02",
		time: "12:00:00",
		message: "Good",
	},
];

export const Table = () => {
	return (
		<div className="flex border border-gray-200 flex-col mt-3 w-full rounded-md shadow-sm">
			{data.map((log) => (
				<Log key={log.id} log={log} />
			))}
		</div>
	);
};

import React, { useState } from "react";
import { Input, Date } from "../bits";

export const Filter = () => {
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [search, setSearch] = useState("");

	return (
		<div className="flex gap-3 items-center">
			<Input value={search} onChange={(e) => setSearch(e.target.value)} />
			<Date
				label="Start Date"
				value={from}
				onChange={(e) => setFrom(e.target.value)}
			/>
			<Date
				label="End Date"
				value={to}
				onChange={(e) => setTo(e.target.value)}
			/>
		</div>
	);
};

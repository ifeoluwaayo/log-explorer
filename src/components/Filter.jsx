import { Input, Date } from "../bits";

export const Filter = ({
	startDate,
	endDate,
	setStartDate,
	setEndDate,
	setSearchQuery,
	searchQuery,
}) => {
	return (
		<div className="flex gap-3 items-center">
			<Input
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
			/>
			<Date
				label="Start Date"
				value={startDate}
				onChange={(e) => setStartDate(e.target.value)}
			/>
			<Date
				label="End Date"
				value={endDate}
				onChange={(e) => setEndDate(e.target.value)}
			/>
		</div>
	);
};

import { useState, useEffect } from "react";
import { Header, Filter, Table } from "./components";
import { Pagination } from "./bits";

import "./style/index.css";
import data from "./data";

function App() {
	const [logs, setLogs] = useState(data);
	const [paginatedLogs, setPaginatedLogs] = useState([]);
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");

	const [filteredList, setFilteredList] = useState([]);

	const searchLogs = () => {
		let filteredLogs = [...logs];
		if (startDate && endDate) {
			let start = startDate.split("-");
			let end = endDate.split("-");
			filteredLogs = filteredLogs.filter((log) => {
				let date = log.date.split("-");
				return (
					new Date(date[0], date[1] - 1, date[2]) >=
						new Date(start[0], start[1] - 1, start[2]) &&
					new Date(date[0], date[1] - 1, date[2]) <=
						new Date(end[0], end[1] - 1, end[2])
				);
			});
		}

		if (searchQuery) {
			filteredLogs = filteredLogs.filter((log) => {
				return log.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase());
			});
		}

		setFilteredList(filteredLogs);
	};

	useEffect(() => {
		const intervalId = setInterval(() => {
			setLogs((prevLogs) => {
				const now = new Date();
				const date = new Date(
					now.getFullYear() - Math.floor(Math.random() * 3),
					Math.floor(Math.random() * 12),
					Math.floor(Math.random() * 28) + 1
				);
				const newLog = {
					name: `Log and it's index is generated randomly ${
						prevLogs.length + 1
					}`,
					date: `${date.getFullYear()}-${
						date.getMonth() + 1
					}-${date.getDate()}`,
					time: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
					building: true,
					failed: Math.random() < 0.5 ? "true" : "false",
					production: Math.random() < 0.5 ? "true" : "false",
					isFirst: true,
					image: "https://picsum.photos/200/300",
				};
				// Update "building" property for every other object
				const updatedLogs = [newLog, ...prevLogs].map((log, index) => ({
					...log,
					building: index === 0 ? true : false,
					isFirst: index === 0 ? true : false,
				}));
				return updatedLogs;
			});
		}, 5000);

		return () => clearInterval(intervalId);
	}, []);

	useEffect(() => {
		searchLogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [startDate, endDate, searchQuery, logs]);

	return (
		<div className="">
			<Header />
			<div className="lg:px-16 py-6 px-5 md:px-8">
				<Filter
					startDate={startDate}
					endDate={endDate}
					setStartDate={setStartDate}
					setEndDate={setEndDate}
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
				<Table logs={paginatedLogs} />
				<Pagination
					data={filteredList}
					itemsPerPage={10}
					setPaginatedData={setPaginatedLogs}
				/>
			</div>
		</div>
	);
}

export default App;

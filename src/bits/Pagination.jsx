import React, { useState, useEffect } from "react";

export const Pagination = ({ data, itemsPerPage, setPaginatedData }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageNumbers, setPageNumbers] = useState([]);

	useEffect(() => {
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
			pageNumbers.push(i);
		}
		setPageNumbers(pageNumbers);
	}, [data, itemsPerPage]);

	useEffect(() => {
		const indexOfLastItem = currentPage * itemsPerPage;
		const indexOfFirstItem = indexOfLastItem - itemsPerPage;
		const paginatedData = data.slice(indexOfFirstItem, indexOfLastItem);
		setPaginatedData(paginatedData);
	}, [currentPage, data, itemsPerPage, setPaginatedData]);

	return (
		<div
			className={`flex items-center justify-center w-full mt-5 ${
				data.length < 10 ? "hidden" : ""
			}`}>
			<div className="flex items-center justify-center w-1/2">
				{pageNumbers.map((number) => (
					<button
						key={number}
						className={`${
							currentPage === number
								? "bg-blue-500 text-white"
								: "bg-white text-black"
						} w-10 h-10 mx-1 rounded-full focus:outline-none`}
						onClick={() => setCurrentPage(number)}>
						{number}
					</button>
				))}
			</div>
		</div>
	);
};

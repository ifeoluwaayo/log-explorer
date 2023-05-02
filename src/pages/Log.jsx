import React, { useEffect, useState } from "react";
import { DeployLog, Header, Summary } from "../components";

export const Log = () => {
	const [log, setLog] = useState(null);

	useEffect(() => {
		const currentLog = JSON.parse(localStorage.getItem("currentLog"));
		console.log(currentLog);
		if (currentLog) {
			setLog(currentLog);
		}
	}, []);

	return (
		<div>
			<Header />
			<div className="lg:px-16 py-6 px-5 md:px-8">
				{log ? (
					<div className="flex flex-col">
						<Summary log={log} />
						<DeployLog log={log} />
					</div>
				) : (
					// center the loading spinner
					<div className="h-fit bg-transparent p-4 flex flex-col">
						<div className="w-full md:w-[50%] h-[25vh] md:h-[250px] animate-pulse relative">
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md"></div>
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md animate-shimmer"></div>
						</div>
						<div className="w-full md:h-[500px] h-[40vh] mt-10 animate-pulse relative">
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md"></div>
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md animate-shimmer"></div>
						</div>
						<div className="mt-4 h-10 w-80 animate-pulse">
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md"></div>
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md animate-shimmer"></div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Summary = ({ log, stats }) => {
	const [building, setBuilding] = useState(log.isFirst); // log.building = ["true", "false"
	const [failed, setFailed] = useState(log.failed);

	// if change in stats, update failed
	useEffect(() => {
		if (stats !== null) {
			setFailed(stats);
			setBuilding(false);
		}
	}, [stats]);

	return (
		<div className="flex flex-col p-5 w-full md:w-[50%] h-fit gap-3 bg-white shadow-md rounded-md">
			<h3 className="text-2xl font-semibold">Summary</h3>
			<div className="flex flex-col gap-2">
				<div className="flex flex-row justify-between border-b border-gray-200 pb-2">
					<p className="text-gray-500">Project Name</p>
					<p className="text-gray-700 truncate">{log.name}</p>
				</div>
				<div className="flex flex-row justify-between border-b border-gray-200 pb-2">
					<p className="text-gray-500">Deployed At</p>
					<p className="text-gray-700">
						{log.date} {log.time}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center border-b border-gray-200 pb-2">
					<p className="text-gray-500">Deployed By</p>
					<p className="text-gray-700">
						<img
							src={log.image}
							alt="User"
							className="w-8 h-8 rounded-full inline-block mr-3"
						/>
						<span className="text-gray-500">Random User </span>
					</p>
				</div>
				<div className="flex flex-row justify-between border-b border-gray-200 pb-2">
					<p className="text-gray-500">Promoted To</p>
					<p className="text-gray-700">
						{log.production
							? "Production Stage"
							: "Development Stage"}
					</p>
				</div>
				<div className="flex flex-row justify-between pb-2">
					<p className="text-gray-500">Deployment Status</p>
					<p className="text-gray-700">
						<p
							className={`${
								building === "true"
									? "bg-blue-500"
									: failed
									? "bg-red-500"
									: "bg-green-500"
							} text-white text-xs font-semibold rounded-md px-2 py-1 ml-4 md:ml-0`}>
							{building === "true"
								? "Building"
								: failed
								? "Failed"
								: "Success"}
							{building === "true" ? (
								<AiOutlineLoading3Quarters className="inline-block animate-spin ml-1" />
							) : (
								""
							)}
						</p>
					</p>
				</div>
			</div>
		</div>
	);
};

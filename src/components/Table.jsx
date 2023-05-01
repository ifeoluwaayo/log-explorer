import { Log } from "../bits";

export const Table = ({ logs }) => {
	return (
		<div className="flex flex-col w-full mt-3">
			<div className="flex border border-gray-200 flex-col w-full rounded-md shadow-sm">
				{logs.map((log, index) => (
					<Log key={index} log={log} />
				))}
			</div>
		</div>
	);
};

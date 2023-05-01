import { Log } from "../bits";

export const Table = ({ logs }) => {
	return (
		<div className="flex flex-col w-full mt-3">
			<div className="flex border border-gray-200 flex-col w-full rounded-md shadow-sm">
				{logs.map((log, index) => (
					<Log key={index} log={log} />
				))}

				{logs.length === 0 && (
					<div>
						<div className="w-full h-[80px] animate-pulse relative">
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md"></div>
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md animate-shimmer"></div>
						</div>
						<div className="w-full h-[80px] animate-pulse relative mt-[1px]">
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md"></div>
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md animate-shimmer"></div>
						</div>
						<div className="w-full h-[80px] animate-pulse relative mt-[1px]">
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md"></div>
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md animate-shimmer"></div>
						</div>
						<div className="w-full h-[80px] animate-pulse relative mt-[1px]">
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md"></div>
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md animate-shimmer"></div>
						</div>
						<div className="w-full h-[80px] animate-pulse relative mt-[1px]">
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md"></div>
							<div className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 absolute left-0 top-0 bottom-0 right-0 opacity-50 rounded-md animate-shimmer"></div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

import { useEffect, useState } from "react";

const successDeployLog = [
	"Fetching cached dependencies",
	"Installing NPM modules using NPM version 7.24.1",
	"core-js@3.16.1 postinstall /opt/build/repo/node_modules/core-js",
	"node -e 'try{require('./postinstall')}catch(e){}'",
	"Thank you for using core-js (",
	"The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: ",
	"Also, the author of core-js (",
	"The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: ",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"ejs@2.7.4 postinstall /opt/build/repo/node_modules/ejs",
	"node ./postinstall.js",
	"Thank you for installing EJS: built with the Jake JavaScript build tool (",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/watchpack-chokidar2/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack-dev-server/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-haste-map/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-worker/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"added 1609 packages from 1010 contributors and audited 1610 packages in 21.634s",
	"found 0 vulnerabilities",
	"NPM modules installed",
	"Started restoring cached go cache",
	"Finished restoring cached go cache",
	"go version go1.16.5 linux/amd64",
	"go version go1.16.5 linux/amd64",
	"Installing missing commands",
	"Verify run directory",
	"Executing user command: npm run build",
	">",
	"npm run build",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/watchpack-chokidar2/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack-dev-server/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-haste-map/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-worker/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	">",
	"Section completed: deploying",
	"Uploading artifacts for successful job",
	"Uploading artifacts...",
	"public/: found 105 matching files and directories",
	"Post processing done",
	"Script succeeded with exit code 0",
];

const failedDeployLog = [
	"Fetching cached dependencies",
	"Installing NPM modules using NPM version 7.24.1",
	"core-js@3.16.1 postinstall /opt/build/repo/node_modules/core-js",
	"node -e 'try{require('./postinstall')}catch(e){}'",
	"Thank you for using core-js (",
	"The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: ",
	"Also, the author of core-js (",
	"The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: ",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"ejs@2.7.4 postinstall /opt/build/repo/node_modules/ejs",
	"node ./postinstall.js",
	"Thank you for installing EJS: built with the Jake JavaScript build tool (",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/watchpack-chokidar2/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack-dev-server/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-haste-map/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-worker/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"added 1609 packages from 1010 contributors and audited 1610 packages in 21.634s",
	"found 5 vulnerabilities (3 low, 2 high)",
	"run `npm audit fix` to fix them, or `npm audit` for details",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/watchpack-chokidar2/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack-dev-server/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	">",
	"Error: Command failed with exit code 1: npm run build",
	"npm ERR! code ELIFECYCLE",
	"npm ERR! errno 1",
	"npm ERR! @build:prod: `npm run build`",
	"npm ERR! Failed at the @build:prod script.",
	"npm ERR! This is probably not a problem with npm. There is likely additional logging output above.",
	"npm ERR! A complete log of this run can be found in:",
	"npm ERR!     /opt/buildhome/.npm/_logs/2021-09-30T14_39_55_000Z-debug.log",
	"npm ERR! code ELIFECYCLE",
	"npm ERR! errno 1",
	"npm ERR! @build:prod: `npm run build`",
	"npm ERR! Exit status 1",
	"npm ERR!",
];

const inProgressDeployLog = [
	"Fetching cached dependencies",
	"Installing NPM modules using NPM version 7.24.1",
	"core-js@3.16.1 postinstall /opt/build/repo/node_modules/core-js",
	"node -e 'try{require('./postinstall')}catch(e){}'",
	"Thank you for using core-js (",
	"The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: ",
	"Also, the author of core-js (",
	"The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: ",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"ejs@2.7.4 postinstall /opt/build/repo/node_modules/ejs",
	"node ./postinstall.js",
	"Thank you for installing EJS: built with the Jake JavaScript build tool (",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/watchpack-chokidar2/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack-dev-server/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-haste-map/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-worker/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"added 1609 packages from 1010 contributors and audited 1610 packages in 21.634s",
	"found 0 vulnerabilities",
	"NPM modules installed",
	"Started restoring cached go cache",
	"Finished restoring cached go cache",
	"go version go1.16.5 linux/amd64",
	"go version go1.16.5 linux/amd64",
	"Installing missing commands",
	"Verify run directory",
	"Executing user command: npm run build",
	">",
	"npm run build",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/chokidar/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/watchpack-chokidar2/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack-dev-server/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/webpack/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-haste-map/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest-worker/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.3.2 (node_modules/jest/node_modules/fsevents):",
	"npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for",
	">",
	"Section completed: deploying",
	"Uploading artifacts for successful job",
	"Uploading artifacts...",
	"public/: found 105 matching files and directories",
	"Post processing done",
	"Script succeeded with exit code 0",
];

export const DeployLog = ({ log, setStats, stats }) => {
	const { failed, isFirst } = log;
	const [progressLog, setProgressLog] = useState([]);

	const addItemsWithDelay = (items) => {
		items.forEach((item, index) => {
			const delay = Math.floor(Math.random() * 2000) + 100;

			setTimeout(() => {
				if (progressLog[progressLog.length] !== item) {
					setProgressLog((prev) => [...prev, item]);
				}
			}, delay * index);
		});
	};

	useEffect(() => {
		if (isFirst) {
			addItemsWithDelay(inProgressDeployLog);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFirst]);

	useEffect(() => {
		if (progressLog.length === inProgressDeployLog.length) {
			const status = Math.random() < 0.5 ? true : false;
			setStats(status);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [progressLog]);

	const [isSectionAtTop, setIsSectionAtTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.querySelector("#my-section");
			if (section) {
				const sectionTop = section.getBoundingClientRect().top;
				setIsSectionAtTop(sectionTop <= 0);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		console.log(isSectionAtTop);
	}, [isSectionAtTop]);

	return (
		<div
			className="mt-10 h-fit gap-3 bg-white shadow-md rounded-md w-full"
			id="my-section">
			<div
				className={`flex flex-row justify-between items-center px-6 py-4
                ${
					isSectionAtTop
						? "fixed top-0 lg:left-16 z-10 lg:right-16 md:right-8 md:left-8 right-0 left-0 bg-[#f7fafc] shadow-sm md:bg-white"
						: "relative rounded-t-md bg-white"
				}
                `}>
				<h3 className="text-xl font-semibold">Deploy Log</h3>
				<button className="bg-blue-500 text-white px-3 py-1 rounded-md">
					View All
				</button>
			</div>
			<div
				className={`bg-gray-800 text-white py-4 rounded-b-md h-screen overflow-y-scroll
            ${isSectionAtTop ? "mt-16" : "mt-0"}
            `}>
				<div className="flex items-center mb-2">
					<div className="h-4 w-4 bg-red-500 rounded-full"></div>
					<div className="ml-2 font-medium">Building...</div>
				</div>
				{!isFirst && (
					<>
						{failed ? (
							<>
								{failedDeployLog.map((log, index) => (
									<>
										<div
											className="text-sm flex"
											key={index}>
											<span
												className="text-gray-400 pl-2 border-r border-gray-200 w-10 flex justify-center"
												style={{ minWidth: "2.5rem" }}>
												{index + 1}.
											</span>
											<span className="pl-3">{log}</span>
										</div>
									</>
								))}
								<div className="text-sm">
									<span
										className="text-gray-400 pl-2 border-r border-gray-200 w-10 flex justify-center"
										style={{ minWidth: "2.5rem" }}>
										{failedDeployLog.length + 1}.
									</span>
									<span className="pl-3 text-red-500">
										! Deploy failed
									</span>
								</div>
							</>
						) : (
							<>
								{successDeployLog.map((log, index) => (
									<>
										<div
											className="text-sm flex"
											key={index}>
											<span
												className="text-gray-400 pl-2 border-r border-gray-200 w-10 flex justify-center"
												style={{ minWidth: "2.5rem" }}>
												{index + 1}.
											</span>
											<span className="pl-3">{log}</span>
										</div>
									</>
								))}
								<div className="text-sm">
									<span
										className="text-gray-400 pl-2 border-r border-gray-200 w-10 flex justify-center"
										style={{ minWidth: "2.5rem" }}>
										{successDeployLog.length + 1}.
									</span>
									<span className="pl-3 text-blue-500">
										✨ Deploy success
									</span>
								</div>
							</>
						)}
					</>
				)}

				{isFirst && (
					<>
						{progressLog.map((log, index) => (
							<>
								<div className="text-sm flex" key={index}>
									<span
										className="text-gray-400 pl-2 border-r border-gray-200 w-10 flex justify-center"
										style={{ minWidth: "2.5rem" }}>
										{index + 1}.
									</span>
									<span className="pl-3">{log}</span>
								</div>
							</>
						))}
						{inProgressDeployLog.length === progressLog.length && (
							<>
								<div className="text-sm flex">
									<span
										className="text-gray-400 pl-2 border-r border-gray-200 w-10 flex justify-center"
										style={{ minWidth: "2.5rem" }}>
										{inProgressDeployLog.length + 1}.
									</span>
									<span className="pl-3">
										Checking build and deploy status...
									</span>
								</div>
								<div className="text-sm flex">
									<span
										className="text-gray-400 pl-2 border-r border-gray-200 w-10 flex justify-center"
										style={{ minWidth: "2.5rem" }}>
										{inProgressDeployLog.length + 2}.
									</span>
									<span className="pl-3">
										{stats ? (
											<span className="text-red-500">
												! Deploy failed
											</span>
										) : (
											<span className="text-blue-500">
												✨ Deploy success
											</span>
										)}
									</span>
								</div>
							</>
						)}
					</>
				)}
			</div>
		</div>
	);
};

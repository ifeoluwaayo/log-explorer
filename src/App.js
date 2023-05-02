// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Log } from "./pages";

import "./style/index.css";

function App() {
	return (
		<div className="">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/log/:id" element={<Log />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

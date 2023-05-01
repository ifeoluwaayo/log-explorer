import { Header, Filter, Table } from "./components";
import "./style/index.css";

function App() {
	return (
		<div className="">
			<Header />
			<div className="px-16 py-6">
				<Filter />
				<Table />
			</div>
		</div>
	);
}

export default App;

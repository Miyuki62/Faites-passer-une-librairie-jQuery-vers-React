import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./Pages/Employee";
import Home from "./Pages/Home";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/employee" element={<Employee />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

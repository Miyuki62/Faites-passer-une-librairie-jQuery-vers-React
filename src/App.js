import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

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

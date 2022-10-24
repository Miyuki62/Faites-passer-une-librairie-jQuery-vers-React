import React from "react";
import { Link } from "react-router-dom";
import EmployeesList from "../components/EmployeesList/EmployeeList";
import Header from "../components/Header/Header";

const Employee = () => {
	return (
		<>
			<Header />
			<main>
				<h2 className="h2-employee">Current Employees</h2>
				<EmployeesList />

				<Link className="btn-employee" to="/">
					Home
				</Link>
			</main>
		</>
	);
};

export default Employee;

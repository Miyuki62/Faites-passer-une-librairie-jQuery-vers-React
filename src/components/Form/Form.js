import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";

function Form() {
	return (
		<div className="form">
			<Link className="btn" to="/employee">
				View Current Employees
			</Link>
			<h2>Create Employee</h2>
			<Input type={"text"} name={"firstName"} label={"First Name"} />
			<Input type={"text"} name={"lastName"} label={"Last Name"} />
			<Input type={"date"} name={"birthday"} label={"Date of Birth"} />
			<Input type={"date"} name={"startDate"} label={"Start Date"} />
			<input className="btn" type="submit" value="Save" />
		</div>
	);
}

export default Form;

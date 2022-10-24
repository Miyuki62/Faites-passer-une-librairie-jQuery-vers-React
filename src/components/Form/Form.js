import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import states from "../../assets/dataStates.json";
import departments from "../../assets/dataDepartment.json";
import Dropdown from "../Dropdown/Dropdown";

import { addUser } from "../../app/slices/user.slice";
import ReactModal from "react-modal";

function Form() {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [birthday, setBirthday] = useState();
	const [startDay, setStartDay] = useState();
	const [street, setStreet] = useState();
	const [state, setState] = useState();
	const [city, setCity] = useState();
	const [zip, setZip] = useState();
	const [department, setDepartment] = useState();

	const [openModal, setOpenModal] = useState(false);

	const dispatch = useDispatch();

	const employeeData = {
		firstName,
		lastName,
		birthday,
		startDay,
		street,
		city,
		state,
		zip,
		department,
		id: Date.now(),
	};

	const createEmployee = (e) => {
		e.preventDefault();
		dispatch(addUser(employeeData));
		console.log(employeeData);
		e.target.reset();
		setOpenModal(true);
	};

	function closeModal() {
		setOpenModal(false);
	}

	const customModal = {
		content: {
			backgroundContainer: "rgba(146, 146, 146, 0.6)",
			backgroundColor: "#93ad18",
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			boxShadow: "5px 5px 15px 5px rgba(0, 0, 0, 0.43)",
			color: "white",
		},
	};

	return (
		<div className="form">
			<Link className="btn" to="/employee">
				View Current Employees
			</Link>
			<form action="" onSubmit={(e) => createEmployee(e)}>
				<h2>Create Employee</h2>
				<Input
					type={"text"}
					required={"required"}
					name={"firstName"}
					label={"First Name"}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<Input
					type={"text"}
					required={"required"}
					name={"lastName"}
					label={"Last Name"}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<Input
					type={"date"}
					required={"required"}
					name={"birthday"}
					label={"Date of Birth"}
					onChange={(e) => setBirthday(e.target.value)}
				/>
				<Input
					type={"date"}
					required={"required"}
					name={"startDate"}
					label={"Start Date"}
					onChange={(e) => setStartDay(e.target.value)}
				/>
				<fieldset>
					<legend>Address</legend>
					<Input
						type={"text"}
						required={"required"}
						name={"street"}
						label={"Street"}
						onChange={(e) => setStreet(e.target.value)}
					/>
					<Input
						type={"text"}
						required={"required"}
						name={"city"}
						label={"City"}
						onChange={(e) => setCity(e.target.value)}
					/>
					<Dropdown
						name={"State"}
						required={"required"}
						datas={states}
						onChange={(e) => setState(e.target.value)}
					/>
					<Input
						type={"number"}
						required={"required"}
						name={"zip"}
						label={"ZIP Code"}
						onChange={(e) => setZip(e.target.value)}
					/>
				</fieldset>
				<Dropdown
					name={"Department"}
					required={"required"}
					datas={departments}
					onChange={(e) => setDepartment(e.target.value)}
				/>
				<input className="btn" type="submit" value="Save" />
			</form>
			<ReactModal
				style={customModal}
				isOpen={openModal}
				onRequestClose={closeModal}
				ariaHideApp={false}
			>
				<p>Employee created</p>
				<button className="btnmodal" onClick={closeModal}>
					Close
				</button>
			</ReactModal>
		</div>
	);
}

export default Form;

import React from "react";
import { filterTable, changeLength } from "../../app/slices/table.slice";
import { useDispatch } from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import Input from "../Input/Input";

function TableHeader() {
	const dispatch = useDispatch();

	return (
		<div className="TableHeader">
			<Dropdown
				name={"Show"}
				datas={[
					{ name: 10, value: 10 },
					{ name: 25, value: 25 },
					{ name: 50, value: 50 },
					{ name: 100, value: 100 },
				]}
				onChange={(e) => dispatch(changeLength(parseInt(e.target.value, 10)))}
			>
				entries
			</Dropdown>
			<Input
				type="text"
				label="First Name Search"
				name="search"
				onChange={(e) =>
					e.target.value.length >= 3
						? dispatch(filterTable(e.target.value))
						: dispatch(filterTable(null))
				}
			/>
		</div>
	);
}

export default TableHeader;

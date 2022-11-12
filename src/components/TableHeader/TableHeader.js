/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { filterTable, changeLength } from "../../app/slices/table.slice";
import { useDispatch } from "react-redux";
import Dropdown_menu from "dropdown-menu_op";
import Input from "../Input/Input";

function TableHeader() {
	const dispatch = useDispatch();

	return (
		<div className="TableHeader">
			<Dropdown_menu
				name={"Show"}
				datas={[
					{ name: 5, value: 5 },
					{ name: 10, value: 10 },
					{ name: 25, value: 25 },
					{ name: 50, value: 50 },
				]}
				onChange={(e) => dispatch(changeLength(parseInt(e.target.value, 10)))}
			>
				entries
			</Dropdown_menu>
			<Input
				type="text"
				label="Search"
				name="search"
				onChange={(e) =>
					e.target.value.length >= 1
						? dispatch(filterTable(e.target.value))
						: dispatch(filterTable(null))
				}
			/>
		</div>
	);
}

export default TableHeader;

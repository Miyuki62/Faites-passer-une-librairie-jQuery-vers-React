import PropTypes from "prop-types";

/**
 *
 * @returns custom Dropdown
 */

function Dropdown({ name, datas, onChange, required }) {
	return (
		<div className="input">
			<label className="input__label" htmlFor={name}>
				{name}
			</label>
			<select
				className="input__input"
				name={name}
				id={name}
				onChange={onChange}
				required={required}
			>
				{datas.map((data) => (
					<option key={data.name} value={data.value}>
						{data.name}
					</option>
				))}
			</select>
		</div>
	);
}

export default Dropdown;

Dropdown.propTypes = {
	name: PropTypes.string,
	datas: PropTypes.array,
	onChange: PropTypes.func,
};

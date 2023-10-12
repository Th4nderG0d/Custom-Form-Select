import { Controller, useFormContext } from "react-hook-form";
import { SelectPropsTypes } from "./types";
import Select from "react-select";
import { Asterisk, FormSelectContainer, Label, LabelContainer } from "./styles";
import { DropdownIndicator, Menu } from "./helpers";

const FormSelect = ({
	name,
	options,
	label,
	asterisk = true,
	isMulti = false,
	isClearable = false,
	isDisabled = false,
	openMenuOnClick = true,
	noOptionsMessage = () => "No options availbale",
	placeholder = "Select your option",
}: SelectPropsTypes) => {
	const { control } = useFormContext();
	return (
		<FormSelectContainer>
			<LabelContainer>
				{label && <Label>{label}</Label>}
				{asterisk && <Asterisk> * </Asterisk>}
			</LabelContainer>
			<Controller
				control={control}
				name={name}
				render={({ field: { value, onChange } }) => (
					<Select
						components={{
							DropdownIndicator: openMenuOnClick
								? DropdownIndicator
								: () => null,
							Menu,
						}}
						value={value}
						options={options}
						onChange={onChange}
						placeholder={placeholder}
						noOptionsMessage={noOptionsMessage}
						isMulti={isMulti}
						isClearable={isClearable}
						isDisabled={isDisabled}
						openMenuOnClick={openMenuOnClick}
					/>
				)}
			/>
		</FormSelectContainer>
	);
};

export default FormSelect;

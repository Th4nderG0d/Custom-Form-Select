import { FormProvider, useForm } from "react-hook-form";
import FormSelect from "./Components/FormSelect";
import { optionsTypes } from "./Components/FormSelect/types";

const App = () => {
	const methods = useForm({
		defaultValues: { defaultSelect: { label: "Option 2", value: 2 } },
	});
	const options: optionsTypes[] = [
		{ value: 1, label: "Option 1" },
		{ value: 2, label: "Option 2" },
		{ value: 3, label: "Option 3" },
		{ value: 4, label: "Option 4" },
		{ value: 5, label: "Option 5" },
	];
	return (
		<FormProvider {...methods}>
			<FormSelect
				name={"defaultSelect"}
				label={"Default Select"}
				asterisk={true}
				options={options}
				placeholder={"Select options"}
				isClearable
				noOptionsMessage={() => "No options available"}
			/>
			<FormSelect
				name={"singleSelect"}
				label={"Single Select"}
				asterisk={true}
				options={options}
				placeholder={"Select options"}
				isClearable
				noOptionsMessage={() => "No options available"}
			/>
			<FormSelect
				name={"multiSelect"}
				label={"Multi Select"}
				asterisk={true}
				options={options}
				placeholder={"Select multiple options"}
				noOptionsMessage={() => "No options available"}
				isMulti
			/>
			<FormSelect
				name={"disabledSelect"}
				label={"Disabled Select"}
				asterisk={false}
				options={options}
				placeholder={"Disabled :("}
				noOptionsMessage={() => "No options available"}
				isDisabled
			/>
			<FormSelect
				name={"dropdownSelect"}
				label={"Search Select"}
				asterisk={false}
				options={options}
				placeholder={"Type to open dropdown"}
				noOptionsMessage={() => "No options available"}
				openMenuOnClick={false}
			/>
		</FormProvider>
	);
};

export default App;

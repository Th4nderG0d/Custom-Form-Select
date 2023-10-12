import { components } from "react-select";

export const DropdownIndicator = (props: any) => {
	const { isDisabled } = props;

	return (
		<components.DropdownIndicator {...props}>
			{!isDisabled ? null : !null}
		</components.DropdownIndicator>
	);
};

export const Menu = (props: any) => {
	if (
		props.selectProps.inputValue.length === 0 &&
		!props.selectProps.openMenuOnClick
	)
		return null;
	return <components.Menu {...props} />;
};

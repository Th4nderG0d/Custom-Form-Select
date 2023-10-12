export type optionsTypes = {
	value: string | number | boolean;
	label: string | number | boolean;
};
export type SelectPropsTypes = {
	name: string;
	options: optionsTypes[] | [];
	label: string;
	asterisk: boolean;
	isMulti?: boolean;
	placeholder?: string;
	isClearable?: boolean;
	isDisabled?: boolean;
	openMenuOnClick?: boolean;
	noOptionsMessage: ({ inputValue }: { inputValue: string }) => string | null;
};

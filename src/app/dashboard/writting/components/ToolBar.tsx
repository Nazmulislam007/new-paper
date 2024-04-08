const colors = ["red", "green", "blue", "orange", "violet"];
const formats = [
	[
		{
			className: "ql-header",
			value: "1",
			key: 1,
		},
		{
			className: "ql-header",
			value: "2",
			key: 2,
		},
		{ className: "ql-bold", key: 3 },
		{ className: "ql-underline", key: 4 },
		{
			className: "ql-blockquote",
			key: 5,
		},
		{
			className: "ql-list",
			value: "bullet",
			key: 6,
		},
		{ className: "ql-link", key: 7 },
	],
];

const renderOptions = (formatData: any) => {
	const { className, options, key } = formatData;
	return (
		<select className={className} key={key}>
			<option selected />
			{options.map((value: any) => {
				return <option value={value} key={value} />;
			})}
		</select>
	);
};
const renderSingle = (formatData: any) => {
	const { className, value, key } = formatData;
	return <button type="button" key={key} className={className} value={value} />;
};

const Toolbar = () => (
	<div id="toolbar">
		{formats.map((classes, i) => {
			return (
				<span className="ql-formats" key={i}>
					{classes.map((formatData: any) => {
						return formatData.options
							? renderOptions(formatData)
							: renderSingle(formatData);
					})}
				</span>
			);
		})}
	</div>
);
export default Toolbar;

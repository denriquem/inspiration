import classes from "./SearchBar.module.css";

const SearchBar = (props: any) => {
	const handleFilter = (e: any) => {
		const searchWord = e.target.value.toLowerCase();
		props.handleFilter(searchWord);
	};

	return (
		<div className={classes.searchBox}>
			<div className={classes.searchInput}>
				<input
					type="text"
					placeholder="search for quotes..."
					onChange={handleFilter}
				/>
				<div className="searchItem"></div>
			</div>
		</div>
	);
};

export default SearchBar;

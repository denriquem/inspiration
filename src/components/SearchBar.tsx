import React from "react";

const SearchBar = () => {
	return (
		<div className="search">
			<div className="searchInputs">
				<input type="text" placeholder="search for quotes..." />
				<div className="searchItem"></div>
			</div>
			<div className="dataResult"></div>
		</div>
	);
};

export default SearchBar;

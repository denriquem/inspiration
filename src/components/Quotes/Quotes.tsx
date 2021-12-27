import { useEffect, useState } from "react";
import QuoteItem from "./QuoteItem";
import classes from "./Quotes.module.css";
import Card from "../UI/Card";
import getQuotes from "../apiCalls/getQuotes";
import { Fragment } from "react";

const Quotes = () => {
	const [quotes, setQuotes] = useState([]);
	const [filteredQuotes, setFilteredQuotes] = useState([]);

	useEffect(() => {
		getQuotes(setQuotes);
	}, []);

	const shuffleClickHandler = (e: any) => {
		getQuotes(setQuotes);
	};

	const handleFilter = (e: any) => {
		const searchWord = e.target.value.toLowerCase();
		const newFilter = quotes.filter((item: any) => {
			return (
				item.quote.toLowerCase().includes(searchWord) ||
				item.author.toLowerCase().includes(searchWord)
			);
		});
		setFilteredQuotes(newFilter);
	};

	let data;

	if (filteredQuotes.length !== 0) {
		data = filteredQuotes;
	} else {
		data = quotes;
	}

	const quoteList = data.slice(0, 4).map((quote, index) => {
		return <QuoteItem quote={quote} key={index} />;
	});

	return (
		<Fragment>
			<div className="search">
				<div className="searchInputs">
					<input
						type="text"
						placeholder="search for quotes..."
						onChange={handleFilter}
					/>
					<div className="searchItem"></div>
				</div>
			</div>
			<section className={classes.quotes}>
				<button className={classes.shuffleButton} onClick={shuffleClickHandler}>
					<i className="fas fa-plus-circle"></i>
				</button>
				<Card>
					<ul>{quoteList}</ul>
				</Card>
			</section>
		</Fragment>
	);
};

export default Quotes;

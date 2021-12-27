import { useEffect, useState } from "react";
import QuoteItem from "./QuoteItem";
import classes from "./Quotes.module.css";
import Card from "../UI/Card";
import getQuotes from "../apiCalls/getQuotes";

const Quotes = () => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		getQuotes(setQuotes);
	}, []);

	const shuffleClickHandler = (e: any) => {
		getQuotes(setQuotes);
	};

	const quoteList = quotes.map((quote, index) => {
		return <QuoteItem quote={quote} key={index} />;
	});

	return (
		<section className={classes.quotes}>
			<button className={classes.shuffleButton} onClick={shuffleClickHandler}>
				<i className="fas fa-plus-circle"></i>
			</button>
			<Card>
				<ul>{quoteList}</ul>
			</Card>
		</section>
	);
};

export default Quotes;

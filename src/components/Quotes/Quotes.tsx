import { useEffect, useState } from "react";
import QuoteItem from "./QuoteItem";
import classes from "./Quotes.module.css";
import Card from "../UI/Card";
import axios from "axios";

const Quotes = () => {
	const rapidKey = process.env.REACT_APP_KEY as string;

	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		const getQuotes = async () => {
			const res = await axios.get(
				"https://demotivational-quotes.p.rapidapi.com/api/quotes/all",
				{
					headers: {
						"x-rapidapi-host": "demotivational-quotes.p.rapidapi.com",
						"x-rapidapi-key": rapidKey,
					},
				}
			);
			let shuffled = res.data.sort(() => Math.random() - 0.5);
			setQuotes(shuffled.slice(0, 4));
			try {
			} catch (err) {
				console.log(err);
			}
		};
		getQuotes();
	}, []);

	const quoteList = quotes.map((quote, index) => {
		return <QuoteItem quote={quote} key={index} />;
	});

	console.log(quotes);

	return (
		<section className={classes.quotes}>
			<Card>
				<ul>{quoteList}</ul>
			</Card>
		</section>
	);
};

export default Quotes;

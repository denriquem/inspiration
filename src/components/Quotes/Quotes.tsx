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
			console.log(res);
			setQuotes(res.data.slice(0, 4));
			try {
			} catch (err) {
				console.log(err);
			}
		};
		getQuotes();
	}, []);

	const quoteList = quotes.map((quote) => {
		return <QuoteItem quote={quote} />;
	});

	return (
		<section className={classes.quotes}>
			<Card>
				<ul>{quoteList}</ul>
			</Card>
		</section>
	);
};

export default Quotes;

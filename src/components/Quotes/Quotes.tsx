import { useEffect, useState } from "react";
import axios from "axios";

const Quotes = () => {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		const rapidKey = process.env.REACT_APP_KEY as string;
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
			setQuotes(res.data);
		};
		getQuotes();
	}, []);

	return <h1>Quote quote quote</h1>;
};

export default Quotes;

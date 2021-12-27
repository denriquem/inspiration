import axios from "axios";

const getQuotes = async (setState: any) => {
	const rapidKey = process.env.REACT_APP_KEY as string;

	try {
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
		setState(shuffled);
	} catch (err) {
		console.log(err);
	}
};

export default getQuotes;

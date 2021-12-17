import classes from "./QuoteItem.module.css";

const QuoteItem = (props: any) => {
	console.log(props);
	return (
		<li className={classes.quote}>
			<div>
				<h3>{props.quote.quote}</h3>
				<h4>{props.quote.author}</h4>
			</div>
		</li>
	);
};

export default QuoteItem;

import { Fragment } from "react";
import Header from "./components/UI/Header";
import classes from "./App.module.css";
import Quotes from "./components/Quotes/Quotes";
import QuoteSummary from "./components/UI/QuoteSummary";

const App = () => {
	return (
		<Fragment>
			<Header />
			<div className={classes.container}>
				<QuoteSummary />
				<Quotes />
			</div>
		</Fragment>
	);
};

export default App;

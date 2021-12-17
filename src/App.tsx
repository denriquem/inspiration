import { Fragment } from "react";
import Header from "./components/UI/Header";
import classes from "./App.module.css";
import Quotes from "./components/Quotes/Quotes";

const App = () => {
	return (
		<Fragment>
			<Header />
			<div className={classes.container}>
				<Quotes />
			</div>
		</Fragment>
	);
};

export default App;

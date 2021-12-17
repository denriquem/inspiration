import { Fragment } from "react";
import Header from "./components/UI/Header";
import classes from "./App.module.css";

const App = () => {
	return (
		<Fragment>
			<Header />
			<div className={classes.container}></div>
		</Fragment>
	);
};

export default App;

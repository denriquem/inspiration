const shuffle = (array: any[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		let j: number = Math.floor(Math.random() * (i + 1));
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

export default shuffle;

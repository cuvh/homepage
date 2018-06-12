function localStorageTest() {
	var test = "test";
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch (e) {
		return false;
	}
}

class VariableStorage {
	cache = {};

	setItem(key, value) {
		this.cache[key] = value;
	}

	getItem(key) {
		return this.cache[key];
	}
}

class StoreService {
	constructor() {
		if (localStorageTest()) {
			this.instance = localStorage;
		} else {
			this.instance = new VariableStorage();
		}
	}

	setItem(key, value) {
		return this.instance.setItem(key, value);
	}

	getItem(key) {
		return this.instance.getItem(key);
	}
}

export default new StoreService();

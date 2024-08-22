export function getLocalStorageArray(key, defaultValue) {
    try {
      let value = localStorage.getItem(key);
      if (value === null) {
        return defaultValue;
      }
  
      let array = JSON.parse(value);
      if (!Array.isArray(array)) {
        return defaultValue;
      }
      return array;
    } catch (e) {
      console.log(e)
      return defaultValue;
    }
  }
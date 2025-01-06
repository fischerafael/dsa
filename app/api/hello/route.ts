export async function GET(request: Request) {
  const listOfNumbers = [1, 2, 5, 6, 7, 12, 24, 55, 77, 234, 342, 23524];

  const result = binarySearchNumbers(listOfNumbers, 4);

  const listOfStrings = ["a", "b", "c", "f", "i", "j", "l", "m", "o", "r"];

  const resName = binarySearchName(listOfStrings, "o");

  return new Response(`${result} | ${resName}`);
}

//

const binarySearchName = (names: string[], name: string) => {
  let low = 0;
  let high = names.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (name === names[middle]) {
      return middle;
    }
    if (name < names[middle]) {
      high = middle - 1;
    }
    if (name > names[middle]) {
      low = middle + 1;
    }
  }

  return "not found";
};

export const binarySearchNumbers = (arr: number[], searchedValue: number) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const middle = (low + high) / 2;
    const middleInt = Math.floor(middle);

    const isSearchedMiddle = arr[middleInt] === searchedValue;
    if (isSearchedMiddle) {
      return middleInt;
    }

    const isSearchedHigher = searchedValue > arr[middleInt];
    if (isSearchedHigher) {
      // discard lower values
      low = middleInt + 1;
    }

    const isSearchedLower = searchedValue < arr[middleInt];
    if (isSearchedLower) {
      // discard high values
      high = middleInt - 1;
    }
  }

  // if not found, return -1
  return -1;
};

/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
export default function countR(word) {
  const count = word.split("").reduce((acc, curr) => {
    return curr === "R" ? acc + 1 : acc;
  }, 0);
  return count;
}

/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  let penalty = 0;
  if (password === null) {
    return penalty;
  }
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  //

  const regex = /(\w)\1{1,}/g;
  const sequences = password.match(regex);

  if (sequences) {
    sequences.forEach((seq) => {
      if (seq.length === 2) {
        penalty += 1;
      } else if (seq.length >= 3) {
        penalty += 2;
      }
    });
  }

  return penalty;
}

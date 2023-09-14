/**
 * This function takes in a sentence and prints out one character at a time, mimicking a typewriter.
 * @param {string} sentence - Inut string to typewrite
 */

const typewriter = function(sentence) {

  let delay = 0;
  let letterCount = 0;

  for (const letter of sentence) {
    setTimeout(() => {
      process.stdout.write(letter);
      letterCount++;

      if (letterCount === sentence.length) {
        process.stdout.write('\n');
      }
    }, delay);
    delay += 50;
  }
};

/* test
typewriter("hello there from lighthouse labs");*/
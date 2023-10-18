const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name ? ", (nama) => {
  rl.question("What is your phone number ? ", (hp) => {
    rl.question("What is your email ? ", (email) => {
      console.log(`Your name is ${nama}, your phone number is ${hp}, and your email is ${email}`);

      rl.close();
    });
  });
});

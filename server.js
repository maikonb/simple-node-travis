const msg = process.env.MESSAGE;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${msg}`);
    await sleep(5000);
  }
}

main();

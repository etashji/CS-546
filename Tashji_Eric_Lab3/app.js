import * as authors from "./authors.js";

async function main() {
    console.log(await authors.getAuthors());
}

main();
// let name = "Bruce"
// let nameLength=name.nameLength
// console.log(nameLength)

let url_string = window.location;
let url = new URL(url_string);

let username = url.searchParams.get ("username")
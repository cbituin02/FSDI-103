function sayHello(Name, place) {
    //body of the function
    console.log("Hello world " + Name + " from " + place);
    let template = `<h2>Hello world ${Name} from <span class="place">${place}</span></h2>`;
    return template;
}
let markInfo= (sayHello("Mark", "USA"));
document.write(markInfo);
sayHello("April", "USA");
sayHello("Arturo", "Mexico");
sayHello("Caleb", "USA");
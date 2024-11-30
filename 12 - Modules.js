// JavaScript Modules
// JavaScript modules are a way to break down code into reusable, smaller pieces and manage dependencies effectively. Each module encapsulates its own code and only exposes the parts it wants to share with other modules.

// Why Use Modules?
// Maintainability: Code is easier to manage, debug, and maintain by dividing it into smaller parts.
// Reusability: Modules can be reused across different projects or parts of the application.
// Encapsulation: Variables and functions defined in a module are not globally accessible unless explicitly exported.
// Dependency Management: Modules allow the inclusion of only the necessary parts of a library.

// Eaxmple #1
// import { name, age } from "./person.js";
// console.log(name, age);

// Eaxmple #2
import Message from "./person.js";
console.log(Message());

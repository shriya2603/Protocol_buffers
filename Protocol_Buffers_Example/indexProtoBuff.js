const Schema = require("./persons_pb");
const fs = require("fs");

const riya = new Schema.Person();
riya.setId(1001);
riya.setGender("Female");
riya.setName("Riya");
riya.setSalary(10000);

const rita = new Schema.Person();
rita.setId(1002);
rita.setGender("Female");
rita.setName("Rita");
rita.setSalary(10000);

const ram = new Schema.Person();
ram.setId(1003);
ram.setGender("Male");
ram.setName("Ram");
ram.setSalary(10000);

const persons = new Schema.Persons();
persons.addPerson(riya);
persons.addPerson(rita);
persons.addPerson(ram);

console.log("data "+JSON.stringify(persons));
const bytes = persons.serializeBinary();
console.log("binary data "+bytes);
fs.writeFileSync("binaryData",bytes);

const employees2 = new Schema.Persons.deserializeBinary(bytes);
console.log("Deserialize data "+JSON.stringify(employees2));
const fs = require("fs");

const persons =[];

const ria = {
    "id": "1001",
    "name": "Riya",
    "salary": "100000",
    "gender": "Female",
};
persons.push(ria);

const rita ={
    "id": "1002",
    "name": "Rita",
    "salary": "200000",
    "gender": "Female",
};
persons.push(rita);

const ram = {
    "id": "1003",
    "name": "Rita",
    "salary": "200000",
    "gender": "male",
};
persons.push(ram);

fs.writeFileSync("jsonData.json", JSON.stringify(persons));
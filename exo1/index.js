console.log("hello world")
const mavariable = process.env["mavariable"] || null
if (mavariable == null) console.log("variable non defini, veuillez la definir")
else console.log(mavariable)
console.log(process.env["envContext"] == "dev" && "Je suis en dev" || process.env["envContext"] == "prod" && "Je suis en prod" || "pas d'environneement selectionné")
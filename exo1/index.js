console.log("hello world")
const mavariable = process.env["mavariable"] || null
if (mavariable == null) console.log("variable non defini, veuillez la definir")
else console.log(mavariable)
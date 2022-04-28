const dotenv = require('dotenv');
dotenv.config();
if (process.env.UNEVARIABLE) console.log(process.env.UNEVARIABLE);
else console.log("aucune variable d'environnement presentes");

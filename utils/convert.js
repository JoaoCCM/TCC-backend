var convert = require("xml-js");
const fs = require("fs");

var xml = fs.readFileSync(__dirname + "/teste01.xml");

var result2 = convert.xml2json(
    xml,
    // .replace(/[\n\r]/g, "\\n")
    // .replace(/&/g, "&amp;")
    // .replace(/-/g, "&#45;"),
    {
        compact: true,
        spaces: 4,
    }
);

//se o arquivo não existir o filesystem cria
fs.writeFileSync("./teste01.json", result2, (err) => {
    console.error(err);
});

const filterJSON = (data, id) => {
    const filteredFields = ["identificacao", "idiomas"];
    const keys = Object.keys(data);

    // const filterInternValues = {
    //     identificacao: ["nome_completo"],
    // };

    const filteredJson = keys
        .filter((key) => filteredFields.includes(key))
        .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});

    return { lattesId: id, ...filteredJson };
};

var json = require("./teste01.json");

const filteredJson = {};

filteredJson.items = json.curriculo_lattes.pesquisador.map((it) =>
    filterJSON(it, it._attributes.id)
);

console.log(filteredJson);

fs.writeFileSync("./filteredJSON.json", JSON.stringify(filteredJson), (err) => {
    console.error(err);
});

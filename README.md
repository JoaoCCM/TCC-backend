# `Connect<IF>`

O arquivo professores.xml for extraído do ScriptLattes, ao passar a lista que professores do IFSP-BRA

-   ao rodar `node utils/convert.js` ele irá converter o arquivo `professores.xml` para um arquivo JSON
-   e ao rodar `node utils/filterJSON.js` tem a função de filtrar o json com base nos keys passados no arquivo `utils/constants/filteredKeys.js`
-   por fim o json filtrado se encontra na caminho `dist/filteredJSON.json`

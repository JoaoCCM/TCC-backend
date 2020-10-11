call apoc.load.json("file://D:/filteredJSON.json") yield value
unwind value.items as p
merge (professor:Professor {id:p.lattesId}) ON CREATE SET professor.nome = p.identificacao.nome_completo._text, professor.sexo = p.identificacao.sexo._text
foreach (i in p.idiomas.idioma | merge (idioma:Idioma {nome:i.nome._text}) MERGE (professor)-[:temConhecimento {proficiencia: i.proficiencia._text}]->(idioma))

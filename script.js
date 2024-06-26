function gerarAlunos(listaAlunos) {
  var acumulado =
    "<table><thead><tr><th>Nome</th><th>RA</th><th>Nota P1</th><th>Nota P2</th><th>Media</th></tr></thead><tbody></tr>";
  var mediaAluno = 0;
  var media = 0;
  var somaNotaP1 = 0;
  var somaNotaP2 = 0;
  var aprovado = 0;
  var reprovado = 0;

  for (let i = 0; i < listaAlunos.length; i++) {
    if (listaAlunos[i].notaP1 >= 6) {
      notaP1 = "<td style='color:blue;'>" + listaAlunos[i].notaP1 + "</td>";
    } else {
      notaP1 = "<td style='color:red;'>" + listaAlunos[i].notaP1 + "</td>";
    }
    if (listaAlunos[i].notaP2 >= 6) {
      notaP2 = "<td style='color:blue;'>" + listaAlunos[i].notaP2 + "</td>";
    } else {
      notaP2 = "<td style='color:red;'>" + listaAlunos[i].notaP2 + "</td>";
    }

    mediaAluno = (listaAlunos[i].notaP1 + listaAlunos[i].notaP2) / 2;
    if (mediaAluno >= 6) {
      media = "<td style='color:blue;'>" + mediaAluno + "</td>";
    } else {
      media = "<td style='color:red;'>" + mediaAluno + "</td>";
    }

    if (mediaAluno >= 6) {
      aprovado++;
    } else {
      reprovado++;
    }

    somaNotaP1 = somaNotaP1 + listaAlunos[i].notaP1;
    somaNotaP2 = somaNotaP2 + listaAlunos[i].notaP2;

    acumulado =
      acumulado +
      "<tr><td>" +
      listaAlunos[i].nome +
      "</td><td>" +
      listaAlunos[i].RA +
      "</td>" +
      notaP1 +
      notaP2 +
      media +
      "</tr>";
  }

  acumulado +=
    "</tbody></table><section><strong>Media P1: " +
    somaNotaP1 / listaAlunos.length +
    "</strong><br><strong>Media P2: " +
    somaNotaP2 / listaAlunos.length +
    "</strong><br><strong>Aprovados: " +
    aprovado +
    "</strong><br><strong>Reprovados: " +
    reprovado +
    "</section>";
  document.write(acumulado);
}

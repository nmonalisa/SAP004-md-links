const regex = /\[(.*)\][\<|\(](\bhttps?:\/\/\b.*)[\)|\>]/gm;
const str = `ola..aqui esta um monte de link pra você testar!Boa sorte...
[Este é o meu link!]<https://www2.google.com/ola/deucerto/>.E se tiver outro texto aqui não tem problema.
[Link n°33-85](https://www.google.com9)
[mais um link né?](https://www.goog22le.com)
[isso é um link.](https://google.br)
[Meu link.](https://www.google.com)
e sei eu colocar oto texto aqui vai acontecer o que? https://www.google.br. Mas agora ele esta pegando tudo!`;
let m;

while ((m = regex.exec(str)) !== null) {
  // This is necessary to avoid infinite loops with zero-width matches
  if (m.index === regex.lastIndex) {
    regex.lastIndex++;
  }

  // The result can be accessed through the `m`-variable.
  m.forEach((match, groupIndex) => {
    console.log(`Found match, group ${groupIndex}: ${match}`);
  });
}
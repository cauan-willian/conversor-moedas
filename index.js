const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log('Bem vindo ao Bot conversor 🤖💰');



async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const moedaBase = readlineSync.question('Informe uma moeda base: ') || 'dolar';
  const moedaFinal = readlineSync.question('Informe uma moeda desejada:') || 'real';

  const qualquerUrl = `https://www.google.com/search?client=firefox-b-d&q=${moedaBase}+para+${moedaFinal}`;
  await page.goto(qualquerUrl);
  // await page.screenshot({path: 'example.png'});

  const resultado = await page.evaluate(() => {
    return document.querySelector('.lWzCpb.a61j6').value;
  });

  console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)
  await browser.close();
}

robo();
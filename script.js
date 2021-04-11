let fs=require("fs");

let puppeteer = require("puppeteer");


async function scrape(url)
 {
  let browser = await puppeteer.launch
  (
    { 
      headless: false,
      defaultViewport: false
    }
 );


 let data1=fs.readFileSync("data1.txt","utf-8");
  
 let page = await browser.newPage();
  
 await page.goto(url);
  
 await page.waitForSelector("span [title='Arpit Mait H3']");
 
 let target = await page.$("span [title='Arpit Mait H3']");
  
 await target.click();
  
 let inp = await page.$("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text" );


  for (let i = 0; i < 1; i++) 
  {
      await inp.type(data1);

      await page.keyboard.press("Enter");

  }


  let data2=fs.readFileSync("data2.txt","utf-8");
 
  await page.waitForSelector("span [title='Yatharth Mittal']");
  
  let target2 = await page.$("span [title='Yatharth Mittal']");
  
  await target2.click();
  
  let inp2 = await page.$("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text" );


  for (let i = 0; i < 1; i++) 
  {
      await inp2.type(data2);
      await page.keyboard.press("Enter");
      
  }


  let data3=fs.readFileSync("data3.txt","utf-8");
  
  await page.waitForSelector("span [title='Mukul']");
  
  let target3 = await page.$("span [title='Mukul']");
 
  await target3.click();
  
  let inp3 = await page.$("#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text" );



  for (let i = 0; i < 1; i++) 
  {
      await inp3.type(data3);
      await page.keyboard.press("Enter");

  }
  

}

scrape("https://web.whatsapp.com");
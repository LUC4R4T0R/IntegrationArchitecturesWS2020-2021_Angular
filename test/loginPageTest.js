const {Builder, By, Key, util} = require("selenium-webdriver");
async function example(){
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:4200/");
  await driver.findElement(By.id("uname"));
  await driver.findElement(By.id("pword"));
  await driver.findElement(By.id("submit")).sendKeys("luca", Key.RETURN);
}
example().then().catch();

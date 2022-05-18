Feature("My First Test");

Scenario("test something", ({ I }) => {
  // I.amOnPage("http://localhost:8081/");
  I.amOnPage("http://host.docker.internal:8081/");
  I.seeElement('//*[@id="app"]/nav/a');
});

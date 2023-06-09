
describe("Test body of generic websites",  {
  retries: {
    runMode: 2,
    openMode: 1,
  },
}, () => {
  const urls = [
    {
      "name": "SEP",
      "url": "https://sep.energyapps.ch"
    },
    {
      "name": "Geoimpact",
      "url": "https://www.geoimpact.ch"
    },
    {
      "name": "SwissEnergyPlanning",
      "url": "https://www.swissenergyplanning.ch"
    },
    {
      "name": "Reporterenergie",
      "url": "https://reporterenergie.ch/"
    },
    {
      "name": "Reporterenergetico",
      "url": "https://reporterenergetico.ch/"
    },
    {
      "name": "Energiereporter",
      "url": "https://energiereporter.ch/"
    }
  ]
  function testUrl(urlElement: {url: string}): void {
    cy.visit(urlElement.url);
    cy.get("body").should("exist");
  }
  urls.forEach(urlElement => {
    Cypress.config('defaultCommandTimeout', 10 * 1000);
    it(`opens ${urlElement.url}`,() => {
      testUrl(urlElement);
    })
  });
})
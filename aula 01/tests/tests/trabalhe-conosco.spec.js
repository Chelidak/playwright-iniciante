import { test, expect } from '@playwright/test';

test('Botão deve estar escrito "CONFIRA NOSSAS VAGAS', async ({ page }) => {
  
  //DADO QUE O USUÁRIO ENTRA NA URL X
  //Aqui estou colocando a URL do site
  await page.goto("https://careers.rentcars.com/")
  //QUANDO VISUALIZA O BOTÃO DE VAGAS 
  //ENTÃO deve conter o texto confira ...
  //espera-se que(elemento da página).tenha o critério de aceite
  await expect(page.locator(".btn-careers").nth(0)).toContainText("Confira nossas vagas")});


test('Formulário quando digita só o nome, deve ter mensagem de erro - email e mensagem obrigatórios', async({page}) => {
  
  await page.goto("https://careers.rentcars.com/")

  await page.getByPlaceholder("Nome completo").fill("Lucas")

  await page.locator(".btn").nth(0).click()

  await expect(page.locator(".response-container").nth(0)).toBeVisible()

  await expect(page.locator(".response-container").nth(0)).toContainText("Por favor, observer os erros abaixos:")

  await expect(page.locator(".response-container").nth(0)).toContainText("O e-mail é obrigatório")

  await expect(page.locator(".response-container").nth(0)).toContainText("A messagem é obrigatória.")



});


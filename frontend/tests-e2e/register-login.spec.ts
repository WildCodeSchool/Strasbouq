import { test, expect } from "@playwright/test";

test("User subscription", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	await page.getByRole("link").nth(1).click();

	await expect(page).toHaveURL("http://localhost:3000/login");

	await page.getByRole("link", { name: "S'inscrire" }).click();

	await expect(page).toHaveURL("http://localhost:3000/register");

	const prenom = await page.getByPlaceholder("Prénom");
	await prenom.fill("Adelina");

	const nom = await page.getByPlaceholder("Nom", { exact: true });
	await nom.fill("Aubert");

	const email = await page.getByPlaceholder("E-mail");
	await email.fill("adelina@gmail.copm");

	const password = await page.getByPlaceholder("Mot de passe");
	await password.fill("adelina");

	await page.getByLabel("").click();
	await page.getByRole("option", { name: "Paris" }).click();
	await page.getByRole("button", { name: "Envoyer" }).click();

	await expect(page).toHaveURL("http://localhost:3000/login");
});

test("User authentification", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	await page.getByRole("link").nth(1).click();

	await expect(page).toHaveURL("http://localhost:3000/login");

	const emailLogin = await page.getByLabel("Email *");
	await emailLogin.fill("adelina@gmail.com");

	const passwordLogin = await page.getByLabel("Mot de passe *");
	await passwordLogin.fill("adelina");

	await page.getByLabel("Se souvenir de moi").check();

	await page.getByRole("button", { name: "Envoyer" }).click();

	await page.goto("http://localhost:3000/");
});

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const output = fileURLToPath(new URL('../artifacts/website-preview/', import.meta.url));
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });

async function capture(name, viewport) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await page.locator('.energy-canvas-shell.is-ready').waitFor({ timeout: 15000 });
  await page.screenshot({ path: `${output}/${name}-top.png`, fullPage: false });
  await page.getByRole('button', { name: /Systems/ }).click();
  await page.waitForTimeout(600);
  await page.locator('.vision-figure').screenshot({ path: `${output}/${name}-system.png` });
  await page.locator('#research').scrollIntoViewIfNeeded();
  await page.locator('#research [data-reveal]').evaluateAll(items => items.forEach(item => item.classList.add('is-visible')));
  await page.waitForTimeout(1200);
  await page.locator('#research').screenshot({ path: `${output}/${name}-research.png` });
  await page.locator('#experience').scrollIntoViewIfNeeded();
  await page.locator('#experience [data-reveal]').evaluateAll(items => items.forEach(item => item.classList.add('is-visible')));
  await page.waitForTimeout(900);
  await page.locator('#experience').screenshot({ path: `${output}/${name}-experience.png` });
  await page.locator('#engineering').scrollIntoViewIfNeeded();
  await page.locator('#engineering [data-reveal]').evaluateAll(items => items.forEach(item => item.classList.add('is-visible')));
  await page.waitForTimeout(900);
  await page.locator('#engineering').screenshot({ path: `${output}/${name}-nextlab.png` });
  const metrics = await page.evaluate(() => ({
    viewport: { width: innerWidth, height: innerHeight },
    bodyWidth: document.body.scrollWidth,
    heroHeight: document.querySelector('.hero')?.getBoundingClientRect().height,
    canvas: document.querySelector('.energy-canvas')?.getBoundingClientRect().toJSON(),
    activeText: document.querySelector('.energy-caption')?.textContent,
  }));
  console.log(JSON.stringify({ name, metrics, errors }));
  await page.close();
}

await capture('desktop', { width: 1440, height: 1000 });
await capture('mobile', { width: 390, height: 844 });
await browser.close();

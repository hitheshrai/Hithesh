import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });

await page.setContent(`<!doctype html>
<html><head><meta charset="utf-8"><style>
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,300;6..72,400&family=Public+Sans:wght@400;500&display=swap');
  *{box-sizing:border-box}body{margin:0;background:#f5f2eb;color:#292c28;font-family:'Public Sans',sans-serif}
  main{width:1200px;height:630px;padding:66px 72px 56px;display:grid;grid-template-columns:1.55fr .68fr;gap:54px}
  .copy{display:flex;flex-direction:column}.eyebrow{font:500 16px 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#52564e}.dot{color:#91462d}
  h1{font:300 68px/.97 'Newsreader',serif;letter-spacing:-.035em;margin:54px 0 0}h1 span{color:#91462d}
  .foot{border-top:1px solid #d5d2c8;margin-top:auto;padding-top:24px;display:flex;justify-content:space-between;font-size:17px;color:#52564e}.url{color:#91462d}
  .visual{background:#eae5db;display:flex;flex-direction:column;padding:28px}.visual-label{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#52564e}
  svg{width:100%;margin:auto;color:#91462d}.visual-foot{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#52564e;text-align:center}
</style></head><body><main>
  <section class="copy"><div class="eyebrow">HITHESH RAI PURUSHOTHAMA <span class="dot">·</span> RESEARCH</div><h1>Solar materials.<br>Battery degradation.<br><span>Practical AI.</span></h1><div class="foot"><span>Materials · Measurements · Models</span><span class="url">hitheshrai.com</span></div></section>
  <section class="visual"><div class="visual-label">REFERENCE STRUCTURE</div><svg viewBox="0 0 300 330" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" opacity=".55"><path d="M55 95 150 42l95 58-3 132-94 55-95-58z"/><path d="m55 95 94 55 96-50M149 150l-1 137M53 229l96-79" stroke-dasharray="5 7"/></g><g fill="#b25d39" stroke="#91462d" stroke-width="2"><circle cx="55" cy="95" r="10"/><circle cx="150" cy="42" r="12"/><circle cx="245" cy="100" r="10"/><circle cx="53" cy="229" r="10"/><circle cx="148" cy="287" r="12"/><circle cx="242" cy="232" r="10"/><circle cx="149" cy="150" r="23"/></g></svg><div class="visual-foot">CsPbI₃ · Pm-3m</div></section>
</main></body></html>`);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/assets/og-redesign.png' });
await browser.close();

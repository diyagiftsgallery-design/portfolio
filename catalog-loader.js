// Loads the catalogue from the Google Sheet and replaces the static data
// from products-data.js. If anything fails (or the sheet has no products),
// the static data stays in place, so the page is never blank.
const catalogReady = (async () => {
  if (typeof API_URL === 'undefined' || API_URL.indexOf('PASTE') === 0) return;
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 10000);
    const res = await fetch(API_URL + '?action=catalog&t=' + Date.now(), { signal: ctl.signal });
    clearTimeout(timer);
    const d = await res.json();
    if (!d.ok || !Array.isArray(d.products) || !d.products.length) return;

    const cats = d.categories.slice().sort((a, b) => Number(a.order) - Number(b.order));
    Object.keys(CATEGORY_META).forEach(k => delete CATEGORY_META[k]);
    cats.forEach(c => { CATEGORY_META[c.slug] = { label: c.label, icon: c.icon || 'fa-gift' }; });

    PRODUCTS.length = 0;
    d.products.forEach(p => {
      if (!CATEGORY_META[p.category]) return;
      PRODUCTS.push({ category: p.category, name: p.name, img: p.img, alt: p.name });
    });
  } catch (err) {
    console.warn('Catalogue API unavailable, using built-in data.', err);
  }
})();
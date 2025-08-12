function initHitCounter() {
    const k = 'geoparty_hits_v1';
    let n = parseInt(localStorage.getItem(k) || '0', 10) + 1;
    localStorage.setItem(k, n);
    const hitsEl = document.getElementById('hits');
    const yearEl = document.getElementById('year');
    if (hitsEl) hitsEl.textContent = n.toString().padStart(7, '0');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

function initTicker() {
    const ticker = document.getElementById('quote');
    if (!ticker) {
        console.warn("Ticker element not found");
        return;
    }

    const pxPerSecond = 50;

    function setScrollSpeed() {
        const textWidth = ticker.scrollWidth;
        const duration = textWidth / pxPerSecond;
        ticker.style.setProperty('--scroll-speed', `${duration}s`);
        ticker.style.animation = 'none';
        ticker.offsetHeight; // trigger reflow
        ticker.style.animation = '';
    }

    setScrollSpeed();

    fetch('assets/text/quotes.txt')
        .then(res => {
            console.log("Fetching quotes from:", res.url);
            return res.text();
        })
        .then(text => {
            const lines = text.split('\n').map(l => l.trim()).filter(l => l);
            const quote = lines[Math.floor(Math.random() * lines.length)];
            ticker.textContent = `★ Welcome to the campaign hub ★ ${quote} ★ Wizard says: Save often ★ Under Construction forever... ★`;
        })
        .catch(err => {
            console.error("Failed to load quotes:", err);
            ticker.textContent = '★ Welcome to the campaign hub ★ Adventure awaits! ★ Wizard says: Save often ★ Under Construction forever ★';
        })
        .finally(setScrollSpeed);
}

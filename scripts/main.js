document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Load header/footer
        await loadPartial('header', 'partials/header.html');
        await loadPartial('footer', 'partials/footer.html');

        // Load common scripts
        await loadScript('/scripts/common/router.js');
        await loadScript('/scripts/common/ticker.js');
        await loadScript('/scripts/common/sparkles.js');
        await loadScript('/scripts/common/visitorCount.js');

        // Initialize routing
        route();
        window.addEventListener('hashchange', route);
    } catch (err) {
        console.error(err);
    }
});

function loadPartial(id, url) {
    return fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load partial: ${url}`);
            return res.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(s);
    });
}

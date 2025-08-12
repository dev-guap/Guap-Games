const routes = {
    summaries: 'pages/summaries.html',
    resources: 'pages/resources.html',
    about: 'pages/about.html',
    fun: 'pages/fun.html'
};

function route() {
    const hash = location.hash.replace('#', '') || 'summaries';
    const pagePath = routes[hash] || routes.summaries;

    document.querySelectorAll('.tab').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${hash}`);
    });

    fetch(pagePath)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${pagePath}`);
            return res.text();
        })
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(err => {
            document.getElementById('content').innerHTML =
                `<p style="color:red">${err.message}</p>`;
        });
}

function section(title) {
    const s = document.createElement('section');
    const h = document.createElement('h2'); h.textContent = title; s.append(h);
    const hr = document.createElement('div'); hr.className = 'hr'; s.append(hr);
    return s;
}

function div(cls, html) {
    const d = document.createElement('div');
    if (cls) d.className = cls;
    if (html) d.innerHTML = html;
    return d;
}

function wrapCard(inner) {
    const c = document.createElement('div');
    c.className = 'card';
    c.append(inner);
    return c;
}

function initSparkles() {
    const trail = [];
    window.addEventListener('mousemove', e => {
        const s = document.createElement('div');
        s.style.position = 'fixed';
        s.style.left = (e.clientX - 2) + 'px';
        s.style.top = (e.clientY - 2) + 'px';
        s.style.width = '4px';
        s.style.height = '4px';
        s.style.pointerEvents = 'none';
        s.style.background = 'radial-gradient(circle, #fff, rgba(255,216,110,.8) 30%, rgba(255,216,110,0) 70%)';
        s.style.filter = 'drop-shadow(0 0 6px #ffd86e)';
        document.body.appendChild(s);
        trail.push(s);
        setTimeout(() => {
            s.remove();
            trail.shift();
        }, 300);
    });
}

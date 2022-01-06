"use-strict";

export default function toggleTrack() {
    let state = this.getAttribute('state') === 'true' ? false : true;
    this.setAttribute('state', state);
    if (state) {
        document.addEventListener('mousemove', track);
    }
    else {
        document.removeEventListener('mousemove', track);
    }
}

function track(e) {
    console.log('x:', e.clientX, 'y:', e.clientY)
}

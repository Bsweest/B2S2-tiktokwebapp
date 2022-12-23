const menuButtons = document.querySelectorAll('.left .item');
const switchButtons = document.querySelectorAll('.switch-button');

const removeActive = () => {
    for (const button of menuButtons) {
        button.classList.remove('active');
    }
};

for (const button of menuButtons) {
    button.addEventListener('click', () => {
        removeActive();
        button.classList.add('active');
    });
}

for (const button of switchButtons) {
    button.addEventListener('click', () => {
        const wrapper = button.querySelector('.switch-wrapper');
        const icon = button.querySelector('span');
        if (wrapper.classList.contains('active')) {
            wrapper.classList.remove('active');
            icon.className = 'switch-icon';
        } else {
            wrapper.classList.add('active');
            icon.className = 'switched-icon';
        }
    });
}

document.querySelector('.icon-container').addEventListener('click', () => {
    document.querySelector('.preference-detail').classList.toggle('hidden');
});
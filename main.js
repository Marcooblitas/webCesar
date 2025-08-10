
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.typed');
    elements.forEach(el => {
        const strings = JSON.parse(el.getAttribute('data-strings').replace(/'/g, '"'));
        let i = 0;
        let j = 0;
        let current = [];
        let isDeleting = false;
        function type() {
            if (!isDeleting && j <= strings[i].length) {
                current = strings[i].substring(0, j++);
                el.textContent = current;
                setTimeout(type, 100);
            } else if (isDeleting && j >= 0) {
                current = strings[i].substring(0, j--);
                el.textContent = current;
                setTimeout(type, 50);
            } else if (!isDeleting && j > strings[i].length) {
                isDeleting = true;
                setTimeout(type, 1000);
            } else if (isDeleting && j < 0) {
                isDeleting = false;
                i = (i + 1) % strings.length;
                setTimeout(type, 200);
            }
        }
        type();
    });
});

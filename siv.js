function nextImage(container, items) {
    var active = container.getElementsByClassName('siv-active')[0];
    var active_index = [].slice.call(items).indexOf(active);
    var next_index = ++active_index;

    active.classList.remove('siv-active');
    active.classList.add('siv-hidden');

    if (next_index >= items.length) {
        next_index = 0;
    }

    var new_active = items[next_index];

    new_active.classList.remove('siv-hidden');
    new_active.classList.add('siv-active');
}

function prevImage(container, items) {
    var active = container.getElementsByClassName('siv-active')[0];
    var active_index = [].slice.call(items).indexOf(active);
    var next_index = --active_index;

    active.classList.remove('siv-active');
    active.classList.add('siv-hidden');

    if (next_index < 0) {
        next_index = items.length - 1;
    }

    var new_active = items[next_index];

    new_active.classList.remove('siv-hidden');
    new_active.classList.add('siv-active');
}

function init(container) {
    var items = container.getElementsByTagName('img');

    items[0].classList.add('siv');
    items[0].classList.add('siv-active');
    for (var i = 1; i < items.length; i++) {
        items[i].classList.add('siv');
        items[i].classList.add('siv-hidden');
    }

    var nextButton = document.createElement('button');
    nextButton.id = 'siv-next';
    var prevButton = document.createElement('button');
    prevButton.id = 'siv-prev';

    nextButton.innerHTML = 'Next';
    prevButton.innerHTML = 'Previous';

    nextButton.addEventListener('click', function () { nextImage(container, items) });
    prevButton.addEventListener('click', function () { prevImage(container, items) });

    container.appendChild(prevButton);
    container.appendChild(nextButton);
}

function main() {
    var container = document.getElementById('sivjs');
    init(container)
}

main()

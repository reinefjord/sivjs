// Javascript can't even modulo correct
function mmod(n, m) {
  return ((n % m) + m) % m;
}

function stepImage(container, items, steps) {
  var active = container.getElementsByClassName('siv-active')[0];
  var active_index = [].slice.call(items).indexOf(active);
  var next_index = mmod(active_index + steps, items.length);

  active.classList.remove('siv-active');
  active.classList.add('siv-hidden');

  var new_active = items[next_index];
  new_active.classList.remove('siv-hidden');
  new_active.classList.add('siv-active');
}

function wrap(element, ratio) {
  var wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'sivjs-wrapper')
  wrapper.style.paddingBottom = 1/ratio*100 + "%";
  element.parentNode.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}

function init(id, ratio) {
  var container = document.getElementById(id);

  wrap(container, ratio);
  container.classList.add('sivjs');

  var items = container.getElementsByTagName('img');

  items[0].classList.add('siv');
  items[0].classList.add('siv-active');
  for (var i = 1; i < items.length; i++) {
    items[i].classList.add('siv');
    items[i].classList.add('siv-hidden');
  }

  var nextButton = document.createElement('button');
  nextButton.classList.add('siv-next');
  var prevButton = document.createElement('button');
  prevButton.classList.add('siv-prev');

  nextButton.innerHTML = 'Next';
  prevButton.innerHTML = 'Previous';

  nextButton.addEventListener('click', function () { stepImage(container, items, 1) });
  prevButton.addEventListener('click', function () { stepImage(container, items, -1) });

  container.appendChild(prevButton);
  container.appendChild(nextButton);
}

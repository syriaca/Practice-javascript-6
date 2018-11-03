// STARTING POINT
const list = document.querySelector('.list');

// 1: Store the first child of the `ul` in the variable `firstItem`
let firstItem = list.firstElementChild;
firstItem.style.backgroundColor = '#04c5e6';

// 2: Using traversal, store the second list item in a variable named `nextItem`
let nextItem = firstItem.nextElementSibling;
nextItem.style.backgroundColor = '#b7c7d0';

// 3: Store the last child of the `ul` in a variable named `lastItem`
let lastItem = list.lastElementChild;
lastItem.style.backgroundColor = '#57d6ab';

// 4: Using traversal, store the second-to-last list item in a variable named `prevItem`
let prevItem = lastItem.previousElementSibling;
prevItem.style.backgroundColor = '#f36f49';

// 5: Store the nested div in a variable named `banner`
let banner = document.querySelector('div div');
banner.className = 'banner';

// 6: Using traversal, store the wrapper div in a variable named `wrapper`
let wrapper = document.querySelector('.wrapper');
wrapper.style.backgroundColor = '#fcfcfc';

// 7: Using traversal, store the body in a variable named `body`
let body = document.getElementsByTagName('body');
body.style.backgroundColor = '#f8fdf3';







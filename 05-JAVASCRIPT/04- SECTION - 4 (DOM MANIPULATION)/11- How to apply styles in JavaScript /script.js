//  Example 1: Inline Style Apply (Single Element)
const el = document.querySelector('i')
el.style.color = 'pink'
el.style.backgroundColor = 'green'
el.style.fontSize = '40px'
console.log(el.style)

// Example 2: Inline Style Apply (Multiple Elements)
const AllanchorTags = document.querySelectorAll('a')
AllanchorTags.forEach((anchor) => {
    anchor.style.color = 'red'
    anchor.style.textDecoration = 'none'
})

// for(let i = 0; i < AllanchorTags.length; i++) {
// AllanchorTags[i].style.color = 'teal'
// AllanchorTags[i].style.textDecoration = 'none'
// }

// Example 3: New Class Set (Single Class)
const newClassSet = document.querySelector('#heading')
newClassSet.classList.add('box')
console.log(newClassSet.classList)

// Example 4: Multiple Classes Add
const multiple = document.querySelector('h1')
multiple.classList.add('content', 'main', 'highlight')
console.log(multiple.classList)

// Example 5:
const select = document.querySelector('#uniqueBox')
// select.classList.add('lg')
// select.classList.add('lgBox')
select.classList.add('lg', 'lgBox')

// Example 6: Single Class Add
const a = document.querySelector('#hyper')
a.classList.add('item')

// Example 7:  Class Remove
const card = document.querySelector('h1')
// Single class remove
card.classList.remove('css-image')
// Multiple classes remove
card.classList.remove('content', 'main', 'highlight')

// Example 8: Toggle Class
const el2 = document.querySelector('#box')
el2.classList.toggle('card')

// Example 9: Toggle Class
const h = document.querySelector('#heading')
h.classList.toggle('box')

// Example 10:
const c = document.querySelector('#heading')
c.classList.add('hidden')

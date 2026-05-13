// Example 1: childNodes
const parent = document.querySelector('.parent')
console.log(parent.childNodes)
console.log(parent.childNodes[0])
console.log(parent.childNodes[1])

// Example 2: childNodes
const box = document.querySelector('#box')
console.log(box.childNodes)
console.log(box.childNodes[1].childNodes[0])

// Example 3: parentNode
const child = document.querySelector('p')
console.log(child.parentNode)
console.log(child.parentNode.parentNode)
console.log(child.parentNode.parentNode.parentNode)
console.log(child.parentNode.parentNode.parentNode.parentNode)

// Example 3: nodeValue
console.log(parent.childNodes[0].nodeValue)
console.log(parent.childNodes[0].nodeValue.trim())
console.log(parent.childNodes[1].nodeValue.trim())
console.log([parent.childNodes[3].nodeValue])
console.log([parent.childNodes[4].nodeValue])

// Example 4: nodeValue
const p = document.querySelector('#text')
console.log(p.childNodes[0].nodeValue)

// Example 5: nodeValue change
const para = document.querySelector('#para')
para.childNodes[0].nodeValue = 'Dom'
console.log(para.childNodes[0].nodeValue)

// Example 6: nodeType
console.log(parent.nodeType)
console.log(parent.childNodes[0].nodeType)
console.log(parent.childNodes[0].nodeType)
console.log(parent.childNodes[1].nodeType)
console.log(parent.childNodes[2].nodeType)
console.log(parent.childNodes[3].nodeType)
console.log(document.nodeType)

// Example 6: All Attribute Node
const attr = document.querySelector('#card')
console.log(attr.attributes)

// Example 7: Specific Attribute Node
console.log(attr.getAttributeNode('class'))
console.log(attr.getAttributeNode('name'))

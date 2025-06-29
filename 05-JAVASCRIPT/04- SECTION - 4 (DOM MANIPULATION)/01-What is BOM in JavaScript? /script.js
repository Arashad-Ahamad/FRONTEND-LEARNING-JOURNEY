// --------------------------------------
// Browser Object Model (BOM) 
// --------------------------------------

//  Example 1: window.location (URL info)
console.log(window);                          // Entire window object
console.log(window.location);                 // Full location object
console.log(window.location.href);            // Full URL
// window.location.href = 'https://www.google.com';  // Redirect to Google
// window.location.reload();                   // Reload the current page
console.log(window.location.pathname);        // Shows current path (e.g., /index.html)
console.log(window.location.hostname);        // Shows domain (e.g., 127.0.0.1)
// window.location.replace('https://www.google.com');  // Redirect without saving in history
// window.location.assign('https://www.google.com');   // Redirect and save in history

//  Example 2: window.history (browser navigation)
console.log(window.history);          // Shows history object
window.history.back();                // Go to previous page
// window.history.forward();          // Go to next page (if available)
// window.history.go(1);              // Forward 1 step
// window.history.go(-1);             // Backward 1 step
// window.history.go(0);              // Reload current page
console.log(window.history.length);   // How many pages are in history

//  Example 3: window size (viewport dimensions)
console.log(window.innerWidth);       // Current window width
console.log(window.innerHeight);      // Current window height

//  Example 4: window.open() (open new tab/window)
// window.open('https://www.google.com', '', 'width=600,height=400');

//  Example 5: window.close() (close current window)
// Note: Only closes windows opened via script
// window.close();

//  Example 6: window.resizeBy() (resize current window by amount)
window.resizeBy(100, 50);             // Increase size by 100px wide, 50px tall
window.resizeBy(-100, -50);           // Decrease size by 100px wide, 50px tall

//  Won't work if site is cross-origin (e.g., Google)
let win1 = window.open('', '', 'width=600,height=400');
win1.resizeBy(-100, -50);             // Works only on same-origin or blank

//  Example 7: window.resizeTo() (set exact size)
let win2 = window.open('', '', 'width=600,height=400');
win2.resizeTo(800, 600);              // Set window to 800x600

//  Example 8: moveTo() (move to absolute screen position)
let win3 = window.open('', '', 'width=600,height=400');
setTimeout(() => {
    win3.moveTo(200, 100);            // Move window to 200px from left, 100px from top
}, 2000);

//  Example 9: moveBy() (move window relative to current position)
let win4 = window.open('', '', 'width=600,height=400');
win4.moveBy(50, 50);                  // Move window 50px right & 50px down

//  Example 10: scroll() (scroll page to position)
window.scroll(0, 500);                // Scroll 500px down
window.scroll(100, 0);                // Scroll 100px right

//  Example 11: scrollTo() (scroll to specific location)
window.scrollTo(0, 500);              // Scroll to 500px vertical
window.scrollTo({
    top: 1000,
    left: 0,
    behavior: "smooth"               // Smooth scrolling effect
});

//  Example 12: scrollBy() (scroll from current location)
window.scrollBy(0, 300);              // Scroll 300px down from current position
window.scrollBy(100, 0);              // Scroll 100px right from current position

//  Example 13: print() (open print dialog)
// window.print();                    // Opens the print dialog box

//  Example 14: document (DOM root)
console.log(window.document);         // Entire HTML document (DOM)

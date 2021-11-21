// do-something.js
export function doSomething() {
  console.log('something incredible was done!');
}


// module.js
var someModule = (function () {
  function doSomething() {
    console.log('something incredible was done!');
  }
  return { doSomething };
})();


// application.js
someModule.doSomething();
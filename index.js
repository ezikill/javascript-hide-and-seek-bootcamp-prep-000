function getFirstSelector(selector){
  //return document.getElementsBySelector(selector);
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');

}
function increaseRankBy(n){
 const rankedLists = document.querySelectorAll('.ranked-list');
  for(var i = 0; i<rankedLists.length;i++){
    let rankedListsli = rankedLists[i].children
    for (var j = 0; j < rankedListsli.length; j++){
      rankedListsli[j].innerHTML = parseInt(rankedListsli[j].innerHTML) + n;

    }
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]

  }
  return node
  }


// - Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.
// - Define a function `nestedTarget()` that pulls a `.target` out of `#nested` (`#` is used for IDs in selectors — but you knew that because you
// [read the docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), right? :) ).
//(Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s. This method should work with arbitrary elements.)
// - Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`.
 //(You might need to make use of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
// - Define a function `deepestChild()` that pulls out the most deeply nested child
// from `div#grand-node`. (Remember, you can iterate over elements and call
// `querySelector()` and `querySelectorAll()` on them. This is challenging to
// implement correctly, but not beyond your ability!)

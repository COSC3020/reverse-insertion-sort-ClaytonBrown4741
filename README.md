[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11765981&assignment_repo_type=AssignmentRepo)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

ANSWER TO QUESTION:  
If anything is wrong with this reasoning, please let me know  

I believe that the average-case run-time complexity for insertion sort is $\Theta(n^2)$  
My reason for believing this is due to the fact that there are two loops included in the  
insertion sort, one of which will *always* repeat n number of times. Now, assuming that  
the sorted array isn't the best case (that being an already sorted list) that means that  
the algorithm will have to sort at least some elements in the array. Let's assume that  
it had to sort through half of the elements. In this case, we'd get n * (n/2). However,  
because we don't care about the 2 due to it being a constant, we get rid of it and end up  
with $\Theta(n^2)$  
Although we used n/2 for the example, this will apply to pretty much any type of list that has  
some elements that need sorting.


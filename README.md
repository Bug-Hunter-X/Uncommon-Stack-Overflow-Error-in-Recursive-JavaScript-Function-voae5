# Uncommon Stack Overflow Error in Recursive JavaScript Function

This repository demonstrates a subtle bug in a recursive JavaScript function that leads to a stack overflow error under specific circumstances. The function `myFunction` is designed to recursively calculate a result based on its input arguments `a` and `b`. However, it fails to handle the case where both `a` and `b` are 0, resulting in infinite recursion.

## Bug Description

The function has a flaw in its base case. When both `a` and `b` are equal to 0, the function should return 0. Instead, it continues to recurse causing a stack overflow error, as the function never hits a stopping condition in this specific case.

## Bug Reproduction

The bug can be reproduced by running `bug.js`. You will notice that the last test case, `myFunction(0, 0)`, throws a stack overflow error because of the flawed base case which does not properly handle both arguments being 0.

## Solution

The solution, in `bugSolution.js`, modifies the base case to explicitly handle the scenario where both `a` and `b` are 0. This prevents infinite recursion and ensures the function terminates correctly.

## Lessons Learned

This example highlights the importance of meticulously considering all edge cases when working with recursive functions. Missing even a single edge case can have significant and surprising consequences, especially when dealing with deeply nested recursion.
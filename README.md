Run in the terminal with command "node brackets.js pattern1 pattern2 pattern3 etc"

For example: "node brackets.js '[](){}' '({})()' '({)}'"
...should return
YES
YES
NO

If the pattern arguments are left out it will run with the default example shown
above.

This program finds the whether or not a string of opening and closing brackets
( ()'s, []'s and {}'s ) have symmetry.

Once the entries are set by either reading the command arguments or going to the
default example, it will loop through the array of entries to check by:
  - passing the array item to isMirror which
      - checks if the length is zero (passes)
      - checks whether the item length is an odd number (fails)
      - checks whether the first character is an opening bracket (fails)
      - passes the item to findMatchingBracket which
        - finds the matching closing bracket and returns an array of the opening
          and closing brackets eg, ['(', ')']
        - if it can't find a matching bracket it will return false
      - if findMatchingBracket returns false then it fails
      - it passes the item to findmatchingIndex which
        - loops through the item and finds the indexes of all the opening brackets
          ie '(({}()))()' will find [0,1,4]
        - loops through the item from the last opening bracket index until it finds
          the same number of closing brackets
          ie '(({}()))()' will find [5,6,7];
        - it checks that there is at least one closing bracket for each opening bracket
        - if so it will return an array of the indexes of the opening bracket and its
          matching closing bracket, or false if the test fails
          ie '(({}()))()' will return [0, 7]
      - if findMatchingIndex returns false then the test fails
      - it then splits the item into the initial bracket set, and whatever is left
        ie '(({}()))()' will be split into '(({}()))' and '()'
      - it then runs passes the contents of the initial brackets '({}())' and the
        remainder '()' back into isMirror, removing the outer layer of brackets each
        time until either the contents is empty (which passes) or the tests fail.
  - if the tests pass then it logs 'YES', and if they fail it logs 'NO'. As an extra
    check, if the initial input is an empty string then it will say so.

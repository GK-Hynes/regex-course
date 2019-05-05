# Regular Expressions

Reguler expressions are patterns used to match character combinations in strings.

Regexes are enclosed between slashes.

`/book/`

## Basic flags

By default a regex looks for the first instance of a match.

The global flag `g` looks through the whole string and returns all matches.

`/book/g`

Regexes are case sensitive. The `i` flag makes the regex case insensitive.

`/book/gi` will match "book", "Book", "bOoK" etc.

## Characters sets

Character sets let you match different characters in a single position.

The regex will match any of the characters enclosed in square brackets.

`/[bc]ook/` will match either "book" or "cook".

To exclude characters you don't want to match, use a caret.

`/[^l]ook/` will match "book" and "cook" but not "look".

## Ranges

Ranges let you match all the characters between two limits.

`/[a-z]/` will match all letters from a to z.

To make a range case insensitive, you will either need to use the `i` flag or include both uppercase and lowercase letters.

`/[a-zA-Z]/` will match uppercase or lowercase letters.

Ranges can also match ranges of numbers.

/[0-9]/ will match any digits.

## repeating Characters

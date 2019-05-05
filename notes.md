# Regular Expressions

Reguler expressions are patterns used to match character combinations in strings.

Regexes are enclosed between slashes.

`/book/`

## Basic flags

By default, a regex looks for the first instance of a match.

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

`/[0-9]/` will match any digits.

## Repeating Characters

Placeing a plus sign after a character set will match it an unlimited number of times.

`/[0-9]+/`

You can use curly braces to specify how many times you want a particular character set to repeat.

`/[0-9]{11}/` will match any string that is 11 numbers long.

`/[a-z]{4}/` will match any four-letter words.

If you want to match a string between a min and max length, seperate the min and max by a comma.

`/[a-z]{5, 8}/` will match any words between 5 and 8 letters long.

If you leave out the max, the regex will match anything that is at least as long as the min.

`/[a-z]{5, }/` will match words that are at least 5 letters long.

## Metacharacters

Certain characters in regexes have special meanings.

`\d` will match any digit character (same as `[0-9]`).

`\w` will match any word character (same as `[a-zA-z 0-9_]`);

`\s` will match a whitespace character (spaces, tabs, etc.).

`\t` will match a tab character.

The backslash escapes the normal behaviour of these characters:

`/d/` will match the character "d".

`/\d/` will match any digit.

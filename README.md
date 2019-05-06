# Regular Expressions

A form built to practice regular expressions as part of the Net Ninja's [Regular Expressions course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD).

![Screenshot of regex form](https://res.cloudinary.com/gerhynes/image/upload/q_auto/v1557159025/Screenshot_2019-05-06_Regex_Form_usnbai.png)

## Notes

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

To exclude characters you don't want from character set, use a caret.

`/[^l]ook/` will match "book" and "cook" but not "look".

## Ranges

Ranges let you match all the characters between two limits.

`/[a-z]/` will match all letters from a to z.

To make a range case insensitive, you will either need to use the `i` flag or include both uppercase and lowercase letters.

`/[a-zA-Z]/` will match uppercase or lowercase letters.

`[A-Za-zÀ-ÖØ-öø-ÿ]` will match most accented characters in European languages.

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

## Special Characters

`+` The one-or-more quantifier.

`\` The escape character.

`[]` The character set.

`[^]` The negative character set.

`?` The zero-or-one quantifier (makes a preceding character optional).

`.` Any character except the newline character.

`*` The zero-or-more quantifier (similar to `+`).

## Starting and Ending Patterns

A caret used outside of a character set indicates the start of the string.

`/^[a-z]/i` will match a string starting with a letter.

A dollar sign marks the end of the string.

`/^[a-z]{5}$/i` will only match a string that is five letters long.

## Alternate Characters

A pipe character enclosed in parentheses means or. It basically allows you to evaluate part of a regex before evaluating the rest.

`/(p|t)yre/` will match "pyre" or "tyre".

## Creating Regexes

Regexes can be created either literally `/[a-z]/gi` or using `new RegExp(/[a-z]/, "gi")`

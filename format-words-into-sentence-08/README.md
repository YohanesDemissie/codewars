#Codewars URL Source
https://www.codewars.com/kata/format-words-into-a-sentence

#Problem Domain
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

#White board explanation
The image is bad becuase our white board was written long but in summary, we planned to create an array of words, add "and" between the last two indicies, combine the seperate strings using .concact and I added, use regex to remove last comma from array to replace it with "and".
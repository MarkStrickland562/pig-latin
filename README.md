The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
  Example Input: 3
  Example Output: 3
The program adds "way" to single-letter words beginning with a vowel.
  Example Input: i
  Example Output: iway
For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
  Example input: bob
  Example output: obbay
For words beginning with "y", treat "y" as a consonant.
  Example input: yes
  Example output: esyay
If the word starts with "qu", move the "u" along with the "q".
  Example input: queen
  Example output: eenquay
If first consonants end with q, and the next letter is u, move the consonants and the u to the end.
  Example input: squeal
  Example output: ealsquay
  

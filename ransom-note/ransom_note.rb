# frozen_string_literal: true

# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
  ransom_letter_count = letter_count(ransom_note)
  magazine_letter_count = letter_count(magazine)

  ransom_letter_count.each do |letter, count|
    next if magazine_letter_count[letter] && magazine_letter_count[letter] >= count

    return false
  end

  true
end

def letter_count(string)
  string.chars.each_with_object(Hash.new(0)) { |char, hash| hash[char] += 1 }
end

p can_construct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj') # true
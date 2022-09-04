# frozen_string_literal: true

# @param {Integer} n
# @return {Integer}

# TIME LIMIT EXCEEDED
# def climb_stairs(count, stair = 0)
#   return 0 if count < stair
#   return 1 if count.equal?(stair)

#   climb_stairs(count, stair + 1) + climb_stairs(count, stair + 2)
# end

def climb_stairs(count)
  one = 1
  two = 1

  (count - 1).times do
    one, two = one + two, one
  end

  one
end

p climb_stairs(2) # 2
p climb_stairs(3) # 3
p climb_stairs(5) # 6

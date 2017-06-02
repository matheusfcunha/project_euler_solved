x = 0
y = 0

multiples = []


while x < 999
  x += 1
  if x % 3 == 0 or x % 5 == 0
   multiples << x
  end
end

sum = 0
multiples.each do |y|
  sum += y
end

puts sum

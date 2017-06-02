x = 1
y = 0

while x != 1000
  if x % 3 == 0 || x % 5 == 0
    y += x
  end
  x += 1

end

puts y 

x = 100
y = 100
result_array = []

while x <= 1000
    result = x * y
    result_array << result if result.to_s == result.to_s.reverse
    y += 1
    if y == 1000
        y = 100
        x += 1
    end
    puts "Iteration number #{x}"
end

puts "The result is #{result_array.max}"

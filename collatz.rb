class Collatz

	attr_accessor :collatzes

	def initialize
		@collatzes = {
			1 => 1
		}
	end

	def maxCollatz upperNumber
		maxCollatz = 1
		lengthOfMaxCollatz = 1
		(2..upperNumber).each do | number |
			coll = collatz(number)
			if (coll > lengthOfMaxCollatz)
				maxCollatz = number
				lengthOfMaxCollatz = coll
			end
		end
		maxCollatz
	end

	# THIS VERSION OF collatz IS SLOWER THAN THE UNCOMMENTED ONE BELOW
	# BY APPROX 25%

	# def collatz number
	# 	steps = 1
	# 	if collatzes[number]
	# 		collatzes[number]
	# 	elsif number % 2 == 0 #even
	# 		steps + collatz(number/2)
	# 	elsif number % 2 != 0 #odd
	# 		steps + collatz(number * 3 + 1)
	# 	end 
	# end

	def collatz number
		length = 0
		if collatzes[number]
			return collatzes[number]
		elsif number % 2 == 0 #even
			length += 1 + collatz(number/2)
		elsif number % 2 != 0 #odd

			# after seeking inspiration elsewhere, we realized
			# that we could just add 2 and then dividie 3n + 1 / 2 to skip a step,
			# it results in a time savings of approx .6s (3s -> 2.4s)
			length += 2 + collatz( (number * 3 + 1) / 2)

			# this was our old line
			# length += 1 + collatz(number * 3 + 1)
		end 
		collatzes[number] = length
		length
	end
end


t = Time.new
c = Collatz.new
puts c.maxCollatz(1_000_000)
t2 = Time.new
puts t2 - t
puts c.collatzes.length
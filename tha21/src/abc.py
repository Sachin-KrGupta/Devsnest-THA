class numbers:def __init__(self, max): self.max = max
def _iter_(self):
self.n = @return self
def __next__(self):
if(self.n <= self.max):
result = 2*self.n
self.n += 1return result
else:
raise Stop Iteration
a = numbers(8)
for i in a:
print(i)

from collections import deque
from math import gcd

# This is graph problem. All possible traversals and BFS to get minimum steps

class Solution:
	def minSteps(self, m, n, d):
# 		bfs to get minimum steps. 
#       each state (m,n) is a node and choices as edges
#       use visited state to avoid loops

        if d==0:
            return 0
        if d>max(m,n) :
            return -1
        if d % gcd(m,n) !=0 :  #Bézout's identity
            return -1
            
        
        q = deque()
        visit = set()
        q.append((0,0,0))
        visit.add((0,0))
        
        while q:
            x,y,steps = q.popleft()
            
            if x==d or y==d:
                return steps
            #empty choices
            next_states = []
            
            next_states.append((m,y))
            next_states.append((x,n))
            
            next_states.append((0,y))
            next_states.append((x,0))
            
            # pour jug2 -> jug1
            trans = min(x, n-y)
            next_states.append((x-trans, y+trans))

            # 6. Pour jug2 → jug1
            trans = min(y, m-x)
            next_states.append((x+trans, y-trans))
            
            for nx, ny in next_states:
                if (nx, ny) in visit:
                    continue
                visit.add((nx, ny))
                q.append((nx, ny, steps+1))
            
        return -1
            
                        
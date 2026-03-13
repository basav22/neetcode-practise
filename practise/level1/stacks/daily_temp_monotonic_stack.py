from typing import List


class Solution:
    # using monotonic decreasing stack. highest temp at front
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        temps = temperatures
        res,stack = [0]*len(temps), [] #  [index]
        # print(res)
        for r in range(len(temps)):
            while stack and temps[stack[-1]] < temps[r]:
                popIndex = stack.pop()
                # print(popIndex)
                res[popIndex]= (r-popIndex)
            stack.append(r)
        
        while stack:
            popIndex = stack.pop()
            res[popIndex]= 0
        
        return res

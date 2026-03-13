class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people.sort()
        l, r = 0, len(people) - 1
        res = 0
        while l<=r:
            if l == r:
                res+=1
                break
            if people[l] + people[r] <= limit:
                l+=1
                r-=1
            elif people[l] > people[r]:
                l+=1
            else:
                r -=1
            res += 1
        return res
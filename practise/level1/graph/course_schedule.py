from typing import List


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        n = numCourses
        adjList = {i: [] for i in range(n)}
        visit = set()

        for c1, c2 in prerequisites:
            adjList[c1].append(c2)
        
        def dfs(course):
            if course in visit:
                return False
            if not adjList[course]:
                return True
            visit.add(course)
            for dep in adjList[course]:
                if not dfs(dep):
                    return False
            visit.remove(course)
            adjList[course] = []
            
            return True
        for c1 in range(n):
            if not dfs(c1):
                return False
        return True
    
class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        n = numCourses
        adjList = {i: [] for i in range(n)}
        visit, cycle = set(), set()

        for c1, c2 in prerequisites:
            adjList[c1].append(c2)
        
        output = []
        def dfs(course):
            if course in visit:
                return True
            if course in cycle:
                return False
            
            cycle.add(course)
            for dep in adjList[course]:
                if not dfs(dep):
                    return False
            
            visit.add(course)
            output.append(course)
            return True
            
        for c1 in range(n):
            if not dfs(c1):
                return []
        return output
            
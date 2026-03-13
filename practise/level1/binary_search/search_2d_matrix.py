class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # find which row
        # do binary search in rows
        rows, cols = len(matrix), len(matrix[0])
        l, r = 0, rows-1
        t = target
        row_final = 0
        while l<=r:
            m = (l+r)//2
            if matrix[m][0] < t and t > matrix[m][cols-1]:
                l=m+1
            elif matrix[m][0] > t and t < matrix[m][cols-1]:
                r = m-1
            else:
                row_final = m
                break

        l, r = 0, cols-1

        while l<=r:
            m = (l+r)//2
            if matrix[row_final][m] < t:
                l = m + 1
            elif matrix[row_final][m] > t:
                r = m - 1
            else:
                return True
        
        return False
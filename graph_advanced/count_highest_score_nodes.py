from collections import defaultdict

class Solution:
    def countHighestScoreNodes(self, parents):

        n = len(parents)
        children = defaultdict(list)

        for i in range(1, n):
            children[parents[i]].append(i)

        scores = [0] * n

        def dfs(node):
            size = 1
            score = 1

            for child in children[node]:
                child_size = dfs(child)
                size += child_size
                score *= child_size

            remaining = n - size
            if remaining > 0:
                score *= remaining

            scores[node] = score
            return size

        dfs(0)

        max_score = max(scores)
        return scores.count(max_score)
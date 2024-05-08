/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const indices = Array.from({length: score.length}, (_, i) => i);
    indices.sort((a, b) => score[b] - score[a]);

    const result = new Array(score.length);

    for (let i = 0; i < indices.length; i++) {
        if (i === 0) result[indices[i]] = "Gold Medal";
        else if (i === 1) result[indices[i]] = "Silver Medal";
        else if (i === 2) result[indices[i]] = "Bronze Medal";
        else result[indices[i]] = String(i + 1);
    }

    return result;
};

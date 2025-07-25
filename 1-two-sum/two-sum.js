/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map ={}

    for(let i = 0;i<nums.length;i++){
        const left = target-nums[i];

        if(map.hasOwnProperty(left))
            return [map[left],i]


        map[nums[i]] = i
    }
};
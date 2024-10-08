// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.






/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     const numMap = new Map(); // Create a hash map to store the numbers and their indices
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement needed to reach the target
        
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return the indices if a valid pair is found
        }
        
        // Store the current number and its index in the map
        numMap.set(nums[i], i);
    }
    
    // If no solution is found (although the prompt guarantees one), return an empty array
    return [];
};

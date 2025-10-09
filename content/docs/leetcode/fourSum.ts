export function fourSum(nums: number[], target: number): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return result;
}

/**
 * Use two maps to store the sum of two numbers and their indices
 * @param nums
 * @param target
 */
export function optimizedFourSum(nums: number[], target: number) {
  const result: number[][] = [];
  const twoSumMap = new Map<number, [number, number][]>();
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (!twoSumMap.has(sum)) {
        twoSumMap.set(sum, [[i, j]]);
      } else {
        twoSumMap.get(sum)!.push([i, j]);
      }
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      const diff = target - sum;
      if (twoSumMap.has(diff)) {
        const twoSum = twoSumMap.get(diff)!;
        for (const [k, l] of twoSum) {
          if (k > j) {
            result.push([nums[i], nums[j], nums[k], nums[l]]);
          }
        }
      }
    }
  }
  return result;
}

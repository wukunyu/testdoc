
/**
 * 
 * @param {假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

示例 1:

输入: flowerbed = [1,0,0,0,1], n = 1
输出: True
示例 2:

输入: flowerbed = [1,0,0,0,1], n = 2
输出: False
注意:

数组内已种好的花不会违反种植规则。
输入的数组长度范围为 [1, 20000]。
n 是非负整数，且不会超过输入数组的大小。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/can-place-flowers
 * @param {*} n 
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {   //前提
            if (flowerbed.length === 1 //只有一个
                || i === 0 && flowerbed[1] === 0   //前边界
                || i === flowerbed.length - 1 && flowerbed[i - 1] === 0 //后边界
                || flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {   // 000 普通情况
                count++;
                i++;
            }
        }
    }
    return count >= n;
}; 
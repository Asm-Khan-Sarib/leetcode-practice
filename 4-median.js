var findMedianSortedArrays = function(nums1, nums2) {
    let merged = []
    let n1 = 0
    let n2 = 0

    while (n1 < nums1.length || n2 < nums2.length) {

        if (n1 < nums1.length && n2 < nums2.length) {

            if (nums1[n1] <= nums2[n2]) {
                merged.push(nums1[n1])
                n1++
            } else {
                merged.push(nums2[n2])
                n2++
            }

        } else if (n1 < nums1.length) {
            merged.push(nums1[n1])
            n1++
        } else {
            merged.push(nums2[n2])
            n2++
        }
    }

    let len = merged.length

    if (len % 2 === 0) {
        return (
            merged[Math.floor(len / 2)] +
            merged[Math.floor(len / 2) - 1]
        ) / 2
    }

    return merged[Math.floor(len / 2)]
}


let nums1 = [1,2,4,6,8,9]
let nums2 = [1,3,3,5,6,8,8]

console.log(findMedianSortedArrays(nums1, nums2))
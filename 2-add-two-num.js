function ListNode(val, next = null) {
    this.val = val
    this.next = next
}

let l1 = new ListNode(
    2,
    new ListNode(
        4,
        new ListNode(3)
    )
)

let l2 = new ListNode(
    5,
    new ListNode(
        6,
        new ListNode(4)
    )
)

var addTwoNumbers = function(l1, l2) {
    let current1 = l1
    let current2 = l2
    let carry = 0

    let dummy = new ListNode(0)
    let tail = dummy

    while (current1 !== null || current2 !== null) {

        let sum = (current1?.val ?? 0) + (current2?.val ?? 0) + carry

        let digit = sum % 10
        carry = Math.floor(sum / 10)

        if (current1 !== null) {
            current1 = current1.next
        }

        if (current2 !== null) {
            current2 = current2.next
        }

        tail.next = new ListNode(digit)
        tail = tail.next
    }

    if (carry === 1) {
        tail.next = new ListNode(carry)
    }

    return dummy.next
};

console.log(addTwoNum(l1, l2))
/*
while (current !== null) {
    console.log(current.val)
    current = current.next
}

current = l2

while (current !== null) {
    console.log(current.val)
    current = current.next
}
*/
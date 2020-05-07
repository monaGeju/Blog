function instantceof (L, R) {

  let targetLeft = L.__proto__
  let targetRight = R.prototype

  while(true) {

    if (targetLeft === null) return false

    if (targetLeft === targetRight ) return true

    targetLeft = targetLeft.__proto__
  }
}

function debounced (fn, time) {

  let last = 0

  return () => {

    let now = +new Date

    if (now - last >= +time * 1000) fn.call(this, arguments)
    last = +new Date
  }
}

function debounced (fn, delay) {

  let timer = null

  return function () {

    if (timer) clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}


function refuseFrame () {

  try {

    top.location.hostname

    if (top.location.hostname != window.location.hostname) top.location.href = window.location.href

  } catch {

    top.location.href = window.location.href
  }
}

function quickSort (arr = [85, 24, 63, 45, 17, 31, 96, 50]) {

 // 原理是：http://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html
 // 第一步：从数组中选择一个值作为基准
 // 第二步：将基准与每一个值比较，小于基准的值放到基准左边，大于等于基准的放到右边
 // 第三部：重复第一步和第二步，最终就可以实现排序

  // 如果数组长度小于等于1，直接放回
  if (arr.length <= 1) return arr

  //第一步：选择基准，一半般选择数组的中间值
     // 获取数组中间值的index
     let pivotIndex = Math.floor(arr.length / 2)

     // 获取数组基准值
     let pivot = arr[pivotIndex]

     // 将基准元素从比较数组中删除，原数组改变（即：排除基准元素）
     arr.splice(pivotIndex, 1)

    //  let pivot = arr.splice(pivotIndex, 1)[0] // 注意:这个时候原数组被改变了，删除了一个基准元素
  // 第二步：开始比较，小的放左边，大的放右边
    // 声明两个数组，用于存放左右排序后的值
      let left = []
      let right = []

    // 遍历数组，开始比较
    for (let i = 0; i<arr.length; i++) {

      if (arr[i] < pivot) {
        // 小的放左边
        left.push(arr[i])
      } else {
        // 大的放右边
        right.push(arr[i])
      }
    }

  // 第三步：重复第一步和第二步，最后返回排序的数组

  return quickSort(left).concat([pivot], quickSort(right));

}

quickSort()
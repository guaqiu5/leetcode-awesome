//排序法
var topKFrequent = function(nums, k) {
    let map = new Map()
    let arr = [...new Set(nums)]
    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
};

//堆

class MinHeap {
    constructor(map) {
        this.heap = [];
        this.map = map
    }
    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }
    getParentIndex(i) { //获取父节点的值
        return (i - 1) >> 1; //二进制右移相当于除以2
    }
    getLeftIndex(i) { //获取左结点
        return i * 2 + 1;
    }
    getRightIndex(i) { //获取右结点
        return i * 2 + 2;
    }

    shiftUp(index) { //需要让父节点不断小于它的子节点
        if (index == 0) { return; } //如果已经是根结点了就不用找了
        const parentIndex = this.getParentIndex(index);
        if (this.map.get(this.heap[parentIndex]) > this.map.get(this.heap[index])) {
            this.swap(parentIndex, index); //如果父节点的值大于子节点则进行交换
            this.shiftUp(parentIndex)
        }
    }
    insert(value) { //插入，添加的方法
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1); //shiftUp就是上移操作，接收参数是上移时的下标
    }
    shiftDown(index) { //下移节点，直到子节点都大于当前节点的值
        // 需要获取它的左右子节点
        const leftIndex = this.getLeftIndex(index);
        const rightIndex = this.getRightIndex(index);
        if (this.map.get(this.heap[leftIndex]) < this.map.get(this.heap[index])) { //小顶堆，父节点小于子节点
            this.swap(leftIndex, index);
            this.shiftDown(leftIndex); //迭代，直到找到合适的位置
        }
        if (this.map.get(this.heap[rightIndex]) < this.map.get(this.heap[index])) { //小顶堆，父节点小于子节点
            this.swap(rightIndex, index);
            this.shiftDown(rightIndex); //迭代，直到找到合适的位置
        }
    }

    pop() { //下移方法
        this.heap[0] = this.heap.pop(); // 把数组的最后一位转移到头部，相当于变相删除堆顶
        this.shiftDown(0); //传什么下标，就对那个进行下移操作
    }
    peek() { //获取堆顶，返回数组的头部
        return this.heap[0];
    }
    size() { // 获取堆的大小
        return this.heap.length;
    }
}
var topKFrequent = function(nums, k) {
    let map = new Map()

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 1)
        }
    }
    let heap = new MinHeap(map)
    map.forEach((value, key) => {
        if (heap.size() < k) {
            heap.insert(key)

            //堆顶是最小值 比最小值小就不要继续添 比最小值大要覆盖最小值
        } else {
            if (value > map.get(heap.peek())) {


                heap.insert(key)
                heap.pop()

            }
        }

    })
    return heap.heap
};
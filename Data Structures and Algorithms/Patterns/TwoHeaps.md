# Two Heaps Pattern

The Two Heaps Pattern is a technique used for efficiently solving problems by maintaining two heaps (priority queues) to manage elements in a structured way. It's particularly valuable in scenarios where you need to track both the maximum and minimum elements within a dataset.

## Key Characteristics:

- **Two Heaps:** This pattern utilizes two heaps – a max heap and a min heap. The max heap keeps track of elements smaller than the median, while the min heap manages elements larger than the median.

- **Balanced Partition:** The Two Heaps Pattern aims to maintain a balanced partition of the dataset around the median.

## Common Use Cases:

1. **Sliding Window Problems:** Problems that involve finding the median or managing data within a sliding window.

2. **Median of a Stream:** Real-time calculations of the median while receiving a continuous stream of data.

3. **Dynamic Median Maintenance:** Tracking the median of a dynamic dataset with insertions and deletions.

4. **Kth Largest or Kth Smallest Elements:** Solving problems where you need to find the Kth largest or smallest elements efficiently.

## Methodology:

The Two Heaps Pattern follows a systematic process:

1. **Initialize Heaps:** Start by initializing two heaps, a max heap and a min heap.

2. **Balanced Insertion:** When inserting an element, maintain the balance of elements in both heaps. Compare the element to the median, which is the root of both heaps, and insert it accordingly.

3. **Maintain Balance:** If the sizes of the two heaps differ by more than one element, rebalance them by shifting elements between the heaps.

4. **Median Extraction:** To find the median, look at the roots of the max and min heaps, which will be the elements closest to the median.

## Tips for Using Two Heaps:

- **Heaps Initialization:** Properly initialize the two heaps as max and min heaps and make sure to insert the first element into the max heap.

- **Balancing Act:** Carefully manage the balance of elements between the two heaps to maintain the partition around the median.

- **Efficiency:** The Two Heaps Pattern provides efficient access to the median element without the need for sorting the entire dataset.

- **Kth Largest/Smallest:** This pattern can be adapted to find the Kth largest or smallest elements by manipulating the sizes of the heaps.

- **Handling Duplicates:** Consider how to handle duplicates, especially when tracking the median in real-time.

## Example Problems:

1. **Sliding Window Median:** Find the median for each sliding window in an array.

2. **Median of a Data Stream:** Maintain the median of a continuous stream of data.

3. **Kth Largest Element in an Array:** Find the Kth largest element in an array efficiently.

4. **Find Median from Data Stream:** Calculate the median as data streams in real-time.

## Conclusion:

The Two Heaps Pattern is a powerful technique for efficiently managing elements in problems where you need to find the median, track elements in a sliding window, or maintain balanced partitions. By using max and min heaps, it optimizes access to both the minimum and maximum elements and provides a valuable tool for a variety of problem-solving scenarios.

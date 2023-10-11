// Javascript Sparse Matrices

// Sparse Matrices are matrices that contain mostly zero values. Sparse matrices are
// distinct from matrices with mostly non-zero values, which are referred to as dense matrices.

// How sparse matrices work:
// - Sparse matrices are used to represent sparse data.
// - Sparse matrices are typically represented using three arrays:
//   - An array of values.
//   - An array of column indices.
//   - An array of row pointers.
// - Sparse matrices are typically implemented using linked lists or hash tables.
// - Sparse matrices are used to save memory and reduce the complexity of algorithms.

// Sparse matrices are used in many areas including:
// - Linear Algebra
// - Machine Learning
// - Data Mining
// - Natural Language Processing
// - Image Processing

class SparseMatrix {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.values = [];
    this.rowPointers = [0];
    this.columnIndices = [];
  }

  // Set a value at a specific row and column.
  setValue(row, column, value) {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Invalid row or column index");
    }

    if (value !== 0) {
      this.values.push(value);
      this.columnIndices.push(column);
    }

    while (row >= this.rowPointers.length) {
      this.rowPointers.push(this.values.length);
    }
  }

  // Get the value at a specific row and column.
  getValue(row, column) {
    if (row < 0 || row >= this.rows || column < 0 || column >= this.columns) {
      throw new Error("Invalid row or column index");
    }

    const rowStart = this.rowPointers[row];
    const rowEnd = this.rowPointers[row + 1] || this.values.length;

    for (let i = rowStart; i < rowEnd; i++) {
      if (this.columnIndices[i] === column) {
        return this.values[i];
      }
    }

    return 0; // Default value for non-set elements.
  }
}

// Example Usage
const sparseMatrix = new SparseMatrix(3, 3);

sparseMatrix.setValue(0, 0, 1);
sparseMatrix.setValue(0, 2, 2);
sparseMatrix.setValue(1, 1, 3);
sparseMatrix.setValue(2, 2, 4);

console.log(sparseMatrix.getValue(0, 0)); // 1
console.log(sparseMatrix.getValue(1, 0)); // 0 (default value)
console.log(sparseMatrix.getValue(1, 1)); // 3

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// THIS DID NOT WORK
// const floodFill = function (image, sr, sc, color) {
//   const startingPixel = image[sr][sc];

//   if (startingPixel === color) return image;

//   const startingPixelNeighbors = getNeighbors(image, [sr, sc]);

//   const filledRows = startingPixelNeighbors.reduce((acc, row) => {
//     if (row.every((pixel) => pixel === startingPixel)) {
//       return [...acc, row.fill(color)];
//     }
//     return [...acc, row];
//   }, []);

//   if (image.length < 3) return filledRows;

//   const filledColumns = transpose(startingPixelNeighbors).reduce(
//     (acc, column) => {
//       if (column.every((pixel) => pixel === startingPixel)) {
//         return [...acc, column.fill(color)];
//       }
//       return [...acc, column];
//     },
//     []
//   );
//   const filled = filledRows.map((row, rowIndex) => {
//     const updatedRow = [];
//     for (let i = 0; i < row.length; i++) {
//       updatedRow.push(Math.max(row[i], filledColumns[rowIndex][i]));
//     }
//     return updatedRow;
//   });

//   console.log({ startingPixelNeighbors, filledRows, filledColumns, filled });

//   image[sr - 1][sc - 1] = filled[0][0];
//   image[sr - 1][sc] = filled[0][1];
//   image[sr - 1][sc + 1] = filled[0][2];
//   image[sr][sc - 1] = filled[1][0];
//   image[sr][sc] = color;
//   image[sr][sc + 1] = filled[1][2];
//   image[sr + 1][sc - 1] = filled[2][0];
//   image[sr + 1][sc] = filled[2][1];
//   image[sr + 1][sc + 1] = filled[2][2];

//   return image;
// };

// const getNeighbors = (nestedArray, [x, y]) => {
//   const center = nestedArray[x][y];

//   if (nestedArray.length >= 3) {
//     return [
//       [
//         nestedArray[x - 1][y - 1],
//         nestedArray[x - 1][y],
//         nestedArray[x - 1][y + 1],
//       ],
//       [nestedArray[x][y - 1], center, nestedArray[x][y + 1]],
//       [
//         nestedArray[x + 1][y - 1],
//         nestedArray[x + 1][y],
//         nestedArray[x - 1][y + 1],
//       ],
//     ];
//   }

//   if (nestedArray.length <= 2) {
//     return nestedArray;
//   }
// };

// const transpose = (matrix) => {
//   return matrix[0].map((_col, i) => matrix.map((row) => row[i]));
// };

// From https://leetcode.com/problems/flood-fill/discuss/626732/javascript-dfs-with-detailed-explanation-flood-fill
const floodFill = (image, sr, sc, newColor, oldColor = -1, visited) => {
  // Check the boundary condition
  if (sr < 0 || sr >= image.length) return image;
  if (sc < 0 || sc >= image[sr].length) return image;

  // initialize the oldcolor of one with first cell presented
  if (oldColor === -1) oldColor = image[sr][sc];

  // We keep track of visited node in this newly created 2D array
  if (!visited)
    visited = initialize2DArray(image.length, image[sr].length, false);

  // if color of the cell is not equal to cell we visited or we have already visited
  // then we don't process the cell, this is done to prevent the recursive call
  // and prevent flooding to wrong cell
  if (oldColor !== image[sr][sc] || visited[sr][sc]) return image;

  // If all the above criteria is met then we are good to flood this cell with new color
  image[sr][sc] = newColor;

  // We mark this cell as visited
  visited[sr][sc] = true;

  // We traverse to all 4 direction., i.e., North, West, East and South respectively in the below 4 step
  floodFill(image, sr - 1, sc, newColor, oldColor, visited);
  floodFill(image, sr, sc - 1, newColor, oldColor, visited);
  floodFill(image, sr, sc + 1, newColor, oldColor, visited);
  floodFill(image, sr + 1, sc, newColor, oldColor, visited);

  // finally we have the image with flooded value
  return image;
};

/**
 * Helper function to create 2D array, used for visited node
 */
function initialize2DArray(m, n, val) {
  return Array(m)
    .fill(0)
    .map(() => Array(n).fill(val));
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
); // [[2,2,2],[2,2,0],[2,0,1]]

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    1,
    0,
    2
  )
);

class Solution {
    private validGroup(arr: string[]) {
        const nums = arr.filter(el => el !== ".")
        const set = new Set(nums)
        return set.size === nums.length
    }

    private fetchSquare(matrix: string[][], index: number): string[] {
        // 0 to 8
        // coordinates of leftmost
        const boxAnchors: string[][] =
        [
            ["0", "0"], ["0", "3"],  ["0", "6"],
            ["3", "0"], ["3", "3"],  ["3", "6"],
            ["6", "0"], ["6", "3"],  ["6", "6"]
        ]

        const startRow = Number(boxAnchors[index][0])
        const startCol = Number(boxAnchors[index][1])
        const result: string[] = []
        for(let i = startRow; i<startRow+3; i++) {
            for (let j = startCol; j<startCol+3; j++) {
                result.push(matrix[i][j])
            }
        }

        return result
    }


    isValidSudoku(board: string[][]): boolean {
        for(let k = 0; k<9; k++) {
            const row = board[k]
            const col = board.map(el=>el[k])
            const box = this.fetchSquare(board, k)

            if(
                !this.validGroup(row) ||
                !this.validGroup(col) ||
                !this.validGroup(box)
            ) {
                return false
            }
        }


        return true
    }
}

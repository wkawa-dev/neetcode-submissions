class Solution {
    // works for verticals and horizontals
    private isValidGroup(cells: string[]): boolean {        
        const x = cells.filter(val => val !== ".")
        const y = new Set(cells.filter(val => val !== "."))
        // means no duplicates because set would remove them, === means no dupes
        return x.length === y.size
    }

    private getBox(board: string[][], boxIndex: number): string[] {
       const boxAnchors = [
        [0,0], [0,3], [0,6],

        [3, 0], [3,3], [3,6],

        [6,0], [6,3], [6,6]
       ];

        const result = [];
        const [startRow, startCol] = boxAnchors[boxIndex]

        for (let i = startRow; i < startRow +3; i++) {
            for(let j = startCol; j < startCol+3; j++) {
                result.push(board[i][j])
            }
        }
        return result
    }

    isValidSudoku(board: string[][]): boolean {
        for(let i = 0; i < 9;i++) {
            const row = board[i]
            const column = board.map(x => x[i])

            if(!this.isValidGroup(row) || !this.isValidGroup(column)) {
                return false
            }
             if(!this.isValidGroup(this.getBox(board, i))) {
                return false
             }
        }
        return true;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    private isValid(arr: string[]) {
            const helper = [...arr].filter(a => a!==".")
            const set = new Set(helper)

            return set.size === helper.length
    }

    private getBoxByID(board:string[][], index:number) {
        const helper = [
            ["0", "0"], ["0", "3"],  ["0", "6"],
            ["3", "0"], ["3", "3"],  ["3", "6"],
            ["6", "0"], ["6", "3"],  ["6", "6"]
        ]

        const startRow = Number(helper[index][0])
        const startCol = Number(helper[index][1])
        const res:string[] = []
        for(let i = startRow; i<startRow+3;i++) {
            for(let j = startCol; j<startCol+3;j++) {
                res.push(board[i][j])
            }
        }

        return res
    }


    isValidSudoku(board: string[][]): boolean {
        for(let i =0; i<9;i++) {
            const row = board[i]
            const col = board.map(el=>el[i])
            if(!this.isValid(row) || !this.isValid(col)) {
                return false
            }
            const subSquare= this.getBoxByID(board, i)
            if(!this.isValid(subSquare)) {
                return false
            }
        }
        return true
    }
}

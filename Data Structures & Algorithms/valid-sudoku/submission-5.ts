class Solution {
    private isValidGroup(cells: string[]): boolean {
        const digits = cells.filter(val => val !== ".");
        return digits.length === new Set(digits).size;
    }

    private getBox(board: string[][], boxIndex: number): string[] {
        const box: string[] = [];
        const rowStart = Math.floor(boxIndex / 3) * 3;
        const colStart = (boxIndex % 3) * 3;

        for (let r = rowStart; r < rowStart + 3; r++) {
            box.push(...board[r].slice(colStart, colStart + 3));
        }
        return box;
    }

    isValidSudoku(board: string[][]): boolean {
        for (let i = 0; i < 9; i++) {
            const row = board[i];
            const col = board.map(x => x[i]);
            const box = this.getBox(board, i);

            if (!this.isValidGroup(row) || !this.isValidGroup(col) || !this.isValidGroup(box)) {
                return false;
            }
        }
        return true;
    }
}
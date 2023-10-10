import { MathCalculation } from "./math-calculation"

describe('Math calculation tests', () => {
    it('should add numbers', () => {
        const mathCalculation = new MathCalculation()
        const result = mathCalculation.add(1, 1)
        expect(result).toBe(2)
    })

    it('should subtract numbers', () => {
        const mathCalculation = new MathCalculation()
        const result = mathCalculation.subtract(6, 3)
        expect(result).toBe(3)
    })

    it('should multiply numbers', () => {
        const mathCalculation = new MathCalculation()
        const result = mathCalculation.multiply(3, 3)
        expect(result).toBe(9)
    })

    it('should divide numbers', () => {
        const mathCalculation = new MathCalculation()
        const result = mathCalculation.divide(10, 5)
        expect(result).toBe(2)
    })
})
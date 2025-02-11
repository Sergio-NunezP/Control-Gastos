import { v4 as uuidv4 } from 'uuid'
import { DraftExpense, Expense } from "../types"

// 1: Se define la acción
export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'close-modal' } |
    { type: 'add-expense', payload: { expense: DraftExpense } } |
    { type: 'remove-expense', payload: { id: Expense['id'] } }


// 2: Se define el State
export type BudgetState = {
    budget: number
    modal: boolean
    expenses: Expense[]
}

// 3: Se inicializa el State
export const initialState: BudgetState = {
    budget: 0,
    modal: false,
    expenses: []
}


// Funcion para que generar el id  y regresarlo al reducer de nuevo
const createExpense = (draftExpense: DraftExpense): Expense => {
    return {
        ...draftExpense,
        id: uuidv4()
    }
}

// 4: Se crea el Reducer
export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {

    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if (action.type === 'show-modal') {
        return {
            ...state,
            modal: true
        }
    }

    if (action.type === 'close-modal') {
        return {
            ...state,
            modal: false
        }
    }

    if (action.type === 'add-expense') {

        const expense = createExpense(action.payload.expense)
        return {
            ...state,
            expenses: [...state.expenses, expense],
            //Cerrar modal apenas registremos gastos
            modal: false
        }
    }

    if (action.type === 'remove-expense') {
        return {
            ...state,
            expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
        }
    }

    return state
}
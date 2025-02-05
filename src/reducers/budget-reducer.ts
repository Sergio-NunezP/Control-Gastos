
// 1: Se define la acción
export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } }

// 2: Se define el State
export type BudgetState = {
    budget: number
}

// 3: Se inicializa el State
export const initialState: BudgetState = {
    budget: 0
}

// 4: Se crea el Reducer
export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetActions
) => {

    if (action.type === 'add-budget')
        return {
            ...state,
            budget: action.payload.budget
        }
}
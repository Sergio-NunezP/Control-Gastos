
// 1: Se define la acción
export type BudgetActions =
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'close-modal' }

// 2: Se define el State
export type BudgetState = {
    budget: number
    modal: boolean
}

// 3: Se inicializa el State
export const initialState: BudgetState = {
    budget: 0,
    modal: false
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

    return state
}
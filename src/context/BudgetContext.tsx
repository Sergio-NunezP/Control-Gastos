import { useReducer, createContext, Dispatch, ReactNode, useMemo } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducer"

// Type: Como se relacionan ciertos datos
type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
    totalExpenses: number
    remainingBudget: number
}

type BudgetProviderProps = {
    children: ReactNode
}

// Pontext: Acción de tener el estado global
export const BudgetContext = createContext<BudgetContextProps>(null!)

// Provider: van a ser los datos que va a tener el context
export const BudgetProvider = ({ children }: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpenses = useMemo(() => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    // Para mostrat lo que restaría
    const remainingBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            // value: lo que se va a poder consumir en nuestros componentes utilizando useContex
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
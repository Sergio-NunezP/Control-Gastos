import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label?: string,
    amount: number
}

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
    return (
        <p className="text-2xl text-gray-600 font-bold">
            {label && `${label}: `}
            <span className="font-semibold text-emerald-700">{formatCurrency(amount)}</span>
        </p>
    )
}

import { twMerge } from "tailwind-merge";

interface Props {
    amount: number;
    className?: string
}

const FormatedPrice = ({amount, className}: Props) => {
    const priceFormat = new Number(amount).toLocaleString('en-NG', { style: 'currency', currency: 'NGN'})
    return <span  className={twMerge('font-semibold text-lg', className)}>{priceFormat}</span>
}
export default FormatedPrice
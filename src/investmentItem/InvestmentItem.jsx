import { formatter } from "../util/investment"
function InvestmentItem({ item }) {
    return (
        <tr>
        <td>{item.year}</td>
        <td>{formatter.format(item.investmentValue)}</td>
        <td>{formatter.format(item.interest)}</td>
        <td>{formatter.format(item.totalInterest)}</td>
        <td>{formatter.format(item.investedCapital)}</td>
        </tr>
    )
}

export default InvestmentItem
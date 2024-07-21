import InvestmentItem from "../investmentItem/InvestmentItem"
import { calculateInvestmentResults, formatter } from "../util/investment.js"


function Result({ investmentData }) {
    const result = calculateInvestmentResults(investmentData);
    const initialInvestment = investmentData.initialInvestment;
    console.log(result);
    return (

        <table id="result" className="center">
            <thead>
                <tr>
                  <th>Year</th>
                  <th>Investment value</th>
                  <th>Interest (Year)</th>
                  <th>Total Interest</th>
                  <th>Invested Value</th>
                </tr>
            </thead>
            <tbody>
                {result.map(row => {
                    const totalInterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
                    const totalAmountInvested = row.valueEndOfYear - totalInterest;
                    return (
                        <tr key={row.year}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}

export default Result


function InputPanel({ investmentData, onChangeUserInput }) {
      return (
        <section id="user-input">
                <div className="input-group">
                    <label htmlFor="a1">
                        Initial Investment
                        <input id="a1" name="initialInvestment" type="number" value={investmentData.initialInvestment} onChange={onChangeUserInput} />
                    </label>
                    <label htmlFor="a2">
                        Annual Investment
                        <input id="a2" name="annualInvestment" type="number" value={investmentData.annualInvestment} onChange={onChangeUserInput} />
                    </label>
                </div> 
                <div className="input-group">
                    <label htmlFor="b1">
                        Expected Return
                        <input id="b1" name="expectedReturn" type="number" value={investmentData.expectedReturn} onChange={onChangeUserInput} />
                    </label>
                    <label htmlFor="b2">
                        Duration
                        <input id="b2" name="duration" type="number" value={investmentData.duration} onChange={onChangeUserInput} />
                    </label>
                </div> 
        </section>
    )
}

export default InputPanel

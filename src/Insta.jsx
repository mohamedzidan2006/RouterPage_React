import { useRef, useState } from 'react';
export default function Insta() {
  const [balance, setBalance] = useState(0);
  const amountInput = useRef();
  const [transaction, setTransaction] = useState([

  ]);
  const deposit = () => {
    let amount = +amountInput.current.value;
    setBalance(balance + amount);
    amountInput.current.value = '';
    let newTransaction = {
      BeforeBalance: balance,
      amount: amount,
      type: 'deposit',
      AfterBalance: balance + amount,
    };
    let copy = [...transaction];
    copy.push(newTransaction);
    setTransaction(copy);
  };
  const withdrow = () => {
    let amount = +amountInput.current.value;
    if (amount <= balance) {
       let newTransaction = {
      BeforeBalance: balance,
      amount: amount,
      type: 'withdrow',
      AfterBalance: balance - amount,
    };
    let copy = [...transaction];
    copy.push(newTransaction);
    setTransaction(copy);
      setBalance(balance - amount);
    }
    else {
      alert('your balance is empty');
    }
    amountInput.current.value = '';
  };
  return (
    <div className='container flex flex-col gap-4'>
      <h1>your Balance Is:{balance}</h1>
      <input ref={amountInput} className='input' type='number' placeholder='please Enter your balance '></input>
      <div className='flex gap-4'>
        <button className='btn btn-primary' onClick={deposit}> Deposit Amount</button>
        <button className='btn btn-secondary' onClick={withdrow}> Deposit Amount</button>
      </div>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>BeforeBalance</th>
              <th>amount</th>
              <th>type</th>
              <th>AfterBalance</th>
            </tr>
          </thead>
          <tbody>
            {
              transaction.map((el, index) => {
                return(
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.BeforeBalance}</td>
                  <td>{el.amount}</td>
                  <td>{el.type}</td>
                  <td>{el.AfterBalance}</td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

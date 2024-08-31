import Button from './components/button';
import Account from './components/accounts';
import HistoryItem from './components/history item';
import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='extra-bold fs32'>EXPENSE TRACKER</div>
        <div className='sections'>
          <div className='amount-section'>
            <div className='amount-part'>
              <p className='normal'>Amount</p>
              <p className='bold fs24'>$120.00</p>
            </div>
            <div className='buttons'>
              <Button type="income-button" value='Income' buttonId='income-btn'></Button>
              <Button type="expense-button" value='Expense' buttonId='expense-btn'></Button>
            </div>
            <div className='divider'></div>
            <div className='accounts-part'>
              <div className='bold fs24'>Accounts</div>
              <div className='accounts'>
                <Account name='Essentials' amount='66.00'></Account>
                <Account name='Entertainment' amount='12.00'></Account>
                <Account name='Education' amount='12.00'></Account>
                <Account name='Saving For Invesment' amount='12.00'></Account>
                <Account name='Saving For Later Use' amount='12.00'></Account>
                <Account name='Charity' amount='6.00'></Account>
              </div>
            </div>
          </div>
          <div className='history-section'>
            <div className='bold fs24'>History</div>
            <div className='history-items'>
              <HistoryItem name='Food' amount='5.00' account='Essential' type='expense'></HistoryItem>
              <HistoryItem name='Service' amount='10.00' account='Income' type='income'></HistoryItem>
              <HistoryItem name='Camera S' amount='15.00' account='Income' type='income'></HistoryItem>
              <HistoryItem name='Football' amount='5.00' account='Entertainment' type='expense'></HistoryItem>
              <HistoryItem name='Game' amount='10.00' account='Entertainment' type='expense'></HistoryItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

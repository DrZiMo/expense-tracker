
function HistoryItem({ name, amount, account, type }) {
    return (
        <div className={`history-item ${type}`}>
            <div className="history-primary-info">
                <div className="history-name bold">{name}</div>
                <div className="history-amount bold">{type == 'expense' ? '-' : null}{amount}</div>
            </div>
            <div className="history-account light">{account}</div>
        </div>
    );
}

export default HistoryItem;
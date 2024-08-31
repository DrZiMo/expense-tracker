
function Account({ name, amount }) {
    return (
        <div className="account">
            <div className="account-name">{name}</div>
            <div className="account-amount bold">${amount}</div>
        </div>
    );
}

export default Account;
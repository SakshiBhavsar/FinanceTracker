export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, //using the spread  operator
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            case 'ADD_TRANSACTION':
                return {                  
                    ...state,
                    transactions: [action.payload, ...state.transactions]
                //spread operator takes out all the values from the array and stores it here
                }
        default:
            return state;
    }
}

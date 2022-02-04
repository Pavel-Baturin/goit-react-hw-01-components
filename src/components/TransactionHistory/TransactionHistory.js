import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return (
        <table className={s.table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
          {items.map(item => (
            <tr key={ item.id }>
                  <td>{ item.type }</td>
                  <td>{ item.amount }</td>
                  <td>{ item.currency }</td>
            </tr>
          ))}  
          </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape).isRequired,
}
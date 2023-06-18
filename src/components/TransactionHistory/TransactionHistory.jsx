import clsx from 'clsx';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    {/* <thead className={css.head}> */}
    <thead>
      <tr>
        <th className={clsx(css.tableCell, css.headCell)}>Type</th>
        <th className={clsx(css.tableCell, css.headCell)}>Amount</th>
        <th className={clsx(css.tableCell, css.headCell)}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={clsx(css.row)}>
          <td className={css.tableCell}>{type}</td>
          <td className={css.tableCell}>{amount}</td>
          <td className={css.tableCell}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

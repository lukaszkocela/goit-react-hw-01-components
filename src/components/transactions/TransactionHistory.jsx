import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
let numberRow = 1;

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr className={css.headTable}>
        <th className={css.headText}>Type</th>
        <th className={css.headText}>Amount</th>
        <th className={css.headText}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={numberRow % 2 ? css.value : css.valueDark}>{type}</td>
          <td className={numberRow % 2 ? css.value : css.valueDark}>
            {amount}
          </td>
          <td className={numberRow++ % 2 ? css.value : css.valueDark}>
            {currency}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
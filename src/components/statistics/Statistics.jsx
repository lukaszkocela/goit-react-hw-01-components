import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const generateColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: `${generateColor()}` }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.isRequired,
};
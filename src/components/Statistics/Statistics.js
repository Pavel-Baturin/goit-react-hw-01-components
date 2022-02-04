import PropTypes from 'prop-types';
import s from'./Statistics.module.css';

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
        {title && (
            <h2 className={s.title}>{title}</h2>)}
         
            <ul className={s.list} >
                {stats.map(download =>
                    (<li key={download.id} className={s.item} style={{ backgroundColor: `${getRandomHexColor()}`}}>
                    <span className={s.label}>{download.label}</span>
                    <span className={s.percentage}>{download.percentage}%</span>
                </li>))}  
            
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
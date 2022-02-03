import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
    return (
        <section class="statistics">
        {title && (
            <h2 class="title">{title}</h2>)}
         
            <ul class="stat-list" >
            {stats.map(download => 
                (<li key={download.id} class="item">
                    <span class="label">{download.label}</span>
                    <span class="percentage">{download.percentage}%</span>
                </li>))}  
            
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}
import styles from './tabs.module.scss';

const Tabs = ({items}) => {
    return <ul className={styles.tabs}>
        {items.map((item, index) => {
            return <li key={`tabItem${index}`}>{item}</li> 
        })}
    </ul>
} 
export default Tabs;

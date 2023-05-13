 import Heading from './Heading';
 import Image from 'next/image';
 import Paragraph from './Paragraph';

 import styles from './grid.module.scss';
 
 
 const Grid = ({items}) => {
    return <section className={styles.grid}>
      {items.map((item, index) => {
         const {title, slug, vehicleInformation} = item.node;
         return <article 
         key={`gridItem${index}`}
         className={styles.gridItem}
         >
            <Image 
               src={vehicleInformation.trimLevels[0].images.large.sourceUrl}
               alt={vehicleInformation.trimLevels[0].images.large.altText}
               width={vehicleInformation.trimLevels[0].images.large.mediaDetails.width}
               height={vehicleInformation.trimLevels[0].images.large.mediaDetails.height}
               className={styles.gridItemImage}
            />
            <Heading level={3}>{title}</Heading>
            <Paragraph>{vehicleInformation.trimLevels[0].msrp}</Paragraph>
         </article>
      })}
    </section>

 }
 export default Grid;
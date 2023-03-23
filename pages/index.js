import Button from '../components/Button';
import Header from '../components/Header';
import Image from 'next/image';
import Layout from '../components/Layout';
import Swatch from '../components/Swatch';

import { getAllVehicles, getAllColors } from '../lib/api';

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = getAllVehicles();
  const colors = getAllColors();

  // The value of the `props` key will be
  //  passed to the `Home` component

  return {
    props: {
      data,
      colors
    }
  } 
}

const Homepage = ({data, colors}) => {
  console.log({data});
  return <Layout>
    
    <h1>Homepage</h1>
    <h2>Color picker</h2>
    <div>
      Large image goes here.
    </div>
    <ul>
      {colors.map((color) => {
        return <Swatch color={color} />
      })}
    </ul>
    <h3>Color name</h3>
    <Button
      label="Register now" 
      type="primary"
    />
    {data.map((car) => {
      const { model, slug } = car;
      return <article>
        <Image
          src={`/vehicles/${slug}/medium.webp`}
          alt={`${model} car`}
          width={350}
          height={185} 
        />
        <h2>{model}</h2>
      
      </article>

    })}



    <Button 
      label="Download now"
      type="secondary"
    />
    <Button label="Learn more"
    type="primary"
    />
    <Button label="Buy now"
    type="secondary"
    />
  </Layout>
}
export default Homepage

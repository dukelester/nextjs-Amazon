import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <Layout>
      <h3>Products</h3>
      <ul>
        <li> Product 1 </li>
        <li> Product 2 </li>
        <li> Product 3 </li>
      </ul>
    </Layout>
  )
}

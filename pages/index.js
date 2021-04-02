import Head from 'next/head'
import styles from '../styles.module.css'
import Page from '../components/page'

export default function Home() {
  return <Page />
}


  // //Count Down実装
  // var d = new Date('2021-05-04 17:00:00');
  // var now = new Date()
  // // console.log(now)
  // var diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
  // // console.log(diff);
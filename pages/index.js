import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import styles_button1 from '../styles/ext_css/Button1.module.css'
import styles_button2 from '../styles/ext_css/Button2.module.css';
import styles_button3 from '../styles/ext_css/Button3.module.css'
import styles_button4 from '../styles/ext_css/Button4.module.css';
import styles_button5 from '../styles/ext_css/Button5.module.css';
import styles_button6 from '../styles/ext_css/Button6.module.css';



export default function Home() {

  return (

    
    <div style={{
      backgroundColor: "#e9f2ff",
      height: '100%',
      backgroundRepeat: 'no-repeat',
      width:'100%',
      position: "fixed",
      layout:"fill"
      
  }}>
    <div className={styles.ArticleButtonList}>
     
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Ubuntu:ital,wght@1,700&display=swap" rel="stylesheet"></link>
      <div className={styles.TitleText}>
        <h1> Expand your Knowledge in Finance</h1>
        <p> Learn about everything related to finance ranging from how to save, to making money
          to live a life that you want. This is why we're here, with these <b>Courses</b> and <b>Articles</b> from every Sector, be confident 
          about money <br /> <em> no matter where you come from. </em> 
        </p>
      </div>
      <div className={styles.article_button_grid_container}>
        <div className={styles.grid_left}>
          <ul> 
            <div>
            <Link href="./InvestingPage">
            <div className={styles_button1.Button_Owo}>
              <button className={styles_button1.button_one}> Investing 💰</button>
            </div>
            </Link>
            </div>
            <div>
            <Link href="./SavingsPage">
            <div className={styles_button2.Button_Two}>
              <button className={styles_button2.button_two}> Saving 🐷</button>
            </div>
            </Link>
            </div>
            <div>
            <Link href="./TaxPage">
            <div className={styles_button3.Button_Three}>
              <button className={styles_button3.button_three}> Taxes 🚫</button>
            </div>
            </Link>
            </div>
            
          </ul>
        </div>
        <div className={styles.grid_right}>
          <ul>
          <div>
            <Link href="./InvestingPage">
            <div className={styles_button4.Button_Four}>
              <button className={styles_button4.button_four}> Crypto 🤖</button>
            </div>
            </Link>
            </div>
            <div>
            <Link href="./InvestingPage">
            <div className={styles_button5.Button_Five}>
              <button className={styles_button5.button_five}> Accounts 💳</button>
            </div>
            </Link>
            </div>
            <div>
            <Link href="./InvestingPage">
            <div className={styles_button6.Button_Six}>
              <button className={styles_button6.button_six}> Finance 🦄</button>
            </div>
            </Link>
            </div>
            
          </ul>
        </div>
      </div>
      
    </div>
    </div>
  );

}

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import styles_button1 from '../styles/ext_css/Button1.module.css'
import Button_Two from '../styles/ext_css/Button2.module.css';
import Button_Three from '../styles/ext_css/Button3.module.css'
import Button_Four from '../styles/ext_css/Button4.module.css';
import Button_Five from '../styles/ext_css/Button5.module.css';
import Button_Six from '../styles/ext_css/Button6.module.css';



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
            <Button_Two />
            <Button_Three />
          </ul>
        </div>
        <div className={styles.grid_right}>
          <ul>
            <Button_Four />
            <Button_Five />
            <Button_Six />
          </ul>
        </div>
      </div>
      
    </div>
    </div>
  );

}

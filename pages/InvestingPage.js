import styles from '/styles/ext_css/InvestingPage.module.css'
import Head from 'next/head'
import Image from 'next/Image'
import { FileNameMissingError } from '@3rdweb/sdk'


export default function InvestingPage() {

    return (
    <div>
        <div className={styles.InvestingPageHome}>
            <h1 style={{
                padding:'20px',
                marginTop: '120px'
            }}> Investing 📈</h1>
            <p style={{
                padding: '5px',
                fontSize: '22px',
            }}> Investing is almost like Shopping for the best Product. Without <em><b>Research</b></em> and <em><b>Knowledge</b></em>,
                you won't know what the best product is on the market.
            </p>
        </div>
        
        <h1 style={{
            fontSize: "50px",
            fontFamily: "Open Sans, sans-serif", 
            textAlign: "center",
            marginTop: "90px",
            color: 'black',





        }}><u>Courses</u> 🦄</h1>
        <div className={styles.courseTable}>
             
            <div className={styles.courseBox}>
                <h2>Intro to Stock Market Investing 🎆</h2>
                
                <p> Learn all about the Stock Market from creating your 
                    own portfolio, reading the stock market, investing, trading, and becoming 
                    a confident stock analyst and trader.
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>Intro to Crypto Investing 🕹</h2>
                <p> Crypto isn't hard. Obtain industry knowledge about cryptocurrencies ranging from how to trade, applications,
                    different types of crypto, and how to incorporate crypto in your everyday life, and more.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Intro to Bonds 🪙</h2>
                <p> Bonds aren't outdated. Who said they were? Expand your knowledge of investments with bonds ranging from what they are,
                    how to use them efficiently, how prices fluctuate, and more.
                </p>
            </div>
            <div className={styles.courseBox4}>
                <h2>Advanced Stock Market 🔎</h2>
                <p> Soldify your skills with this Advanced Stock Market Course where you'll learn 
                    how to predict stocks, call trades at the right time, and more all to increase the value 
                    of your stock portfolio.
                </p>
            </div>
            <div className={styles.courseBox5}>
                <h2>Land/Real Estate Investments Intro 🏠</h2>
                <p> Learn all about Real-Estate with this introductory course. Learn about how different types of properties, investment
                    schemes, how to flip houses, attracting clients, and more.
                </p>
            </div>
            <div className={styles.courseBox6}>
                <h2>Investing in Startups 🎯</h2>
                <p> Startups are the new trend. Over millions of people are coming out with new ideas and pursuing them. Learn about 
                    how you can support their growth, which in the end, will support you as well with this intermediate course about business investing.
                </p>
            </div>
            
        </div>
        <h1 style={{
            fontSize: "50px",
            fontFamily: "Open Sans, sans-serif", 
            textAlign: "center",
            marginTop: "90px",
            color: 'black',

        }}><u>Articles</u> 📚</h1>
                <div className={styles.articleTable}>
             
             <div className={styles.articleBox}>
                 <h2>What Happens When The Stock Market Crashes?</h2>
                 <p> Author: Luisa Rollenhagen</p>
                 <p>A Stock Market crash seems pretty dramatic. Over the years, many have felt substantial 
                    effects of their markets crashing. But now, you don't.
                 </p>
             </div>
             <div className={styles.articleBox2}>
                 <h2>Article 2</h2>
             </div>
             <div className={styles.articleBox3}>
                 <h2>Article 3</h2>
             </div>
             <div className={styles.articleBox}>
                 <h2>Article 4</h2>
             </div>
             <div className={styles.articleBox2}>
                 <h2>Article 5</h2>
             </div>
             <div className={styles.articleBox3}>
                 <h2>Article 6</h2>
             </div>
             
         </div>
    </div>
        
    )

}
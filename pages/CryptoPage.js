import styles from '/styles/ext_css/CryptoPage.module.css'

import Link from 'next/link'



export default function InvestingPage() {

    return (
    <div>
        <div className={styles.InvestingPageHome}>
            <h1 style={{
                padding:'20px',
                marginTop: '120px'
            }}> Crypto 🤖 </h1>
            <p style={{
                padding: '5px',
                fontSize: '22px',
            }}> <em>The next generation of finance.</em>
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
            <Link href="/Lessons/CryptoLesson">
            <div className={styles.courseBox}>
                <h2>Intro to Crypto 🚀</h2>
                
                <p> Learn all about Crypto with this beginner course.
                </p>
            </div>
            </Link>
            <div className={styles.courseBox2}>
                <h2>How to Invest in Crypto 🧠</h2>
                <p> Learn all about the different cryptocurrencies and how to invest in them.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Reading the Crypto Market 😎</h2>
                <p> Learn how to read the crypto market, predict states, and be on top of crypto news and updates with 
                    this beginner course to help you get started investing in this new world of technology.
                </p>
            </div>
            <div className={styles.courseBox4}>
                <h2>L1 vs. L2? 🪜</h2>
                <p> Learn the different types of tokens and which ones to invest in.
        
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>Crypto Laws 📝</h2>
                <p> Learn all about the laws of crypto and how you can file them legally.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Applications of Crypto 🌄</h2>
                <p> Take this course to see the positive impact Crypto is making on today&apos;s world.
            
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
                 <h2>What is Cryptocurrency</h2>
                 <b><p> Author: Robert Stevens</p></b>
                 <p>A beginner&apos;s guide to Cryptocurrency.
                 </p> 
             </div>
             
             <div className={styles.articleBox2}>
                <h2>What is Ethereum?</h2>
                 <b><p>Author: Andrew Goldman</p></b>
                 <p>Learn about one of the most popular cryptocurrencies on the market - Ethereum.
                 </p>
             </div>
             <div className={styles.articleBox3}>
             <h2>What is Bitcoin?</h2>
                 <b><p>Author: Robert Stevens</p></b>
                 <p>Learn all about Bitcoin and how it works from the backend.
                 </p>
             </div>
             <div className={styles.articleBox}>
             <h2>Best Bitcoin Wallets</h2>
                 <b><p>Author: Robert Stevens</p></b>
                 <p>How to know which crypto wallet is the best for you.
                 </p>
             </div>
             <div className={styles.articleBox2}>
             <h2>Ethereum vs Bitcoin.</h2>
                 <b><p>Author: Robert Stevens</p></b>
                 <p>Ethereum and Bitcoin are the largest and most important cryptocurrencies in the world. Here&apos;s how 
                    they are different.
                 </p>
             </div>
             <div className={styles.articleBox3}>
             <h2>How to Buy Bitcoin in 2022</h2>
                 <b><p>Author: Robert Stevens</p></b>
                 <p>Want to buy Bitcoin? Start here.
                 </p>
             </div>
             
         </div>
         
        <div>
            <Link href="./">
            <button className={styles.goBackBtn}> Catalog </button>
            </Link>
        </div>
    </div>
        
    )

}
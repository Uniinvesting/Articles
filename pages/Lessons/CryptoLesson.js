import styles from '/styles/ext_css/CryptoPage.module.css'
import lesson_styles from '/styles/ext_css/Lessons.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Home from '..'



export default function SavingsLessons() {

    return (
        <div>
        <div className={styles.InvestingPageHome}>
            <h1 style={{
                padding:'20px',
                marginTop: '120px'
            }}> Intro to Crypto 🚀</h1>
            <p style={{
                padding: '5px',
                fontSize: '22px',
            }}> Saving is essential. As much as you need to spend to keep cash flow, there is an <b>equal</b> amount of significance in saving.<br /> It <em>allows 
                you to plan your <b>next</b> financial move.
            </em>
            </p>
        </div>
        
        <h1 style={{
            fontSize: "50px",
            fontFamily: "Open Sans, sans-serif", 
            textAlign: "center",
            marginTop: "90px",
            color: 'black',





        }}><u>Lessons</u> 🦄</h1>
        <div className={styles.courseTable}>
            <div className={styles.courseBox}>
                    <h2>What is Blockchain?</h2>
                    
                    <p> The technology behind Cryptocurrency?
                    </p>
            </div>
            <div className={styles.courseBox}>
                    <h2>Tokens vs. Currency</h2>
                    
                    <p> Know the different types of &quot;coins&quot; you can invest in.
                    </p>
            </div>
            <div className={styles.courseBox}>
                    <h2>Digital Wallets</h2>
                    
                    <p> Learn how to setup and use your Digital Wallet
                    </p>
            </div>

        </div>
        <div>
            <Link href="/CryptoPage">
                <button className={lesson_styles.goBackBtn}> Crypto </button>
            </Link>

        </div>
        </div>
    )

}
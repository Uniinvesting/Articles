import styles from '/styles/ext_css/SavingsPage.module.css'
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
            }}> Intro to Savings ✅</h1>
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
                    <h2>What is Savings?</h2>
                    
                    <p> What is the verb &quot;Save&quot;? Find out the elegant definition 
                        in the world of finance.
                    </p>
            </div>
            <div className={styles.courseBox}>
                    <h2>How to Save Efficiently?</h2>
                    
                    <p> Saving can be hard. But this 5-step process will
                        reimagine what it is to save.
                    </p>
            </div>
            <div className={styles.courseBox}>
                    <h2>Different Types of Savings</h2>
                    
                    <p> The different types, now at your fingertips!
                    </p>
            </div>

        </div>
        <div>
            <Link href="/SavingsPage">
                <button className={lesson_styles.goBackBtn}> Savings </button>
            </Link>

        </div>
        </div>
    )

}
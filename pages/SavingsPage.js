import styles from '/styles/ext_css/SavingsPage.module.css'
import Head from 'next/head'
import Image from 'next/Image'
import Link from 'next/Link'
import Home from '.'


export default function InvestingPage() {

    return (
    <div>
        <div className={styles.InvestingPageHome}>
            <h1 style={{
                padding:'20px',
                marginTop: '120px'
            }}> Savings 🐷</h1>
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





        }}><u>Courses</u> 🦄</h1>
        <div className={styles.courseTable}>
             
            <div className={styles.courseBox}>
                <h2>Intro to Savings ✅</h2>
                
                <p> Learn all about Savings with this beginner course where you will learn about what savings is, its significance, and methods 
                    to save effeciently to live confidently.
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>Account Types 🎉</h2>
                <p> There are a lot of account types, which can be overwhelming to look at and choose. However, don't worry, we got your back. With this course, learn 
                    all about the different accounts and choose which ones meet your lifestyle.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>How to Keep Cash Flow 💨</h2>
                <p> Having a Cash Flow is as important as saving. Learn about how to circulate money from your wallet to your investments and back, to 
                    create a secondary-source of income with this advanced course.
                </p>
            </div>
            <div className={styles.courseBox4}>
                <h2>Control your Expenses 🎛</h2>
                <p> Controlling your expenses may be hard, but is <b>key</b> when it comes to savings. This course will teach you the most effective ways to save, but still 
                get the things you want to keep your life a happy life.
        
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>Funds/Loans 💵</h2>
                <p> There is no problem with asking for a loan or some funding. With this course, learn all about the different funds, loans, and more in Canada to kickstart 
                    your life in this great country.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Retirement Savings 🎯</h2>
                <p> The main goal for keeping a savings is for retirement. Learn how to save efficiently to live a happy retirement life and support the next-generation
                    of your life. 
            
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
                 <h2>Emergency Funds</h2>
                 <b><p> Author: Andrew Goldman</p></b>
                 <p>Emergency Funds? Learn all about how to get them, how much, and more just in case if one 
                    of those "edge" cases appear in your life. 
                 </p>
             </div>
             <div className={styles.articleBox2}>
                <h2>Best High-Interest Savings in Can</h2>
                 <b><p>Author: Lusia Rollenhagen and Lisa MacColl</p></b>
                 <p>The <b>best</b> high interest savings accounts in Canada 2022.
                 </p>
             </div>
             <div className={styles.articleBox3}>
             <h2>Top Saving Tips</h2>
                 <b><p>Author: Lisa MacColl</p></b>
                 <p>Here are the best tips to help you save more money in 2022!
                 </p>
             </div>
             <div className={styles.articleBox}>
             <h2>How to Save for a House</h2>
                 <b><p>Author: Luis Rollenhagen</p></b>
                 <p>Here are some advice and tricks to help you save for a house during 
                    the times of inflation.
                 </p>
             </div>
             <div className={styles.articleBox2}>
             <h2>Financial Adivsors: How to Choose and The Cost</h2>
                 <b><p>Author: Michael Allen</p></b>
                 <p>Find out exactly what a Financial Advisor does and why you may need one.
                 </p>
             </div>
             <div className={styles.articleBox3}>
             <h2>What is a Savings Account?</h2>
                 <b><p>Author: Luisa Rollenhagen</p></b>
                 <p>Wondering what is a Savings Account is? Learn all about them and how you can use them 
                    to your advantage!
                 </p>
             </div>
             
         </div>
         
        <div>
            <Link href="./">
            <button className={styles.goBackBtn}> Articles </button>
            </Link>
        </div>
    </div>
        
    )

}
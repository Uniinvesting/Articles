import styles from '/styles/ext_css/Finance.module.css'
import Head from 'next/head'
import Image from 'next/Image'
import Link from 'next/Link'



export default function FinancePage() {

    return (
    <div>
        <div className={styles.InvestingPageHome}>
            <h1 style={{
                padding:'20px',
                marginTop: '120px'
            }}> Finance 🦄 </h1>
            <p style={{
                padding: '5px',
                fontSize: '22px',
            }}> The <em>answer</em> to all our problems.
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
                <h2>Intro to Finance 🫳🏻</h2>
                
                <p> The essentials of Finance
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>Finance Jobs ✏️</h2>
                <p> Occupations in Finance
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Financial Safety</h2>
                <p> Be safe with Finance
                </p>
            </div>
            <div className={styles.courseBox4}>
                <h2>Financial Literacy</h2>
                <p> The basics of cash flow and investments from the ground-up.
        
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>FinTech</h2>
                <p> The next-generation of Finance
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Finance around the World</h2>
                <p> Understand how finance works Internationally.
            
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
                 <h2>Everything You Need to Know about TFSAs</h2>
                 <b><p> Author: Andrew Goldman</p></b>
                 <p>TFSAs are probably the most essential account you will ever have. 
                 </p>
             </div>
             <div className={styles.articleBox2}>
                <h2>What is an RRSP?</h2>
                 <b><p>Author: Andrew Goldman</p></b>
                 <p>Learn everything you need to know to open one and start investing in Canada.
                 </p>
             </div>
             <div className={styles.articleBox3}>
             <h2>Chequing vs Savings</h2>
                 <b><p>Author: Luisa Rollenhagen</p></b>
                 <p>The difference between a Savings and Chequing Account.
                 </p>
             </div>
             <div className={styles.articleBox}>
             <h2>RESP - How and What it is</h2>
                 <b><p>Author: Robert Stevens</p></b>
                 <p>A tax-free savings account for a child&apos;s future education. 
                 </p>
             </div>
             <div className={styles.articleBox2}>
             <h2>Corporate Account</h2>
                 <b><p>Author: Andrew Goldman</p></b>
                 <p>Why you might use one? Find out.
                 </p>
             </div>
             <div className={styles.articleBox3}>
             <h2>What&apos;s a LIRA?</h2>
                 <b><p>Author: Andrew Goldman</p></b>
                 <p>Roll money from pension after retirement - that&apos;s LIRA.
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
import styles from '/styles/ext_css/AccountsPages.module.css'
import Link from 'next/link'



export default function AccountsPages() {

    return (
    <div>
        <div className={styles.InvestingPageHome}>
            <h1 style={{
                padding:'20px',
                marginTop: '120px'
            }}> Accounts 💳 </h1>
            <p style={{
                padding: '5px',
                fontSize: '22px',
            }}> Having the right account is essential when you want money to <em>work</em> for you.
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
                <h2>Intro to Accounts 🫳🏻</h2>
                
                <p> Learn all about beginner Accounting concepts.
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>Intro to RRSP ✏️</h2>
                <p> Learn all about your RRSP and how you can manage it well.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Savings Accounts 👔</h2>
                <p> This course teaches you all about Savings Accounts and how to choose one that fits your lifestyle.
                </p>
            </div>
            <div className={styles.courseBox4}>
                <h2>Retirement Accounts 🚶🏻‍♂️</h2>
                <p> Ever wonder about LIRA? Don&apos;t worry if you don&apos;t know - this course teaches you how to save your money 
                    after you stop working.
        
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>Corporate Accounts 🏙</h2>
                <p> All the accounts for corporate. To better your understanding of money in the enterprise world.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Taxes in Accounts 💲</h2>
                <p> Understand the impact of taxes on your accounts.
            
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
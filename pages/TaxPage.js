import styles from '/styles/ext_css/TaxPage.module.css'
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
            }}> Tax 🚫</h1>
            <p style={{
                padding: '5px',
                fontSize: '22px',
            }}> Don't be scared of tax. <em>Fight it.</em>
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
                <h2>Intro to Tax 😨</h2>
                
                <p> Learn all about Tax with this beginner course.
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>How to Avoid Tax 💪🏻</h2>
                <p> Learn all about the different taxes and how can you avoid them legally, without falling into 
                    government schemes for no reason.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>How to pay Tax 🌈</h2>
                <p> Take this courses to learn how and when to pay tax so you don't have to pay an extra dime.
                </p>
            </div>
            <div className={styles.courseBox4}>
                <h2>International Tax 🌎</h2>
                <p> Learn taxes Internationally for imports and exports
        
                </p>
            </div>
            <div className={styles.courseBox2}>
                <h2>Enterprise Taxes 👻</h2>
                <p> Running a business? Here is a guide on taxes in the enterprise world.
                </p>
            </div>
            <div className={styles.courseBox3}>
                <h2>Filing Taxes ☕️</h2>
                <p> Learn all different methods to file taxes with his intermediate course.
            
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
                 <h2>How to File Taxes Online</h2>
                 <b><p> Author: Andrew Goldman and Aja McClanahan</p></b>
                 <p>Learn how to file taxes online in Canada. This guide will cover everything 
                    from the ground up.
                 </p>
             </div>
             <div className={styles.articleBox2}>
                <h2>Canada Tax Brackets 2021-2022</h2>
                 <b><p>Author: Lisa MacColl</p></b>
                 <p>Your Guide to Tax Brackets.
                 </p>
             </div>
             <div className={styles.articleBox3}>
             <h2>Capital Gains Tax</h2>
                 <b><p>Author: Lisa MacColl</p></b>
                 <p>Figure out what Capital Gains are. No more Capital Headaches.
                 </p>
             </div>
             <div className={styles.articleBox}>
             <h2>The Ultimate Guide to T4</h2>
                 <b><p>Author: Andrew Goldman</p></b>
                 <p>This guide will provide all the essential T4 info you'll need about the 
                    famous slips.
                 </p>
             </div>
             <div className={styles.articleBox2}>
             <h2>A guide to Form T2200</h2>
                 <b><p>Author: Andrew Goldman and Dennis Hammer</p></b>
                 <p>This guide tells you everything you need to know about T2200
                 </p>
             </div>
             <div className={styles.articleBox3}>
             <h2>International Taxes for Commerce</h2>
                 <b><p>Author: Jaival Patel</p></b>
                 <p>Learn all the essential taxes you need for commerce so you can make 
                    the right decisions.
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
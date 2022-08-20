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
                <h2>Course 1</h2>
            </div>
            <div className={styles.courseBox2}>
                <h2>Course 2</h2>
            </div>
            <div className={styles.courseBox3}>
                <h2>Course 3</h2>
            </div>
            <div className={styles.courseBox}>
                <h2>Course 4</h2>
            </div>
            <div className={styles.courseBox2}>
                <h2>Course 5</h2>
            </div>
            <div className={styles.courseBox3}>
                <h2>Course 6</h2>
            </div>
            
        </div>
    </div>
        
    )

}
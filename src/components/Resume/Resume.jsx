import React from 'react'
import styles from "../Resume/Resume.module.css"

const Resume = () => {

    return (
        <>
        <section id='resume' className={styles.resumeSec}>
            <div className={styles.container}>
                <div className={`${styles.row}`}>
                    <div>
                        <article className='text-center pb-4'>
                            <h1 className='text-4xl font-bold text-center  text-[#99afe6] pb-8'>Resume</h1>
                            <p className={styles.top}>
                                Reach out to me via my <a target="_blank" href="https://www.linkedin.com/in/cliffstvnsn/" rel="noopener noreferrer">
                                        LinkedIn</a>! <a target="_blank" href='https://drive.google.com/file/d/1GuKpv0XPfAAcQ86eKsFEIpnTKRU1KxfU/view?usp=sharing' rel="noopener noreferrer">
                                    view
                                </a> or <a href="Resume.CliffStevenson.March.2023.pdf" download={'Resume.CliffStevenson.March.2023.pdf'}>
                                    download
                                </a> the resume.
                            </p>
                        </article>
                        <iframe src="https://drive.google.com/file/d/1GuKpv0XPfAAcQ86eKsFEIpnTKRU1KxfU/preview" className={styles.resumeDoc} allow="autoplay" title="Cliff's Resume 2022"></iframe>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Resume
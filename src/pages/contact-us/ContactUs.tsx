import EmailForm from '../../components/email-form/EmailForm'
import PhoneLink from '../../components/phone-link/PhoneLink'
import style from './ContactUs.module.css'
import WhatappLink from '../../components/whatup-link/WhatappLink'

export default function ContactUs() {
    return (
        <div className={style['contact-us-container']}>
            <div className={style['contact-us-info']}>
                <section className={style['section-1']}>
                    <h1>צרו קשר איתנו</h1>
                    <p>
                        יש לכם שאלות? רוצים לקבל פרטים נוספים? אנחנו כאן בשבילכם!
                    </p>
                    <p>
                        אנחנו מזמינים אתכם ליצור איתנו קשר באחת הדרכים הבאות:
                    </p>
                </section>
                <section className={style['section-2']}>
                    <h3>
                        טלפון
                    </h3>
                    <p>
                        נשמח לשוחח אתכם!
                    </p>
                    <p className={style['phone-link']}>
                        מספר הטלפון שלנו: <PhoneLink />
                    </p>
                </section>
                <section className={style['section-3']}>
                    <h3>
                        WhatApp
                    </h3>
                    <p>
                        מעדיפים לכתוב לנו הודעה?
                    </p>
                    <p>
                        לינק ישירות אלינו בוואצפ <WhatappLink />
                    </p>
                </section>
                <section className={style['section-4']}>
                    <h3>
                        🕒 שעות פעילות
                    </h3>
                    <p>
                        אנחנו זמינים בימים ובשעות הבאות:
                    </p>
                    <p>
                        ראשון עד חמישי: 08:00–18:00
                    </p>
                    <p>
                        שישי: 08:00–13:00
                    </p>
                </section>
            </div>
            <div className={style['email-form']}>
                <EmailForm />
            </div>
        </div>
    )
}
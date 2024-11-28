import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from './EmailForm.module.css'


const YOUR_SERVICE_ID = 'service_10wwqu7'
const YOUR_TEMPLATE_ID = 'template_3po9hin'
const YOUR_PUBLIC_KEY = 'tV_fQOQdafvRHXCvs'

export default function EmailForm() {


    const form = useRef<HTMLFormElement>(null);

    const usernameRef = useRef<HTMLInputElement>(null)
    const [isUsernameErrorShown, setIsUsernameErrorShown] = useState(false)

    const userEmailRef = useRef<HTMLInputElement>(null)
    const [isUserEmailErrorShown, setIsUserEmailErrorShown] = useState(false)

    const userPhoneRef = useRef<HTMLInputElement>(null)
    const [isUsernamePhoneShown, setIsUserPhoneErrorShown] = useState(false)

    const userReasonRef = useRef<HTMLTextAreaElement>(null)

    const [result ,setResult] = useState(false)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsUsernameErrorShown(false)
        setIsUserEmailErrorShown(false)
        setIsUserPhoneErrorShown(false)

        if (!usernameRef || !usernameRef.current || !usernameRef.current.value) {
            setIsUsernameErrorShown(true)
        }

        if (!userEmailRef || !userEmailRef.current || !userEmailRef.current.value) {
            setIsUserEmailErrorShown(true)
        }

        if (!userPhoneRef || !userPhoneRef.current || !userPhoneRef.current.value) {
            setIsUserPhoneErrorShown(true)
        }

        if (!usernameRef || !usernameRef.current || !usernameRef.current.value ||
            !userEmailRef || !userEmailRef.current || !userEmailRef.current.value ||
            !userPhoneRef || !userPhoneRef.current || !userPhoneRef.current.value
        ) {
            return
        }

        if (!form.current)
            return

        emailjs
            .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
                publicKey: YOUR_PUBLIC_KEY,
            })
            .then(
                () => {
                    if (usernameRef && usernameRef.current) {
                        usernameRef.current.value = ''
                    }

                    if (userEmailRef && userEmailRef.current) {
                        userEmailRef.current.value = ''
                    }

                    if (userPhoneRef && userPhoneRef.current){
                        userPhoneRef.current.value = ''
                    }

                    if(userReasonRef && userReasonRef.current){
                        userReasonRef.current.value = ''
                    }

                    setResult(true)
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className={style['email-form-container']}>
            <h1 className={style['email-form-title']}>קבלו עוד היום הצעת מחיר בחינם!</h1>
            <form className={style['email-form']} ref={form} onSubmit={(e) => sendEmail(e)}>
                <div>
                    <input ref={usernameRef} type="text" name="user_name" placeholder='שם מלא' />
                    {isUsernameErrorShown && <label>יש להזין שם מלא</label>}
                </div>
                <div>
                    <input ref={userEmailRef} type="email" name="user_email" placeholder='מייל' />
                    {isUserEmailErrorShown && <label>יש להזין מייל תקין</label>}
                </div>
                <div>
                    <input ref={userPhoneRef} type="tel" name="user_phone" placeholder='טלפון' />
                    {isUsernamePhoneShown && <label>יש להזין מספר טלפון ליצירת קשר</label>}
                </div>
                <div>
                    <textarea ref={userReasonRef} name="message" placeholder='סיבת הפניה' />
                </div>
                <div className={style['email-form-submit']}>
                    {
                        result 
                        ?
                        <p className={style['email-form-submit-result']}>פנייתך התקבלה בהצלחה ניצור איתך קשר בהקדם האפשרי !</p>
                        : 
                        <input type="submit" value="קבל הצעה עכשיו !" />
                    }
                </div>
            </form>
        </div>
    )
}
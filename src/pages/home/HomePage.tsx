
import EmailForm from '../../components/email-form/EmailForm'
import SectionOne from './sections/one/SectionOne'
import SectionThree from './sections/three/SectionThree'
import SectionTwo from './sections/two/SectionTwo'

import style from './HomePage.module.css'

export default function HomePage() {
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <section className={style['email-form']} >
                <EmailForm />
            </section>
           
        </>
    )
}
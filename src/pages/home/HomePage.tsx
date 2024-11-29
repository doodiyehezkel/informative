
import EmailForm from '../../components/email-form/EmailForm'
import SectionOne from './sections/one/SectionOne'
import SectionTwo from './sections/two/SectionTwo'



export default function HomePage() {
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <section >
                <EmailForm />
            </section>
           
        </>
    )
}
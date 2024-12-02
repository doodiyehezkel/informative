
import EmailForm from '../../components/email-form/EmailForm'
import SectionOne from './sections/one/SectionOne'
import SectionThree from './sections/three/SectionThree'
import SectionTwo from './sections/two/SectionTwo'



export default function HomePage() {
    return (
        <>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            
            <section >
                <EmailForm />
            </section>
           
        </>
    )
}
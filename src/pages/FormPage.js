import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'


const FormPage = () =>{
    return(
        <div>
            <Header />
            <div style={{paddingTop:"77px", backgroundColor:"#EAF7FC"}}>
                <Form/>
                <Footer/>
            </div>
            
        </div>
    )
}
export default FormPage
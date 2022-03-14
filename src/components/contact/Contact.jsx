import './contact.scss';
import emailjs from 'emailjs-com';

export default function Contact() {
    const balls = [
        {
            Id: '1',
            classN: "smallBall",
        }, 
        {   
            Id: '2',
            classN: "bigBall",
        },
    ]
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("gmail", "template_tp0pbaa", e.target, "exzS3YSSJX4gREMNO").then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div className="contact" id='contact'>
            <div className="left">
                {balls.map(ball => (
                    <div className={"ball " + ball.classN}  key={ball.Id}></div>
                ))}
                <h1>Contact Me</h1>
                <img src="https://learntocrack.com/wp-content/uploads/2020/12/contact-us.svg" alt=""/>
            </div>
            <div className="right">
                <div className="decorateBall decoration"></div>
                <div className="decorateBall2 decoration"></div>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder='Name' name='name' required/>
                    <input type="text" placeholder='Email' name='email' required/>
                    <textarea placeholder='Message' name='message' required></textarea>
                    <button type='submit'>Submit</button>
                </form>
                <div className="decorateBall3 decoration"></div>
                <div className="decorateBall4 decoration"></div>
            </div>
        </div>
    );
}
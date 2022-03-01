
import emailjs from '@emailjs/browser';



export const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_eq48oax', 'Qtjcx4TcIxP8jZtPi')
            .then((result) => {
                console.log(result)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form onSubmit={sendEmail} >
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

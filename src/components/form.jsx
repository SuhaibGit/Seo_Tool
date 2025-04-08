import { useState } from 'react'
import '../styling/App.css'
export default function MainForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleForm = () => {
        //Handling Logic
    }

    return (
        <div className='form-div'>
            <h2>Add your name into the <span>wishlist</span></h2>
            <p>You will be notified via email once the first version is released</p>
            <div className='form-a'>
                <label htmlFor="name">Name</label> <br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <label htmlFor="email">Email</label> <br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                <button onClick={handleForm}>Submit</button>
            </div>
            <div className='counter'>
                <i class="fa-solid fa-hashtag"></i>
                <h2>Slots Left: 50</h2>
            </div>
        </div>
    )
}

export function Footer() {
    return (
        <div className='footer'>
            <div className='ith-class'><i class="fa-solid fa-info"></i></div>
            <p>For more information, you can reach out to us through: ezhan@localhawk.com</p>
        </div>
    )
}
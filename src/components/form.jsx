import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import '../styling/App.css';
import { toast } from 'react-toastify';

export default function MainForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState(0);

    useEffect(() => {
        fetchCount();
    }, []);

    const fetchCount = async () => {
        const snapshot = await getDocs(collection(db, 'formSubmissions'));
        setQuery(snapshot.size);
        console.log("Query Length: " + snapshot.size);
    };
    
    const handleForm = async (e) => {
        e.preventDefault();
    
        if (!name.trim() || !email.trim()) {
            toast.warning("Please fill in both name and email.");
            return;
        }
    
        if (query >= 50) {
            toast.info("Sorry, no slots left!");
            return;
        }
    
        setLoading(true);
        try {
            const formData = { name, email };
            await addDoc(collection(db, "formSubmissions"), formData);
            toast.success("Submitted successfully!");
            await fetchCount(); 
            setName('');
            setEmail('');
        } catch (error) {
            console.error("Error submitting the data: ", error);
            toast.error("There was an error. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div id="signup-form" className='form-div'>
            <h2>Add your name into the <span>wishlist</span></h2>
            <p>You will be notified via email once the first version is released</p>

            <form className='form-a' onSubmit={handleForm}>
                <label htmlFor="name">Name</label><br />
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br />

                <label htmlFor="email">Email</label><br />
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <button type="submit" disabled={loading}>
                    {loading ? "Wait..." : "Submit"}
                </button>
            </form>

            <div className='counter'>
                <i className="fa-solid fa-hashtag"></i>
                <h2>Slots Left: {50 - query}</h2>
            </div>
        </div>
    );
}


export function Footer() {
    return (
        <div className='footer'>
            <div className='ith-class'><i class="fa-solid fa-info"></i></div>
            <p>Reach out to us through: hello@localhawk.com</p>
        </div>
    )
}
import { useState } from 'react';

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            let result = await fetch(
                'http://localhost:5000/register', {
                    method: "post",
                    body: JSON.stringify({ name, email }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (!result.ok) {
                throw new Error('Failed to fetch');
            }
            result = await result.json();
            console.warn(result);
            if (result) {
                alert("Data saved successfully");
                setEmail("");
                setName("");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Failed to save data. Please try again later.");
        }
    };

    return (
        <>
            <h1>This is React WebApp</h1>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={handleOnSubmit}>Submit</button>
            </form>
        </>
    );
}

export default App;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

const RegistrationForm = ({ setNewObject }) => {
    // form state
    const [firstname, setFirstname] = useState('');
    const [firstnameError, setFirstnameError] = useState('');
    const [lastname, setLastname] = useState('');
    const [lastnameError, setLastnameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [address, setAddress] = useState('');
    const [addressError, setAddressError] = useState('');
    const [age, setAge] = useState('');
    const [ageError, setAgeError] = useState('');

    // handle form validation
    const validateForm = () => {
        if (firstname === '') {
            setFirstnameError('First name is required');
        } else if (firstname.length < 3) {
            setFirstnameError('First name must be at least 3 characters long');
        } else {
            setFirstnameError('');
        };

        if (lastname === '') {
            setLastnameError('Last name is required');
        } else if (lastname.length < 3) {
            setLastnameError('Last name must be at least 3 characters long');
        } else {
            setLastnameError('');
        };

        if (email === '') {
            setEmailError('Email is required');
        } else if (!email.includes('@')) {
            setEmailError('Invalid email format');
        } else if (!email.endsWith('.com')) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        };

        if (address === '') {
            setAddressError('Address is required');
        } else if (address.length < 5) {
            setAddressError('Address must be at least 5 characters long');
        } else {
            setAddressError('');
        };

        if (age === '') {
            setAgeError('Age is required');
        } else if (age < 2) {
            setAgeError('You must be at least 2 years old');
        } else {
            setAgeError('');
        };
    };
        // handle clear form
        const clearForm = () => {
            setFirstname('');
            setLastname('');
            setEmail('');
            setAddress('');
            setAge(0);
        };

        // handle form submission
     
        const handleSubmit = (e) => {
            e.preventDefault();
            validateForm();

        const newObject = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address,
            age: age
        };

        setNewObject(newObject);
        clearForm();
    }


    return (
        <div className="container  mt-5">
            <Form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>
                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    {firstnameError && <p>{firstnameError}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    {lastnameError && <p>{lastnameError}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && <p>{emailError}</p>}
                    <Form.Text className="text-muted">
                        We&apos;ll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    {addressError && <p>{addressError}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
                    {ageError && <p>{ageError}</p>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );


}
export default RegistrationForm;
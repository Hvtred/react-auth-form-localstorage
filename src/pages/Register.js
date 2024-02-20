import React, { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";

import { FaCircleXmark, FaCircleCheck, FaCircleMinus } from "react-icons/fa6";

function Register () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validations, setValidations] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const validations = {
            emailValid: "Email valide.",
            passwordMatch: "Le mot de passe est identique.",
        };

        const errors = {
            emailInvalid: "Email invalide.",
            emailExists: "Email déjà utilisé.",
            passwordMismatch: "Le mot de passe n'est pas identique.",
            length: "Le mot de passe doit contenir au moins 8 caractères.",
            lowercase: "Le mot de passe doit contenir une lettre minuscule.",
            uppercase: "Le mot de passe doit contenir une lettre majuscule.",
            number: "Le mot de passe doit contenir un chiffre."
        };

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const emailExists = users.some(user => user.email === email);

        if (email && /\S+@\S+\.\S+/.test(email) && !emailExists) {
            delete errors.emailInvalid;
            validations.emailValid = "Email valide.";
        } else {
            delete validations.emailValid;
        }
        if (password === confirmPassword) {
            delete errors.passwordMismatch;
            validations.passwordMatch = "Le mot de passe est identique.";
        } else {
            delete validations.passwordMatch;
        }

        if (emailExists) {
            errors.emailExists = "Email déjà utilisé.";
        } else {
            delete errors.emailExists;
        }
        if (password && password.length >= 8) {
            delete errors.length;
        }
        if (password && /[a-z]/.test(password)) {
            delete errors.lowercase;
        }
        if (password && /[A-Z]/.test(password)) {
            delete errors.uppercase;
        }
        if (password && /[0-9]/.test(password)) {
            delete errors.number;
        }

        setErrors(errors);
        setValidations(validations);
    }, [email, password, confirmPassword]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            const newUser = { email, password };

            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));

            navigate('/connexion');
        }
    };

    return (
        <section>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Créer un compte
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email
                                </label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="exemple@exemple.com" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <div className="mt-1">
                                    {errors.emailInvalid &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs text-red-500 ml-2">
                                                    <FaCircleXmark/>
                                                </p>
                                                <p className="text-xs text-red-500 ml-2">
                                                    {errors.emailInvalid}
                                                </p>
                                            </div>
                                        </>
                                    }

                                    {validations.emailValid &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs text-green-500 ml-2">
                                                    <FaCircleCheck/>
                                                </p>
                                                <p className="text-xs text-green-500 ml-2">
                                                    {validations.emailValid}
                                                </p>
                                            </div>
                                        </>
                                    }
                                    {errors.emailExists &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs ml-2" style={{color: '#FFA500'}}>
                                                    <FaCircleMinus/>
                                                </p>
                                                <p className="text-xs ml-2" style={{color: '#FFA500'}}>
                                                    {errors.emailExists}
                                                </p>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <div className="mt-1">
                                    {errors.length &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs text-red-500 ml-2">
                                                    <FaCircleXmark/>
                                                </p>
                                                <p className="text-xs text-red-500 ml-2">
                                                    {errors.length}
                                                </p>
                                            </div>
                                        </>
                                    }
                                    {errors.lowercase &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs text-red-500 ml-2">
                                                    <FaCircleXmark/>
                                                </p>
                                                <p className="text-xs text-red-500 ml-2">
                                                    {errors.lowercase}
                                                </p>
                                            </div>
                                        </>
                                    }
                                    {errors.uppercase &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs text-red-500 ml-2">
                                                    <FaCircleXmark/>
                                                </p>
                                                <p className="text-xs text-red-500 ml-2">
                                                    {errors.uppercase}
                                                </p>
                                            </div>
                                        </>
                                    }
                                    {errors.number &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs text-red-500 ml-2">
                                                    <FaCircleXmark/>
                                                </p>
                                                <p className="text-xs text-red-500 ml-2">
                                                    {errors.number}
                                                </p>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Confirmer le mot de pase
                                </label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                <div className="mt-1">
                                    {errors.passwordMismatch &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs text-red-500 ml-2">
                                                    <FaCircleXmark/>
                                                </p>
                                                <p className="text-xs text-red-500 ml-2">
                                                    {errors.passwordMismatch}
                                                </p>
                                            </div>
                                        </>
                                    }
                                    {validations.passwordMatch &&
                                        <>
                                            <div className="flex items-center">
                                                <p className="text-xs text-green-500 ml-2">
                                                    <FaCircleCheck/>
                                                </p>
                                                <p className="text-xs text-green-500 ml-2">
                                                    {validations.passwordMatch}
                                                </p>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Créer un compte
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Déjà un compte ?&nbsp;
                                <Link to="/connexion"
                                   className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                Connectez-vous
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;
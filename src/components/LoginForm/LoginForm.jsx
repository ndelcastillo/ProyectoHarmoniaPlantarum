import React, { useContext } from 'react'
import { userContext } from '../../context/userContext'
import './loginForm.css';

function LoginForm() {

    const { authUser } = useContext(userContext)

    function loginUser(evt) {
        evt.preventDefault();
        let inputUsername = evt.target.elements[0].value;
        authUser(inputUsername)
    }

    return (
        <div class="flex items-center justify-center min-h-screen">
            <div class="px-12 py-12 mt-4 text-left bg-white shadow-lg">
                <h3 class="text-2xl font-bold text-center">Login to your account</h3>
                <form onSubmit={loginUser} action="">
                    <div class="mt-4">
                        <div>
                            <label class="block" for="email">Username</label>
                            <input type="text" placeholder="Username"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div class="mt-4">
                            <label class="block">Password</label>
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div class="flex items-baseline justify-between">
                            <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

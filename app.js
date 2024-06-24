document.addEventListener('DOMContentLoaded', async () => {
    const auth0 = await createAuth0Client({
        domain: 'dev-8luuoxffopqs323k.us.auth0.com',
        client_id: 'HsUlFHEwW8b65yzf2tTl0yF1i8cxK8Gz'
    });

    document.getElementById('signup-button').addEventListener('click', async () => {
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        try {
            await auth0.loginWithRedirect({
                redirect_uri: 'http://127.0.0.1:3002/index.html',
                screen_hint: 'signup',
                login_hint: email,
                password: password
            });
        } catch (error) {
            console.error('Sign-up error:', error);
            alert(`Error signing up: ${error.message}`);
        }
    });

    document.getElementById('login-button').addEventListener('click', async () => {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        try {
            await auth0.loginWithRedirect({
                redirect_uri: 'http://127.0.0.1:3002/index.html',
                screen_hint: 'login',
                login_hint: email,
                password: password
            });
        } catch (error) {
            console.error('Login error:', error);
            alert(`Error logging in: ${error.message}`);
        }
    });
});

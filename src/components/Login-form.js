import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(props) {
    return (
        <div className='container f1' style={{ backgroundColor: props.mode === 'light' ? '#f5f2f2' : 'white' }}>
            <form>
                <h1 className='Login-title'>Login</h1>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <p><Link className="link-opacity-7-hover signup" to="/signup">Forgot password?</Link></p>
                <Link className='btn btn-primary btn-login' to="/">Login</Link>
                <p className='my-2'>Don't have an account? <Link className='signup' to="/signup">Signup</Link></p>
                <hr /><span>or</span><br />
                <Link className='btn btn-l btn-login my-2' to="https://facebook.com" target='blank'><i className="bi bi-facebook"></i>Login with Facebook</Link>
                <Link className='btn border border-secondary btn-login my-1' target='blank' to="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&ifkv=AaSxoQzP-SOBucPyhgvIojNqlsLpPFvoVOiOlxGN7yy71ueI2PIDO4BKTIF-fYfL_cheKNWif-UtYw&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1694893149%3A1714286223837778&theme=mn&ddm=0"><i className="bi bi-google"></i>Login with Google</Link>
            </form>
        </div>
    );
}

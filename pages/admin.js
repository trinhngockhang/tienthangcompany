import React from 'react';
import style from '../static/css/login.css';
export default () => {
    return <div>
        <div className="login-page">
            <div className="form">
                <form className="login-form" action="/admin/login" method="post">
                    <input type="text" name="username" placeholder="username" />
                    <input type="password" name="password" placeholder="password" />
                    <button>Login</button>

                </form>
            </div>
        </div>
        <style dangerouslySetInnerHTML={{ __html: style }} />
    </div>
}
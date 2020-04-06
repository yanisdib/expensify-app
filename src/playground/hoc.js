// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop Manipulation
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h4>
            Info</h4>
        <p>The info is : {props.info}</p>
    </div>
);

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. Please don't share!</p>}
//             <WrappedComponent {...props} />
//         </div>
//     )
// };

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />)
                : (
                    <p>Please login to see the info</p>
                    )
            }
            <WrappedComponent {...props} />
        </div>
    )
}

// requireAuthentication

// Component we are going to reuse
// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are details" />, document.getElementById('app'));
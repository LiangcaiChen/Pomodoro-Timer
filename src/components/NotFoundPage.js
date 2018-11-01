import React, {Compnent} from 'react';
import {Link} from 'react-router-dom';

class NotFoundPage extends Compnent {
    render() {
        return (
            <div>
                404 - <Link to="/">Go to timer</Link>
            </div>
        )
    }
}

export default NotFoundPage;
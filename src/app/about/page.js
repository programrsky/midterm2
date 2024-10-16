import React from 'react';
import { useRouter } from 'next/router';
useEffect(() => {
    console.log('Current path:', router.pathname);
}, [router.pathname]);
const page = () => {
    return (
        <>
            <h1>About</h1>
            <h1>Current Path: {router.pathname}</h1>
        </>
    );
};

export default page;

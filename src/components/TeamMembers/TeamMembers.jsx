import React from 'react';

const TeamMembers = () => {
    return (
     <div>
        <h1 className=' text-4xl font-bold text-center font-sans mt-10 pb-14'>Our Team Members</h1>
           <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 text-center   text-sm font-semibold'>
            <div className='py-3'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-rose-100 ring-offset-base-100 ring-offset-2">
                        <img src="https://i.postimg.cc/0Q04x2TP/blond-model-wedding-dress-bridal-makeup-114579-8627.jpg" />
                    </div>
                </div>
                <h2 className=' text-lg font-bold'>Nirmala Johnson</h2>
                <h2>Makeup Artist</h2>
            </div>
            <div className='py-3'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-rose-100 ring-offset-base-100 ring-offset-2">
                        <img src="https://i.postimg.cc/3RfwL7tJ/traveling-blogger-1098-16449.jpg" />
                    </div>
                </div>
                <h2 className=' text-lg font-bold'>Tushar Smith</h2>
                <h2>Photographer</h2>
            </div>
            <div className='py-3'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-rose-100 ring-offset-base-100 ring-offset-2">
                        <img src="https://i.postimg.cc/nrw0cs0b/young-handsome-confident-pensive-businessman-working-standing-table-notepad-looking-white-modern-off.jpg" />
                    </div>
                </div>
                <h2 className=' text-lg font-bold'>Fardeen Davis</h2>
                <h2>Events Planners</h2>
            </div>
            <div className='py-3'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-rose-100 ring-offset-base-100 ring-offset-2">
                        <img src="https://i.postimg.cc/tCZzN4BJ/young-successful-architector-smiling-holding-drawings-standing-office-wall-176420-16815.jpg" />
                    </div>
                </div>
                <h2 className=' text-lg font-bold'>Vikram Wilson</h2>
                <h2>Event Decorators</h2>
            </div>
            <div className='py-3'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-rose-100 ring-offset-base-100 ring-offset-2">
                        <img src="https://i.postimg.cc/66LgNdSs/pensive-clever-male-student-with-trendy-haido-looks-thoughtfully-aside-as-tries-gather-thoughts-work.jpg" />
                    </div>
                </div>
                <h2 className=' text-lg font-bold'>Eve Adams</h2>
                <h2>CEO </h2>
            </div>
            <div className='py-3'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-rose-100 ring-offset-base-100 ring-offset-2">
                        <img src="https://i.postimg.cc/DfPy0p0B/Caterers.jpg" />
                    </div>
                </div>
                <h2 className=' text-lg font-bold'>Frank Brown</h2>
                <h2>Caterers</h2>
            </div>
        </div>
     </div>
    );
};

export default TeamMembers;
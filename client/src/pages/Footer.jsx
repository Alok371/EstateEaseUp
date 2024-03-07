import React from 'react';

export default function Footer() {

    return (
        <footer className="bg-slate-200 py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="text-slate-700">
                    &copy; {new Date().getFullYear()} EstateEaseUp. All rights reserved.
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors duration-300">Privacy Policy</a>
                    <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors duration-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

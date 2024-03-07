import React from 'react';

export default function About() {
    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl lg:text-4xl font-bold text-slate-700 mb-8 text-center leading-tight">
                    About EstateEaseUp
                </h1>

                <p className="text-lg text-gray-700 mb-6 text-justify">
                    Welcome to EstateEaseUp! We're here to make finding or listing your dream home super easy. Whether you're a homeowner wanting to sell or rent out your place, or someone searching for the perfect home sweet home, we've got you covered. Our website is simple to use and has all the tools you need to make your real estate journey a breeze.
                </p>

                <p className="text-lg text-gray-700 mb-6 text-justify">
                    At EstateEaseUp, we believe everyone deserves a hassle-free experience when it comes to real estate. That's why we offer comprehensive listings, secure authentication, and advanced search filters to help you find exactly what you're looking for. Whether you're ready to list your property or start searching, join us today and let's make your real estate dreams a reality!
                </p>
            </div>
        </div>
    );
}

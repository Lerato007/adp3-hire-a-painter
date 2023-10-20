import { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import painter from '../assets/painter.jpg'
import document from '../assets/document.jpg'

const GetHired = () => {
    return (
        <div className='gethired-main'>
            <Header />
      <div className="flex justify-between items-center bg-[#00000] py-10 lg:py-0 border-y border-black xl:border-hidden xl:rounded-xl">
        {/* Hero content */}
        <div className="px-10 space-y-5 lg:py-6">
          <h1 className="text-6xl md:text-7xl max-w-xl font-serif w-11/12 sm:w-9/12">
            We are hiring
          </h1>
          <h2 className="w-9/12 font-normal">
            Ready to get your freelance painting services on the map? Simply click the button below to submit your application and we'll be in touch.
          </h2>
          <button className="border border-black bg-white px-4 py-2 rounded-full font-medium active:scale-90 transition duration-100">
            Apply
          </button>
        </div>
        {/* Hero image */}
 
      </div>
      <Footer />
      </div>

    );
  };
  export default GetHired;
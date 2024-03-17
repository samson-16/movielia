// import React from 'react'

// const Footer = () => {
//     const Links={
//         title:'Company',
//         links:[
//             {
//                 name:'Home',
//                 link:'/'
//             },
//             {
//                 name:'About Us',
//                 link:'/about-us'
//             },
//             {
//                 name:'Contact Us',
//                 link:'/contact-us'
//             },
//             {
//                 name:'Movies',
//                 link:'/movies'
//             }
        
//         ]
//     }
//   return (
//     <div className='bg-gray-900 py-4 border-t-2 border-black'>
//         <div className='container mx-auto px-2'>
//             <div className='grid grid-cols md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-p lg:gap-11 xl:gap-11 py-10 justify-between'>
//                 {Links.map((link,index)=>(
//                     <div key={index} className=''>
//                     </div>
//                 ))}
//             </div>

//         </div>
//     </div>
//   );
// }

// export default Footer
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Movielia. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-white hover:text-gray-400 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white hover:text-gray-400 text-sm">
                  Terms of Use
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white hover:text-gray-400 text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
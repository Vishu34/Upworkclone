import React from 'react'

export const Home = () => {
  return (
   <>
   

    <section className='CEL-width space-y-24 mt-10 pt-20'>
    <section id="hero " className='flex items-center justify-between'>
        <div id="hero-text spa" className='space-y-4'>
            <h1 className='heading-home'>Easily Find Workers For Your Needs</h1>
            <p className='home-para'>The easiest way to find workers according to your needs and demands</p>
            <div class="buttons flex gap-2 ">
                <a className="post-works " href="">POST WORKS</a>
                <a className="bg-yellow-500 font-medium hover:bg-white border border-2 hover:border-slate-500  hover:text-black  text-white px-5 py-2 rounded-full " href="">REVIEW</a>
            </div>
        </div>
        <div id="hero-image">
            <img src="hero-image.png" alt="workers" width="450px" height="450px"/>
        </div>
    </section>

    <section id="featured" className='space-y-4'>
        <h1 className='feature'>FEATURED ON</h1>
        <div className='flex items-center gap-10 bg-yellow-500 justify-between p-2 rounded-md'>
            <img href="https://findvectorlogo.com/techcrunch-vector-logo-svg/" src="techcrunch-vector-logo.png" className='w-44'/>
            <img src="fast-company.png" alt="fast-company logo" className='w-44'/>
            <img src="forbes-logo.png" alt="forbes logo" className='w-44'/>
        </div>
    </section>

    <section id="budget" className='flex items-center space-y-4 justify-between'>
        <div id="budget-image">
            <img src="budget-image.png" alt="workers" width="1000px" height="1000px"/>
        </div>
        <div id="budget-text " className='space-y-4'>
            <h3 className='text-xl font-bold'>BUDGET</h3>
            <h1 className='heading-home'>Set Budget Which Best Suits Your Pocket</h1>
            <p className='home-para'>You can set the budget for the job according to your
                wishes and find workers through our vast networks
                of contractors and laborers all over India.</p>
            <div class="  ">
                <a class="font-bold " href="" className='post-works'>SET BUDGET</a>
            </div>
        </div>
    </section>

    <section id="contractor" className='flex items-center '>
        <div id="contractor-text" className='space-y-4'>
            <h3 className=' text-xl font-bold'>CONTRACTORS</h3>
            <h1 className='heading-home'>Are You A
                Contractor? Join Us</h1>
            <p className='home-para'>Join our already vast network of contractors and
                get your workload reduced.</p>
                <div class="buttons">
                    <a class="post-works" href="">BECOME A CONTRACTOR</a>
                </div>
            </div>
        <div id="contractor-image">
            <img src="contractors.png" alt="workers" width="1000px" height="1000px"/>
        </div>
    </section>

    <section id="budget" className='flex items-center space-y-4'>
        <div id="budget-image">
            <img src="laborers.png" alt="workers" width="1000px" height="1000px"/>
        </div>
        <div id="budget-text" className='space-y-4'>
            <h3 className='text-xl font-bold'>Laborers</h3>
            <h1 className='heading-home'>Track Your Wages And Attendance</h1>
            <p className='home-para'>You can track your wages and attendance through your portal which manages your work for you.</p>
            <div class="buttons">
                <a class="post-works" href="">JOIN AS A LABORER</a>
            </div>
        </div>
    </section>

    <section id="testimonials ">
       <div className='flex flex-col justify-center items-center align-middle'>
       <h3 class="testimonials-text text-xl font-bold text-blue-500">TESTIMONIALS</h3>
        <h1 className='text-4xl font-bold'>Read what others have to say</h1>
       </div>
       
      
      <div className='flex gap-5 mt-28'>
      <div className='bg-blue-300 rounded-3xl p-5 text-center relative'>
       <img src="testimonial-1.jpg" alt="testimonial-1" className='rounded-full w-32 h-32 object-cover mx-auto -mt-20' width="100px" height="100px"/>
        <div className='mt-5'>
            <h2 className='text-xl font-bold'>Ben Engelson</h2>
            <h3 className='home-para'>Employer</h3>
            <p>"Our hiring process was completely transformed, offering quick and reliable connections with skilled contractors. 
                It has streamlined our project management and enhanced communication."</p>
        </div>
       </div>
       
       <div className='bg-blue-300 rounded-3xl p-5 text-center relative'>
       <img src="testimonial-2.jpg" alt="testimonial-2" className='rounded-full w-32 h-32 object-cover mx-auto -mt-20' width="100px" height="100px"/>
        <div className='mt-5'>
            <h2 className='text-xl font-bold'>Olivia Cole</h2>
            <h3 className='home-para'>Contractor</h3>
            <p>"Now, we have access to a broad selection of projects, significantly improving our operational efficiency and business 
                growth. The platform also simplifies project tracking and payment processes."</p>
        </div>
       </div>
       
       <div className='bg-blue-300 rounded-3xl p-5 text-center relative'>
       <img src="testimonial-3.jpg" alt="testimonial-3" className='rounded-full w-32 h-32 object-cover mx-auto -mt-20' width="100px" height="100px"/>
        <div className='mt-5'>
            <h2 className='text-xl font-bold'>Shawn Smith</h2>
            <h3 className='home-para'>Labor</h3>
            <p>"I have found consistent job opportunities with transparent wage and attendance tracking, providing me with
                financial management, task scheduling and the chance to enhance my skills."</p>
        </div>
       </div>
      </div>
    </section>

    
    <section id="banner">
        <div>
            <h3>ARE YOU READY?</h3>
            <h1>Be A Part Of The Next Big Thing</h1>
            <div class="buttons">
                <a class="get-started" href="">GET STARTED</a>
            </div>
        </div>
    </section>
    </section>
   
   </>
  )
}

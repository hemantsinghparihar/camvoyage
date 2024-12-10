import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import heroBg from "/bgImage.png"
import Navbar from "./components/Navbar";
// import hero2 from "/hero2.png"
// import heroShadow from "/heroShadow.png"
import Card from "./components/Card";
import Partners from "./components/Partners";
import Schedule from "./components/Schedule";

import Footer from "./components/Footer";
import SelectContainers from "./components/SelectContainers";
import SelectContainers2 from "./components/SelectContainers2";
import HeroForm from "./components/HeroForm";
import TicketSelectionOption from "./components/TicketSelectionOption";
import Contact from "./components/Contact";
import TimeInterval from "./components/TimeInterval";

export default function Home() {
  return (
    <div className="max-w-screen  overflow-x-hidden">
       <ToastContainer />
      <div className="  mx-auto  ">
        <section id="bookTrip" className="flex justify-center ">
            <div className="hero-container w-[100%]   max-h-[955px] flex justify-center "
                // style={{
                //     backgroundColor: "rgba(250, 250, 250, 0.4)",
                //     backgroundImage:`url(/bgImage.png)`,
                //     backgroundRepeat:'no-repeat',
                //     backgroundSize:'cover ',
                //     backgroundBlendMode: "overlay", 
                      
                // }}
                style={{
                  backgroundColor: "rgba(250, 250, 250, 0.4)",
                  backgroundImage:`url(/heroSunBg.svg)`,
                  backgroundRepeat:'no-repeat',
                  backgroundSize:'cover ',
                 
                    
              }}
            >
              <div className="black-bg min-w-full"
              // style={{
              //       backgroundColor: "rgba(250, 250, 250, 0.4)",
              //       backgroundImage:`url(/heroShadow.png)`,
              //       backgroundRepeat:'no-repeat',
              //       backgroundSize:'contain ',
              //       backgroundBlendMode: "overlay", 
              // }}
              >
                <Navbar/>

                <div className="hero-content   w-full flex  justify-center mt-[67px] ">
                  <div className="max-w-[625px]  flex flex-col gap-4">
                    <h4 className="text-[20px] text-center font-[400]  text-white opacity-70">WELCOME ONBOARD</h4>
                    <h1 className="text-[48px] text-center font-bold text-white leading-[32px] ">What’s Your Destination?</h1>

                    {/* the form===========  */}
                   
                    <HeroForm/>

                    
                  </div>
                </div>
              </div>
                       
            </div>
        </section>

              <section className="py-[46px] ">
                <Partners/>

              </section>


             <div className="bg-gradient-to-b from-[#f8f9fa] to-[#e7f3ff]">
             <section  className="" style={{boxShadow:'0px 10px 40px rgba(0, 0, 0, 0.1)'}}>
                <div className="bg-[#FEEDBB] rounded-[50px] pt-6 px-4 pb-[110px]" >

                  <div className='max-w-[864px] text-center mx-auto'>
                    <h1 className='text-[40px] font-semibold text-[#007BFF] mb-[30px] leading-[32px]'>Schedules</h1>
                    <p className='text-[20px] font-light text-[#333333] leading-[32px]'>Explore our comprehensive travel schedule to find the perfect journey for you. Use our convenient filters to search by date, time, service class and bus operator.
                      </p>
                  </div>

{/* form section=============== */}
                  <div className="my-6 py-2  flex flex-col gap-4 max-w-[625px] mx-auto">
                    <p className="text-[20px] leading-[32px] font-normal text-[#333333] text-center"> What’s Your Destination?</p>

                   
                    {/* form row============ */}
                      <div className="">
                          <div className="flex justify-between gap-[35px] mb-[20px]">
                            {/*  row 1*/}
                            
                            {/* <div className="flex-1 flex items-center max-w-[300px] bg-white px-2 rounded-[20px] min-h-[70px]">
                              <p className="text-[20px] ">From:</p>
                              <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
                                <option>Yaounde</option>
                              </select>
                            </div> */}

                          <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff] px-4 rounded-[20px] " style={{boxShadow:' 0px 4px 50px 10px rgba(0, 0, 0, 0.05)'}}>
                            <p className='font-[400] text-[20px]'>From:</p>
                                      
                            <input type="text" placeholder='Yaounde' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700 ' />
                                      {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
                            <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
                                    
                          </div>

                          <div className="flex-1 flex items-center min-h-[70px] max-w-[300px] bg-[#ffffff] px-4 rounded-[20px] " style={{boxShadow:' 0px 4px 50px 10px rgba(0, 0, 0, 0.05)'}}>
                              <p className='font-[400] text-[20px]'>From:</p>
                              
                                <input type="text" placeholder='Yaounde' className='w-full p-2 bg-transparent  rounded  focus:outline-none placeholder-gray-700 ' />
                              {/* <option className='font-light text-[#333333] text-[20px]'> Yaounde</option> */}
                              <span className='w-[40px] h-[40px] flex items-center'><Image src={'/downArrow.svg'} width={30} height={30} /></span>
                            
                          </div>

                          </div>
                      </div>
                      
                      <div className="flex justify-between gap-4 mb-4" style={{boxShadow:' 0px 4px 50px 10px rgba(0, 0, 0, 0.05)'}}>
                            {/* Number of Seats */}
                            <div className="flex-1 flex items-center  bg-white px-2 rounded-[20px]  min-h-[70px]">
                            
                            <input
                              type="date"
                              className="w-full p-2  rounded  focus:outline-none"
                            />
                            </div>
                      </div>
                  </div>

{/* options section ==============*/}
                  <div className="options-section my-8 py-4 flex flex-col gap-2">

                    <h4 className="font-medium text-[20px] leading-[32px] text-[#007BFF] text-center mb-[18px]">Select Class</h4>

                   
                    <SelectContainers/>


                    <h4 className="font-medium text-[20px] text-[#007BFF] leading-[32px] text-center mb-[18px] mt-[28px]">
                      Bus Operator
                    </h4>

                    <SelectContainers2 />

                   
                   
                    <h4 className="font-medium text-[20px] text-[#007BFF] leading-[32px] text-center mb-[18px] mt-[28px]">
                     Time Interval
                    </h4>

                    
                    <TimeInterval/>


                  </div>

{/* schedule================== */}
                  <div className="avail-schedule">
                    <Schedule/>

                  </div>

                </div>

                  


              </section>
             </div>

              <section id="ticketManagement" className="ticket-management bg-[#E7F3FF] py-16 px-4">
                <div className="max-w-[711px] mx-auto flex flex-col gap-3 text-center">
                  <h1 className="text-[40px] font-medium text-[#007BFF] text-center mb-[55px] leading-[32px] ">Ticket Management</h1>

                  <p className="text-[20px] leading-[32px] font-light text-center mb-[76px]">

                  Our Ticket Management system provides you with a seamless way to retrieve, manage, and interact with your purchased tickets. Gain access by entering your <span className="text-[20px] font-medium">Ticket Reference Number</span> or <span className="text-[20px] font-medium">Phone Number to Receive OTP</span>.
                  </p>

                  

                 {/*  */}
                 <TicketSelectionOption/>

                  


                </div>


              </section>


              <section className="faq-section pt-[41px] pb-[94px] px-4">
               <div className=" flex flex-col ">
                    <h1 className="text-[40px] leading-[32px] mb-[34px]  font-medium text-center">FAQ & Support</h1>

                    <p className="text-[20px] font-light max-w-[1049px] mb-[46px] mx-auto text-center leading-[32px] "> 
                    Here, you can find the assistance you need to make your travel experience seamless. Whether you have questions about bookings, need help with ticket management, or require support with any other issues, we’re here to help. Browse through our resources, or reach out to our dedicated support team for personalized assistance. Your journey is important to us, and we’re committed to providing you with the best service possible.
                    </p>

                    <div className="ques-container flex gap-4" >
                      

                      <div className=" flex-1  flex flex-col gap-4 ">
                        <div className="flex gap-[14px] mb-[34px]">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="text-[24px] font-medium text-[#333333] mb-[9px]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className=" max-w-[343px] text-[20px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                        <div className="flex gap-[14px] mb-[34px]">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="text-[24px] leading-[32px] font-medium text-[#333] mb-[9px]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className=" max-w-[343px] text-[20px]  font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                      </div>

                      <div className=" flex-1  flex flex-col gap-4">
                        <div className="flex gap-[14px] mb-[34px]">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className=" mb-[9px] text-[24px] leading-[32px] font-medium text-[#333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="text-[20px] max-w-[343px] font-light text-[#333333] leading-[32px]">
                              Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased. Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                        <div className="flex gap-[14px] mb-[34px]">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="mb-[9px]  text-[24px] leading-[32px] font-medium text-[#333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="text-[20px] max-w-[343px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                      </div>

                      <div className=" flex-1  flex flex-col gap-4">
                        <div className="flex gap-[14px] mb-[34px]">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className=" mb-[9px] text-[24px] leading-[32px] font-medium text-[#333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="max-w-[343px] text-[20px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                        <div className="flex gap-[14px] mb-[34px]">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className=" mb-[9px] text-[24px] leading-[32px] font-medium text-[#333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="max-w-[343px] text-[20px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                      </div>
                    </div>


               </div>
              </section>

              <Contact id='support'/>


             
              

              <Footer/>
      </div>
    </div>
  );
}














  // const [selectedOption, setSelectedOption] = useState("All");


  //   <div className={styles.container}>
  //     <h2 className={styles.title}>Time Interval</h2>
  //     <div className={styles.options}>
  //       <label className={styles.option}>
  //         <input
  //           type="radio"
  //           name="time"
  //           value="All"
  //           checked={selectedOption === "All"}
  //           onChange={() => setSelectedOption("All")}
  //         />
  //         <span className={styles.label}>All</span>
  //       </label>
  //       <label className={styles.option}>
  //         <input
  //           type="radio"
  //           name="time"
  //           value="Morning"
  //           checked={selectedOption === "Morning"}
  //           onChange={() => setSelectedOption("Morning")}
  //         />
  //         <span className={styles.label}>1 AM - 12 PM</span>
  //       </label>
  //       <label className={styles.option}>
  //         <input
  //           type="radio"
  //           name="time"
  //           value="Afternoon"
  //           checked={selectedOption === "Afternoon"}
  //           onChange={() => setSelectedOption("Afternoon")}
  //         />
  //         <span className={styles.label}>1 PM - 5 PM</span>
  //       </label>
  //       <label className={styles.option}>
  //         <input
  //           type="radio"
  //           name="time"
  //           value="Night"
  //           checked={selectedOption === "Night"}
  //           onChange={() => setSelectedOption("Night")}
  //         />
  //         <span className={styles.label}>6 PM - 12 AM</span>
  //       </label>
  //     </div>
  //   </div>


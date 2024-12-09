import Image from "next/image";
// import heroBg from "/bgImage.png"
import Navbar from "./components/Navbar";
// import hero2 from "/hero2.png"
// import heroShadow from "/heroShadow.png"
import Card from "./components/Card";
import Partners from "./components/Partners";
import Schedule from "./components/Schedule";

// import info from "/info.svg"
// import LineL from "/LineL.svg"
// import LineR from "/LineR.svg"
// import logo2 from "/Logo2.svg"
// import whats from "/whats.svg"
// import call from "/call.svg"
import Footer from "./components/Footer";
import SelectContainers from "./components/SelectContainers";
import SelectContainers2 from "./components/SelectContainers2";
import HeroForm from "./components/HeroForm";

export default function Home() {
  return (
    <div className="w-screen  overflow-x-hidden">
      <div className="  mx-auto  ">
        <section className="flex justify-center ">
            <div className="hero-container w-[100%]   max-h-[955px] flex justify-center "
                style={{
                    backgroundColor: "rgba(250, 250, 250, 0.4)",
                    backgroundImage:`url(/bgImage.png)`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover ',
                    backgroundBlendMode: "overlay", 
                      
                }}
            >
              <div className="black-bg min-w-full"
              style={{
                    backgroundColor: "rgba(250, 250, 250, 0.4)",
                    backgroundImage:`url(/heroShadow.png)`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain ',
                    backgroundBlendMode: "overlay", 
              }}
              >
                <Navbar/>

                <div className="hero-content   w-full flex  justify-center ">
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

              <section className="py-6 ">
                <Partners/>

              </section>


              <section >
                <div className="bg-[#FEEDBB] rounded-[50px] py-6 px-4">

                  <div className='max-w-[864px] text-center mx-auto'>
                    <h1 className='text-[40px] font-semibold text-[#007BFF]'>Schedules</h1>
                    <p className='text-[20px] font-light text-[#333333] leading-[32px]'>Explore our comprehensive travel schedule to find the perfect journey for you. Use our convenient filters to search by date, time, service class and bus operator.
                      </p>
                  </div>

{/* form section=============== */}
                  <div className="my-6 py-2  flex flex-col gap-4 max-w-[625px] mx-auto">
                    <p className="text-[20px] font-normal text-[#333333] text-center"> What’s Your Destination?</p>

                   
                    {/* form row============ */}
                      <div className="">
                          <div className="flex justify-between gap-4 mb-4">
                            {/*  row 1*/}
                            
                            <div className="flex-1 flex items-center max-w-[300px] bg-white px-2 rounded-[20px] min-h-[70px]">
                              <p className="text-[20px] ">From:</p>
                              <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
                                <option>Yaounde</option>
                              </select>
                            </div>

                            <div className="flex-1 flex items-center max-w-[300px] bg-white px-2 rounded-[20px] min-h-[70px]">
                              <p>To:</p>
                              
                            <select className="w-full p-2 bg-transparent  rounded  focus:outline-none">
                                <option>City</option>
                              </select>
                            </div>

                          </div>
                      </div>
                      
                      <div className="flex justify-between gap-4 mb-4">
                            {/* Number of Seats */}
                            <div className="flex-1 flex items-center  bg-white px-2 rounded-[20px]  min-h-[70px]">
                            
                            <input
                              type="date"
                              className="w-full p-2  rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            </div>
                      </div>
                  </div>

{/* options section ==============*/}
                  <div className="options-section my-8 py-4 flex flex-col gap-2">

                    <h4 className="font-medium text-[20px] text-[#007BFF] text-center">Select Class</h4>

                    {/* <div className="select-card-container flex max-w-[692px] gap-6 justify-between py-4 px-2 mx-auto">

                      <div className=" text-[20px] font-normal  mx-auto rounded-[20px] py-[10px] px-[40px] bg-[#FFC107] flex gap-3">
                          <span>All</span>
                          <span>/</span>
                      </div>
                      
                      <div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
                        Regular
                      </div>

                      <div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
                        V.I.P
                      </div>

                      <div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
                        V.V.I.P
                      </div>                     
                       
                    </div> */}
                    <SelectContainers/>


                    <h4 className="font-medium text-[20px] text-[#007BFF] text-center">
                      Bus Operator
                    </h4>

                     {/* <div className="select-card-container flex max-w-[1202px] gap-6 justify-between py-4 px-2 mx-auto">

                        <div className=" text-[20px] font-normal  mx-auto rounded-[20px] py-[10px] px-[40px] bg-[#FFC107] flex gap-3">
                            <span>All</span>
                            <span>/</span>
                        </div>
                        
                        <div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
                          FINEXS Voyage
                        </div>

                        <div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
                          United Express
                        </div>

                        <div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
                          Amour Mezam
                        </div>  

                        <div className="border-black border text-[20px] font-light  mx-auto rounded-[20px] py-[10px] px-[40px] ">
                          General Express
                        </div>                     
                       
                    </div> */}
                    <SelectContainers2 />

                   
                   
                    <h4 className="font-medium text-[20px] text-[#007BFF] text-center ">
                     Time Interval
                    </h4>

                    <div className="grid grid-cols-4 gap-4 max-w-[844px]  mx-auto  py-2">

                      <div className="  text-[20px] font-light">
                        <h3 className=" text-[24px] font-normal"> .</h3>
                        <label className='flex  items-center gap-2 rounded-[20px] border border-black py-1 px-4 min-h-[52px]'>
                        <input
                          type="radio"
                          name="time"
                          value="All"
                          // checked={selectedOption === "All"}
                          // onChange={() => setSelectedOption("All")}
                        />
                        <span className=''>All</span>
                      </label>

                      </div>
                      

                      <div className="  text-[20px] font-light">
                        <h3 className=" text-[24px] font-normal">Morning</h3>
                        <label className='flex  items-center  gap-2 rounded-[20px] border border-black py-1 px-4 min-h-[52px]'>
                        <input
                          type="radio"
                          name="time"
                          value="All"
                          // checked={selectedOption === "All"}
                          // onChange={() => setSelectedOption("All")}
                        />
                        <span className=''>1 AM - 12 PM </span>
                      </label>

                      </div>

                      <div className="  text-[20px] font-light">
                        <h3 className=" text-[24px] font-normal">Afternoon</h3>
                        <label className='flex  items-center gap-2 rounded-[20px] border border-black py-1 px-4 min-h-[52px]'>
                        <input
                          type="radio"
                          name="time"
                          value="All"
                          // checked={selectedOption === "All"}
                          // onChange={() => setSelectedOption("All")}
                        />
                        <span className=''>1 PM - 5 PM </span>
                      </label>

                      </div>

                      <div className="  text-[20px] font-light">
                        <h3 className=" text-[24px] font-normal">Night</h3>
                        <label className='flex  items-center gap-2 rounded-[20px] border border-black py-1 px-4 min-h-[52px]'>
                        <input
                          type="radio"
                          name="time"
                          value="All"
                          // checked={selectedOption === "All"}
                          // onChange={() => setSelectedOption("All")}
                        />
                        <span className=''>6 PM - 12 AM </span>
                      </label>

                      </div>

                    </div>


                  </div>

{/* schedule================== */}
                  <div className="avail-schedule">
                    <Schedule/>

                  </div>

                </div>

                  


              </section>

              <section className="ticket-manageent bg-[#E7F3FF] py-16 px-4">
                <div className="max-w-[711px] mx-auto flex flex-col gap-3 text-center">
                  <h1 className="text-[40px] font-medium text-[#007BFF] text-center">Ticket Management</h1>

                  <p className="text-[20px] font-light text-center py-2">

                  Our Ticket Management system provides you with a seamless way to retrieve, manage, and interact with your purchased tickets. Gain access by entering your <span className="text-[20px] font-medium">Ticket Reference Number</span> or <span className="text-[20px] font-medium">Phone Number to Receive OTP</span>.
                  </p>

                  <div className="max-w-[490px] flex justify-between mx-auto gap-6">
                    <label htmlFor="">
                      <input type="radio" name="ticket" />
                      <span className="text-[20px] font-medium"> Retrieve active ticket</span>
                    </label>

                    <label htmlFor="">
                      <input type="radio" name="ticket" />
                      <span className="text-[20px] text-[#AAABAB]"> Retrieve past tickets</span>
                    </label>
                  </div>

                  <div className="w-full px-8 text-center  mx-auto ">
                    <div className=" bg-white rounded-[20px] flex min-h-[70px] px-2
                     ">
                      <input type="text" placeholder="Enter ticket reference number" className="rounded-[20px]  min-w-[90%] outline-none px-2 "  />

                      <div className=" min-w-[10%] flex justify-center items-center">
                        <Image src={'/info.svg'} width={24} height={24} alt="info"  />
                      </div>
                    </div>

                    <button className="rounded-[20px] bg-[#007BFF]  mt-4 w-full py-4  text-white font-bold  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                       Proceed                      
                    </button>                
                    

                  </div>


                </div>


              </section>


              <section className="faq-section py-10 px-4">
               <div className=" flex flex-col gap-4">
                    <h1 className="text-[40px] font-medium text-center">FAQ & Support</h1>

                    <p className="text-[20px] font-light max-w-[1049px] mx-auto text-center "> 
                    Here, you can find the assistance you need to make your travel experience seamless. Whether you have questions about bookings, need help with ticket management, or require support with any other issues, we’re here to help. Browse through our resources, or reach out to our dedicated support team for personalized assistance. Your journey is important to us, and we’re committed to providing you with the best service possible.
                    </p>

                    <div className="ques-container flex gap-4" >
                      

                      <div className=" flex-1  flex flex-col gap-4 ">
                        <div className="flex">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="text-[24px] font-medium text-[#333333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="text-[20px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="text-[24px] font-medium text-[#333333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="text-[20px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                      </div>

                      <div className=" flex-1  flex flex-col gap-4">
                        <div className="flex">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="text-[24px] font-medium text-[#333333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="text-[20px] font-light text-[#333333] leading-[32px]">
                              Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased. Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="text-[24px] font-medium text-[#333333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="text-[20px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                      </div>

                      <div className=" flex-1  flex flex-col gap-4">
                        <div className="flex">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="text-[24px] font-medium text-[#333333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="text-[20px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="left text-[24px] font-medium text-[#007BFF]">
                              01

                            </div>
                            <div>
                              <h4 className="text-[24px] font-medium text-[#333333]">
                                Can I change or cancel my booking?
                              </h4>
                              <p className="text-[20px] font-light text-[#333333] leading-[32px]">
                                 Yes, you can change or cancel your booking, but the specific policies may vary depending on the bus agency and the type of ticket purchased.
                              </p>
                            </div>
                        </div>

                      </div>
                    </div>


               </div>
              </section>


              <section className="contact px-4">
                <div className="py-4  ">

                  <div className="head flex  items-center justify-center gap-4 ">
                    <span className=""><Image src={'/LineL.svg'} width={600} height={2} alt="left line" /></span>
                    <h2 className="text-[40px] ">Contact Us</h2>
                    <span className=""><Image src={'/LineR.svg'} width={600} height={2} alt="right line" /></span>
                  </div>

                  <div className="contact-content max-w-[90%]  px-4 flex  justify-center py-4  ">
                    
                    <div className="left  flex flex-col items-center gap-2 ">
                      <Image src={'/Logo2.svg'} width={351} height={205} alt="logo" />

                      <div className="socials flex justify-center gap-2 py-2 px-2 max-w-[80px] rounded-[10px] bg-[#FCECBC]">
                        <Image src={'/whats.svg'} width={24} height={24} alt="whatsapp" />
                        <Image src={'/call.svg'} width={24} height={24} alt="phone" />

                      </div>
                      <h5 className="text-[20px] text-black font-medium">+237 650 11 85 88</h5>


                    </div>
                   
                    <div className="right  flex flex-col gap-4 items-center pt-4">
                      <div className="min-w-[625px] px-2 flex flex-col gap-4">
                        <div className="row flex w-full gap-2">
                          <div className="First flex-1"> 
                            <h4 className="text-[20px] font-medium text-[#333333]">First name</h4>
                            <input type="text" className="w-full border border-black px-2 py-2 rounded-[20px] min-h-[70px]" placeholder="Enter here"/>
                          </div>
                          <div className="First flex-1"> 
                            <h4 className="text-[20px] font-medium text-[#333333]">Last name</h4>
                            <input type="text" className="w-full border border-black px-2 py-2 rounded-[20px] min-h-[70px]" placeholder="Enter here"/>
                          </div>
                          
                        </div>
                        <div className="First flex-1"> 
                            <h4 className="text-[20px] font-medium text-[#333333]">Phone number</h4>
                            <input type="text" className="w-full border border-black px-2 py-2 rounded-[20px] min-h-[70px]" placeholder="Enter "/>
                        </div>

                        <button className="rounded-[20px] bg-[#007BFF]  mt-4 w-full py-4  text-white font-bold  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Proceed                      
                        </button> 
                      </div>
                    </div>

                  </div>


                </div>
              </section>
              

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


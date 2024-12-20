// import { Link } from "react-router-dom"
// import { TiArrowRight } from "react-icons/ti";
// import HighlightedText from "../Components/Cores/HomePageCom/HighlightedText"
// import CTButton from "../Components/Cores/HomePageCom/Buttons";
// import CodeBlocks from "../Components/Cores/HomePageCom/CodeBlocks"
// import Banner from "../assets/Images/banner.mp4"
// import TimelineSection from "../Components/Cores/HomePageCom/TimeTable";
// import LearningLanguageSection from "../Components/Cores/HomePageCom/LearningLanguageSection";
// import IntructorSection from "../Components/Cores/HomePageCom/IntructorSection";
// import Footer from "../Components/Common/Footer";
// import ExploreMore from "../Components/Cores/HomePageCom/exploreMore";
// import deshboard from "../assets/Images/deshboard.svg"
// function HomePage() {

//     return (
//         <div>
//             {/* section 1 */}
//             <div className="relative mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between text-white ">

//                 <div className="w-full flex justify-around items-center bg-richgray-50 gap-2  mt-5 h-[400px]">
//                     <div className="flex flex-col gap-10 w-[60%] ">
//                         <p className="  text-richblack-900 text-4xl font-semibold">Launch Yourself in new Direction </p>
//                         <p className="text-richblack-300 space-x-1 ">VirtualClasses is the one-stop destination for your upskilling journey. Brace yourself to find the best job-ready courses and high-end technologies available in the sector. And if that weren't good enough, get the highest quality course content at the most affordable prices!
//                            What are we waiting for ? Let's push Start!</p>
//                           <Link to={"/AllCourses"}>
//                           <div className="flex flex-row items-center bg-faceBookTheme-secondary w-fit  gap-2 rounded-full px-10  py-[5px] group-hover:bg-buttonblue-100">
//                                 <p>ALL Courses</p>
//                                 <TiArrowRight className="text-2xl"></TiArrowRight>
//                             </div>
//                           </Link>
//                     </div>

//                             <img className="w-[30%] h-[60%]" src={deshboard}/>

//                 </div>

//                 {/* button  */}
//                 <div className="flex items-center flex-col">
//                     <Link to={"/signup"}>
//                         <div className="group  mt-16 mx-auto p-1 rounded-full bg  bg-faceBookTheme-secondary  font-bold shadow-2xl shadow-richblack-700  transition-all duration-200 hover:scale-95 w-fit">
//                             <div className="flex flex-row items-center  gap-2 rounded-full px-10  py-[5px] group-hover:bg-buttonblue-50">
//                                 <p>Become an Instructor</p>
//                                 <TiArrowRight className="text-2xl"></TiArrowRight>
//                             </div>
//                         </div>
//                     </Link>
//                     <div className="text-4xl font-semibold text-center mt-6 text-richblack-900 ">
//                         Empower Your Future with
//                         <HighlightedText text={"Coding Skills"}></HighlightedText>
//                     </div>

//                     <div className="text-richblack-300 text-center text-lg  w-[90%] mt-4 ">
//                         With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
//                     </div>

//                     <div className="flex flex-row mt-4 gap-8">
//                         <CTButton active={true} linkWith={"/signup"} >Learn More</CTButton>
//                         <CTButton active={false} linkWith={"/login"}>Book a Demo</CTButton>
//                     </div>
//                 </div>
//                 {/* vedios section */}
//                 <div className="relative w-full border-l-caribbeangreen-5 mt-7 ">

//                     {/* <div className="absolute z-10 shadow-blue-100 -my-52 shadow-2xl w-[600px] rounded-full rotate-180 bg-white top-16  left-96 h-[400px]"></div> */}
//                     <div className="  w-full h-full  z-10 mx-3 my-0 shadow-blue-200 shadow-lg">
//                         <video loop muted autoPlay>
//                             <source src={Banner} />
//                         </video>
//                     </div>

//                 </div>

//                 {/* CodeBlocks--1 */}
//                 <div>
//                     <CodeBlocks
//                         postion={`lg:flex-row`}
//                         Subheading={
//                             <p>Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</p>
//                         }
//                         heading={<div className="text-4xl">Unlock Your  <HighlightedText text={"Coding Potiential   "}></HighlightedText>
//                             With our online Courses
//                         </div>}
//                         CtaBtn1={{
//                             Text: `try it Yourself`,
//                             linkWith: `/signup`,
//                             active: true

//                         }}

//                         CtaBtn2={{
//                             Text: `learn More`,
//                             linkWith: `/login`,
//                             active: false

//                         }}
//                         CodeBlock={`<!DOCTYPE html>
//                          <html>
//                           head><title>Example</title>
//                           <linkrel="stylesheet"href="sty
//                           les.css">
//                           /head>
//                           body>
//                           h1><ahref="/">Header</a>/h1>nav>
//                           <ahref="one/">One</a><ahref="two/">Two</a>
//                           <ahref="three/">Three</a>/nav>`}
//                         backgroundGraident={""}
//                         codeColor={"text-richblack-300 "}
//                     />

//                 </div>

//                 {/*2 second blocks */}
//                 <div>

//                     <CodeBlocks
//                         postion={`lg:flex-row-reverse`}
//                         Subheading={
//                             <p>Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson.</p>
//                         }
//                         heading={<div className="text-4xl w">Start  <HighlightedText text={"Coding in seconds   "}></HighlightedText>

//                         </div>}
//                         CtaBtn1={{
//                             Text: `Continue lesson`,
//                             linkWith: `/signup`,
//                             active: true

//                         }}

//                         CtaBtn2={{
//                             Text: `learn More`,
//                             linkWith: `/login`,
//                             active: false

//                         }}
//                         CodeBlock={`<!DOCTYPE html>
//                          <html>
//                           head><title>Example</title>
//                           <linkrel="stylesheet"href="styles.css">
//                           /head>
//                           body>
//                           h1><ahref="/">Header</a>/h1>nav>
//                           <ahref="one/">One</a><ahref="two/">Two</a>
//                           <ahref="three/">Three</a>/nav>`}
//                         backgroundGraident={""}
//                         codeColor={"text-richblack-300 "}
//                     />

//                 </div>

//                 <div>
//                     <ExploreMore />
//                 </div>

//             </div>
//             {/* section 2  white section*/}

//             <div className="bg-pure-greys-5 ">

//                 <div className="homePage_bg  h-[310px] flex justify-center items-center">
//                     <div className="h-[150px]">

//                     </div>
//                     <div className=" w-11/12 max-w-maxContent lg:w-[100%] flex flex-row justify-center gap-4 items-center ">
//                         <CTButton active={true} linkWith={"sigup"} >

//                             <div className="flex  justify-center items-center gap-3">
//                                 Learn
//                                 <TiArrowRight className="text-[18px]"></TiArrowRight>
//                             </div>
//                         </CTButton>
//                         <CTButton active={false} linkWith={"/signup"} >
//                             Learn More
//                         </CTButton>
//                     </div>

//                 </div>

//                 <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center">
//                     <div className="flex lg:flex-row gap-5 mt-[60px] flex-col  ">
//                         <div className="text-4xl font-semibold min-w-[45%] ">
//                             Get the skills you need for a
//                             <HighlightedText text={"job in demand"} ></HighlightedText>
//                         </div>
//                         <div className="flex flex-col gap-10 min-w-[45%] items-start">
//                             <div className="text-[16px]">

//                                 The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
//                             </div>
//                             <CTButton active={true} linkWith={"/signup"}>
//                                 Learn More
//                             </CTButton>

//                         </div>
//                     </div>
//                     <div className="">

//                         <TimelineSection />
//                         <LearningLanguageSection />
//                     </div>

//                 </div>
//             </div>

//             {/* section 3 */}
//             <div className="w-11/12 mx-auto max-w-maxContent flex flex-col justify-center items-center">
//                 <IntructorSection></IntructorSection>
//                 <h2 className="text-center  text-4xl font-semibold mt-10">reviews from other learners</h2>

//             </div>
//             {/* Footer*/}
//             <Footer />

//         </div >
//     )
// }
// export default HomePage

import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import HighlightedText from "../Components/Cores/HomePageCom/HighlightedText";
import CTButton from "../Components/Cores/HomePageCom/Buttons";
import Footer from "../Components/Common/Footer";
import deshboard from "../assets/Images/deshboard.svg";

function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative mx-auto w-11/12 max-w-maxContent flex flex-col items-center text-center text-richblack-900 py-10">
        <h1 className="text-4xl font-bold">
          Teaching in the Internet age means we must teach{" "}
          <HighlightedText text={"tomorrow's skills today"} />
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Brace yourself to find the best job-ready courses and high-end
          technologies available in the sector. Learn at your own pace, from
          anywhere in the world.
        </p>
        <Link to="/AllCourses" className="mt-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700">
            Explore All Courses <TiArrowRight />
          </button>
        </Link>
        <div className="mt-8">
          <img
            src={deshboard}
            alt="Dashboard Preview"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Popular Courses */}
      <section className="w-11/12 mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Our Most Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Web Development Bootcamp", price: "$49.99" },
            { title: "Mastering Data Science", price: "$69.99" },
            { title: "UI/UX Design Basics", price: "$39.99" },
          ].map((course, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-md hover:shadow-xl transition-shadow"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=${course.title}`}
                alt={course.title}
                className="rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-500">{course.price}</p>
              <Link to="/course-details" className="text-blue-600 mt-2 block">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Explore Top Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["AI & Coding", "Information Tech", "Finance", "Photography"].map(
            (category, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white shadow-md rounded-md text-center hover:shadow-lg transition-shadow"
              >
                {category}
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Student A",
              review: "This platform changed my career path.",
              rating: 5,
            },
            {
              name: "Student B",
              review: "Great resources and instructors!",
              rating: 4,
            },
            {
              name: "Student C",
              review: "Affordable and effective courses.",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-lg rounded-md hover:shadow-xl transition-shadow"
            >
              <p className="text-lg font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.review}</p>
              <p className="mt-2 text-yellow-500">
                {"★".repeat(testimonial.rating)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;

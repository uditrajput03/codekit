import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function About({ login }) {
  return (<>
    <NavBar login={login} />
    <div className="flex mt-10 sm:w-2/3 w-4/5 m-auto justify-center flex-col">
      <h1 className="text-3xl sm:mt-0 mt-14 font-bold my-5">About</h1>
      <p className="mx-5">
        We are no a team, this site comes under UR Technoligies which is a propriotership and comes under solopreniurship.
      </p>
      <h1 className="text-2xl font-semibold my-5">About author</h1>
      <p className="mx-5">I am a freelancer web developer, Content and boilerplate code of this website is written by me. It is a side project done by me , SaaS code present in this site is often used by me during my freelance journey. It helps me develop faster and ship my product in some days to my clients. If any query related to business contact me on <a className="underline text-blue-800" href="mailto:admin@codekit.me">admin@codekit.me</a></p>
    
      <h1 className="text-2xl font-semibold my-5">Motivation</h1>
      <p className="mx-5">Although , these SaaS helps to ship fast but you have to know the underlying code to tweak this boilerplate, Peoples keep telling about not to use the boilerplates as it decreases the learning curve</p>
      <p className="mx-5">But according to me if we know the code ones and how it works, after that implementing it again and again is a time waste similar to using github copilot, If I know atlast I am able to solve any problem in a time frame of suppose maximum 2 days, Then why not to use these AI tools and boilerplates to improve efficiency and ship code faster. </p>
      <h1 className="text-2xl font-semibold my-5">Outcome</h1>
      <p className="mx-5">Implementing same code again and again for days leads to burnout in thr coding world.</p>
      <p className="mx-5">It is advicable to use boilerplate for the same repeating code to maintain the consistency and security of the codebase.</p>
      <p className="mx-5">Best outcome of this is you keep improving day by day without thinking of the same again and again used boaring code. Apart from saving the time we can use it to learn new technoligies like AI and machine Learning</p>
    </div>
    <Footer />
  </>)
}
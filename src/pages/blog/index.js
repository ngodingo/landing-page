import { Button } from "../../components/atoms/button"

export default function Blog () {
  return (
    <div className="grid place-content-center h-screen text-center">
      <h1 className="text-heading-1 font-semibold">Coming Soon</h1>
      {/* <p className="text-body-2">This page is under construction, but we are ready to go!<br/>We are preparing something amazing and exciting for you..</p> */}
      <Button theme="primary" href="/" text="Back To Homepage" className="w-full grid place-items-center mt-4"/>
    </div>
  )
}
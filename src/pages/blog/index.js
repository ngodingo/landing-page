import { Button } from "../../components/atoms/button"

export default function Blog () {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-heading-1 font-semibold">Coming Soon</h1>
      <p className="text-body-2">This page is still being developed..🛠️</p>
      <Button theme="primary" href="/" text="Back To Homepage" className="mt-4"/>
    </div>
  )
}
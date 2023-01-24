import { Button } from "../../components/atoms/Button/Button"


export default function ComingSoon () {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-heading-1 font-semibold">Coming Soon</h1>
      <p className="text-body-2">This page is under construction..🛠️</p>
      <Button theme="primary" href="/" className="mt-4">
      Back To Homepage
      </Button>
    </div>
  )
}
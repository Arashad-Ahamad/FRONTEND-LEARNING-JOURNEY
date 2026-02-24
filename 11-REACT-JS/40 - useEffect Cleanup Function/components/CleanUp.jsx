import { useEffect } from "react";
function CleanUp() {
    useEffect(() => {
  const timer = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(timer);
}, []);
return (
    <>
    <h1>Clean Up</h1>
    </>
)
}
export default CleanUp
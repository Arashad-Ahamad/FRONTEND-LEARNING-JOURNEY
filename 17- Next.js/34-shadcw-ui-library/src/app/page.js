import { Button,  } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"


export default function Home() {
  return (
   <div>
    <Button>Login</Button>
<br />
<br />
    <Dialog>
  <DialogTrigger>Open Modal</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Ye ek Modal hai</DialogTitle>
    </DialogHeader>
    <p>Modal ke andar ka content.</p>
  </DialogContent>
</Dialog>

<div>
      <Badge className="bg-red-500 hover:bg-red-600 text-white rounded-full px-8">New</Badge>
    </div>
   </div>


  );
}

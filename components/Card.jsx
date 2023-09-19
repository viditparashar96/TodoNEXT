import React, { useState } from "react";

import { Card, CardHeader, CardBody, CardFooter, Divider, Image,Button,useDisclosure,Modal,ModalContent,ModalHeader,ModalFooter ,Input ,ModalBody } from "@nextui-org/react";

export default function Cards(props) {
    const tasks=props.tasks
    const setTask=props.setTask
    const index=props.index
    const status=props.status
    const title=props.title
    const description=props.description
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [update,setUpdate]=useState(false)

    const [formData,setFormData]=useState({
        ftitle:title,
        fdescription:description,
        fstatus:status
    })
    function handleUpdate2(e){
        const {name,value}=e.target
    //     setFormData((prev)=>{
    //         return{
    //             ...prev,
    //             [name]:value
    //         }
    //     })
    // console.log(formData)

    }
    function handleChange(e) {
      const { name, value } = e.target;
      setFormData((prev) => ({
          ...prev,
          [name]: value,
      }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    
    const newTasks = tasks.map((task, i) => {
        if (i === index) {
            return {
                title: formData.ftitle,
                description: formData.fdescription,
                status: formData.fstatus,
            };
        } else {
            return task;
        }
    });

    
    setTask(newTasks);
}
    return (
        <div>
          
        
        <Card className="md:min-w-[400px] min-w-[350px]  md:mx-0 bg-[#1c1c1c] text-white">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{title}</p>
                    <p className="text-small text-default-500">nextui.org</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{description}</p>
            </CardBody>
            <div>
            {props.status==="due"&&
                    <Button color="danger" className=" ml-4 border" variant="bordered" >
                    {status}
                  </Button>
            }
             {props.status==="pending"&&
                    <Button color="warning" className=" ml-4 border" variant="bordered" >
                    {status}
                  </Button>
            }
             {props.status==="completed"&&
                    <Button color="success" className=" ml-4 border" variant="bordered" >
                    {status}
                  </Button>
            }
        
            </div>
            <Divider />
            <CardFooter className=" flex gap-3 justify-end">
                <Button color="danger" variant="flat" onClick={()=>props.handleDelete(props.index)} >
                    Delete
                </Button> 
                <Button onClick={handleUpdate2} onPress={onOpen}  className="bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg shadow-indigo-500/20" >
                    Update
                </Button>
            </CardFooter>
        </Card>
        <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="2xl"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update the task</ModalHeader>
              <form >

                <ModalBody>
                  <Input type="text" name="ftitle"   onChange={handleChange} value={formData.ftitle}  variant="underlined" label="Title" className=" text-white" />
                  <Input type="text" name="fdescription"  onChange={handleChange} value={formData.fdescription}  variant="underlined" label="Desription" className=" text-white" />
               
                 <select name="fstatus" onChange={handleChange} value={formData.fstatus} className=" bg-transparent mt-2 outline-none border-b-2 py-3"   >
                  <option value="due" className=" bg-black">Due</option>
                  <option value="pending" className=" bg-black">pending</option>
                  <option value="completed" className=" bg-black">completed</option>
                 </select>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button  onClick={(e)=>handleSubmit(e)} className="bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg shadow-indigo-500/20" onPress={onClose}>
                    Update
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
        </div>

    );
}

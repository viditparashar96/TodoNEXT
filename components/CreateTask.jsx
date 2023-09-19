import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Select, SelectItem } from "@nextui-org/react";
import Card from "./Card";

export default function CreateTask() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status:"due"
  })
  const [tasks,setTask]=useState([])
// console.log(tasks)
  function submitHandler(e) {
    e.preventDefault()
    const { value, name } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
    setTask((prev)=>{
      return[
        ...prev,
        formData
      ]
    })
    setFormData((prev) => {
      return {
        [name]: ""
      }
    })
    // console.log(formData)
  }
  function handleChange(e) {
    const { value, name } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  function handleDelete(index){
    console.log(index)
    const newTasks=tasks.filter((task,i)=>{
      return i!==index
    })
   console.log(newTasks)
   setTask(newTasks)
  }
  function handleUpdate(index){
    const foundedTask = tasks.find((task, i) => i === index);
     console.log(foundedTask)
    setFormData(foundedTask)
    
  }

  return (
    <div className=" space-y-14 mt-10">
      <div className=" text-center">

      <Button onPress={onOpen} color="secondary" className=" ml-4 rounded-md">Create New Task</Button>
      </div>
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
              <ModalHeader className="flex flex-col gap-1">Add New Task.</ModalHeader>
              <form onSubmit={submitHandler}>

                <ModalBody>
                  <Input type="text" name="title" value={formData.title} onChange={handleChange} variant="underlined" label="Title" className=" text-white" />
                  <Input type="text" name="description" value={formData.description} onChange={handleChange} variant="underlined" label="Desription" className=" text-white" />
                 {/* <Select variant="underlined" label="Status" className=" text-white" name="status" value={formData.status} onChange={handleChange}>
                  <SelectItem className=" text-white bg-black" value="due">Due</SelectItem>
                  <SelectItem className=" text-white bg-black" value="pending">pending</SelectItem>
                  <SelectItem className=" text-white bg-black" value="compeleted">compeleted</SelectItem>

                 </Select> */}
                 <select name="status" className=" bg-transparent mt-2 outline-none border-b-2 py-3"  value={formData.status} onChange={handleChange} >
                  <option value="due" className=" bg-black">Due</option>
                  <option value="pending" className=" bg-black">pending</option>
                  <option value="completed" className=" bg-black">completed</option>
                 </select>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button onClick={submitHandler} className="bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg shadow-indigo-500/20" onPress={onClose}>
                    Create
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className=" ml-4  flex items-center gap-4 overscroll-scroll   flex-wrap">
      {
        tasks.map((task,index)=>{
          return <Card key={index} {...task} handleDelete={handleDelete} onOpen={onOpen} handleUpdate={handleUpdate} setTask={setTask} tasks={tasks} index={index} />
        })
      }
      </div>
    </div>
  );
}

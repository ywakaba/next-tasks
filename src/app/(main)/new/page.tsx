import NewtaskForm from "@/components/NewTaskForm/NewtaskForm"

const NewtaskPage = () => {
  return (
    <div className='flex flex-col justify-center py-20'>
      <h2 className='text-center text-2xl text-bold'>Create New Task</h2>
      <NewtaskForm />
    </div>
  )
}

export default NewtaskPage
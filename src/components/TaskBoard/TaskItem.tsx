function TaskItem() {
  return (
    <div className="flex h-48 w-full flex-col gap-2 rounded-lg border p-3">
      <div className="labels flex gap-4">
        <div className="w-fit rounded-md bg-purple-300  px-1  text-sm text-purple-600">
          Dashboard
        </div>
        <div className="flex w-fit items-center justify-center rounded-md bg-yellow-200  px-1  text-sm text-yellow-600">
          Medium
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h5 className=" text-black" style={{ fontWeight: '500' }}>
          Employee Details
        </h5>
        <span className="description text-gray-600 ">
          consectetur adipisicing elit. Veritatis Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum, aut! Lorem ipsum dolor sit, amet
        </span>
      </div>
      <hr />
      <div className="flex h-9 items-center gap-3 ">
        <div className="flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border bg-orange-200 text-orange-500">
            PS
          </div>
          <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border bg-purple-200 text-purple-500">
            JD
          </div>
          <div className="-ml-2 flex h-9 w-9  items-center justify-center rounded-full border bg-green-200 text-green-500">
            LM
          </div>
          <div className="-ml-2 flex h-9 w-9 items-center justify-center rounded-full border bg-slate-200 text-slate-500">
            KS
          </div>
        </div>
        <span className="font-semibold">+4 others</span>
      </div>
    </div>
  );
}

export default TaskItem;

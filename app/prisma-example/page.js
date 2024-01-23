import prisma from "@/utils/db";
export const dynamic = "force-dynamic";

const prismaHandlers = async () => {

  console.log("prisma example")
 /*  await prisma.task.create({
    data: {
      content: "wake up",
    },
  }); */

  const allTasks = await prisma.task.findMany({

    /* we are gonna order by created at in descending order */
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">no text</h2>;
  }

  console.log(tasks);

  return (
    <div>
      <h1 className="text-7xl">PrismaExample</h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className="text-xl py-2">
            {task.content}
          </h2>
        );
      })}
    </div>
  );
};
export default PrismaExample;

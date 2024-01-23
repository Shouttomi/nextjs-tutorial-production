import db from "@/utils/db";

/* the good thing with route handlers is that we can work with
the database */

export const GET = async (request) => {
  /* db is alias for prisma */
  const tasks = await db.task.findMany();

  return Response.json({ data: tasks });
};

export const POST = async (request) => {
  /* db is alias for prisma */
  const data = await request.json();

  const task = await db.task.create({
    data: {
      content: data.content,
    },
  });

  return Response.json({ data: task });
};

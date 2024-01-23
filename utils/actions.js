"use server";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/* The Zod library is a TypeScript-first schema declaration 
and validation library that allows developers to create
 complex type checks with simple syntax. */
import {z} from 'zod'

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (FormData) => {
  /*  FormData API to collect data from the form. 
The formData.get() function is used to retrieve the
 value of a specific field in the form. */

  /* The formData.get('content') function is used to retrieve
 the value associated with the 'content' field. This
  corresponds to the input element with the name 'content'
in your form. */

  const content = FormData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });

  /* the task will be created in the database but to show it in 
  our front end we have to revalidate our path */

  revalidatePath("/tasks");
};

export const createTaskCustom = async (prevState,FormData) => {
    /*  FormData API to collect data from the form. 
  The formData.get() function is used to retrieve the
   value of a specific field in the form. */
  
    /* The formData.get('content') function is used to retrieve
   the value associated with the 'content' field. This
    corresponds to the input element with the name 'content'
  in your form. */

 // await new Promise((resolve) => setTimeout(resolve, 2000));

 const content = FormData.get("content");
 const Task = z.object({
    content: z.string().min(5)
 })

  
    try {

    Task.parse({content});
    await prisma.task.create({
      data: {
        content,
      },
    });
  
    /* the task will be created in the database but to show it in 
    our front end we have to revalidate our path */
  
    revalidatePath("/tasks");
    return {message: 'success'}
        
    } catch (error) {
    return {message: 'error'}
        
    }
  };

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });

  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};
export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },

    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });

  redirect('/tasks');
};

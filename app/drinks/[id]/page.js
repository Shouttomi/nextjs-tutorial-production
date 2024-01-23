import Image from "next/image";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

/* Next.Js will automatically compile this drinkimg in an object*/
import drinkimg from "./drink.jpg";

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch a drink");
  }

  return res.json();
};

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 rounded-lg shadow-lg mb-4"
        priority
        alt={title}
      ></Image>
      {/* <Image src={drinkimg} className='w-48 h-48 rounded-lg' alt="drinkimage"></Image> */}
      <h1 className="text-4xl mb-8">{title}</h1>
    </div>
  );
};
export default SingleDrinkPage;

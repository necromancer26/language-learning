// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import middleware from "./middleware";

type Course = {
  language: string;
  description:string;
  image?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Course>>
) {
  middleware(req, res, () => {
    // Your API route logic goes here
    res.status(200).json([
      {
        language: "Arabic",
        description:"Spoken by over 400 million people, primarily in the Middle East and North Africa.",
        image:
          "https://images.unsplash.com/photo-1506795213373-430e921fe2ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      
        },
      {
        language: "English",
        description:"English is the world's most important language, spoken by over 1.5 billion people",
        image:
          "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        language: "Farsi",
        description:"Also known as Persian, is a beautiful and poetic language spoken by over 110 million people worldwide.",
        image:
          "https://images.pexels.com/photos/6348998/pexels-photo-6348998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        language: "French",
        description:"French is a romantic and melodious language spoken by over 300 million people globally and is the official language of 29 countries.",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
      },
      {
        language: "German",
        description:"Complex and precise language spoken by over 130 million people worldwide and is a key language in business, science, and engineering.",
        image:
          "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        language: "Greek",
        description:"Ancient and fascinating language with a rich history and cultural significance, still spoken by over 13 million people worldwide.",
        image:
          "https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        language: "Hindi",
        description:"Spoken by over 600 million people worldwide, primarily in India, and is one of the official languages of the country.",
        image:
          "https://images.unsplash.com/photo-1582450724147-0ee17201a14c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1862&q=80",
      },
      {
        language: "Italian",
        description:"Italian is a melodic and expressive language spoken by over 85 million people worldwide and is known for its rich history, art, and cuisine.",
        image:
          "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        language: "Japanese",
        description:"Japanese is a fascinating and intricate language spoken by over 130 million people worldwide, and is known for its unique writing system and culture.",
        image:
          "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
      },
      {
        language: "Korean",
        description:"Korean is a dynamic and expressive language spoken by over 75 million people worldwide and is known for its vibrant pop culture and cuisine.",
        image:
          "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        language: "Portuguese",
        description:"Portuguese is a romantic and poetic language spoken by over 250 million people worldwide and is the official language of Portugal, Brazil, Mozambique, Angola, and other countries.",
        image:
          "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
      },
      {
        language: "Russian",
        description:"Russian is a Slavic language spoken by over 260 million people worldwide, and is known for its complex grammar, literature, and history.",
        image:
          "https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        language: "Spanish",
        description:"",
        image:
          "https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        language: "Swahili",
        description:"Swahili is a Bantu language widely spoken in East Africa.",
        image:
          "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
      },
      {
        language: "Urdu",
        description:"Swahili is a Bantu language widely spoken in East Africa.",
        image:
          "https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80",
      },
    ]);
  });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import middleware from "./middleware";

type Course = {
  language: string;
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
        image:
          "https://images.unsplash.com/photo-1506795213373-430e921fe2ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      
        },
      {
        language: "English",
        image:
          "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        language: "Farsi",
        image:
          "https://images.pexels.com/photos/6348998/pexels-photo-6348998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        language: "French",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
      },
      {
        language: "German",
        image:
          "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        language: "Greek",
        image:
          "https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        language: "Hindi",
        image:
          "https://images.unsplash.com/photo-1582450724147-0ee17201a14c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1862&q=80",
      },
      {
        language: "Italian",
        image:
          "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        language: "Japanese",
        image:
          "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
      },
      {
        language: "Korean",
        image:
          "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        language: "Portuguese",
        image:
          "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
      },
      {
        language: "Russian",
        image:
          "https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        language: "Spanish",
        image:
          "https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      },
      {
        language: "Swahili",
        image:
          "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
      },
      {
        language: "Urdu",
        image:
          "https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80",
      },
    ]);
  });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import middleware from "./middleware";

type Course = {
  language: string;
  description: string;
  image?: string;
  isOnline: boolean;
  isInPerson: boolean;
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
        description:
          "Did you know that Arabic is one of the fastest growing languages in the world? Learning Arabic not only opens doors to countless job opportunities in business, politics, and diplomacy, but also allows you to connect with millions of speakers worldwide. ",
        image:
          "https://images.unsplash.com/photo-1506795213373-430e921fe2ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        isOnline: true,
        isInPerson: false,
      },
      {
        language: "English",
        description:
          "Ready to unlock the secrets of the most widely spoken language in the world? Learning English isn't just practical, it's downright exciting! From Shakespeare to Star Wars, immerse yourself in the diverse and fascinating world of English literature and pop culture. Join the millions of people worldwide who speak English and discover the magic of this powerful language.",
        image:
          "https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

        isOnline: true,
        isInPerson: true,
      },
      {
        language: "Farsi",
        description:
          "Also known as Persian, is a beautiful and poetic language spoken by over 110 million people worldwide.",
        image:
          "https://images.pexels.com/photos/6348998/pexels-photo-6348998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

        isOnline: true,
        isInPerson: false,
      },
      {
        language: "French",
        description:
          "French is a romantic and melodious language spoken by over 300 million people globally and is the official language of 29 countries.",
        image:
          "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",

        isOnline: true,
        isInPerson: true,
      },
      {
        language: "German",
        description:
          "Complex and precise language spoken by over 130 million people worldwide and is a key language in business, science, and engineering.",
        image:
          "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",

        isOnline: true,
        isInPerson: true,
      },
      {
        language: "Greek",
        description:
          "Ancient and fascinating language with a rich history and cultural significance, still spoken by over 13 million people worldwide.",
        image:
          "https://images.pexels.com/photos/951539/pexels-photo-951539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

        isOnline: true,
        isInPerson: false,
      },
      {
        language: "Hindi",
        description:
          "Discover the beauty and richness of Hindi, the vibrant language of India. From Bollywood to yoga, immerse yourself in the diverse and fascinating culture of this South Asian nation.",
        image:
          "https://images.unsplash.com/photo-1582450724147-0ee17201a14c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1862&q=80",

        isOnline: true,
        isInPerson: false,
      },
      {
        language: "Italian",
        description:
          "Immerse yourself in the rich culture, history, and delicious cuisine of Italy while mastering this beautiful language. Join the millions of speakers worldwide and start your Italian adventure",
        image:
          "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",

        isOnline: true,
        isInPerson: true,
      },
      {
        language: "Japanese",
        description:
          "こんにちは! (Hello!) Are you ready to embark on a journey of discovery? Learning Japanese is not only a gateway to the fascinating culture and traditions of Japan, but also a chance to explore the cutting-edge technology and pop culture of this dynamic country. ",
        image:
          "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",

        isOnline: true,
        isInPerson: true,
      },
      {
        language: "Korean",
        description:
          "Embark on a journey of discovery with the beautiful Korean language. From the colorful world of K-pop to the rich culture and traditions of South Korea, learning Korean opens up a world of possibilities.",
        image:
          "https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",

        isOnline: true,
        isInPerson: true,
      },
      {
        language: "Portuguese",
        description:
          "Portuguese is a romantic and poetic language spoken by over 250 million people worldwide and is the official language of Portugal, Brazil, Mozambique, Angola, and other countries.",
        image:
          "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",

        isOnline: true,
        isInPerson: true,
      },
      {
        language: "Russian",
        description:
          "Learning Russian is a fascinating journey that will take you through the rich history, literature, and culture of Russia and beyond. Join the millions of people worldwide who speak this important language and discover a whole new world of communication and connection.",
        image:
          "https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

        isOnline: true,
        isInPerson: false,
      },
      {
        language: "Spanish",
        description:
          "Learning Spanish is not only fun, but it also opens the door to the diverse and vibrant cultures of Latin America. From Mexico to Argentina, immerse yourself in the rhythms and flavors of this important global language!",
        image:
          "https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",

        isOnline: true,
        isInPerson: false,
      },
      {
        language: "Swahili",
        description:
          "Karibu! (Welcome!) Learning Swahili is an adventure that will take you to the stunning landscapes and diverse cultures of East Africa. From Tanzania to Kenya, immerse yourself in the vibrant rhythms and friendly spirit of Swahili speakers.  ",
        image:
          "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",

        isOnline: true,
        isInPerson: true,
      },
      {
        language: "Urdu",
        description:
          "Celebrate the beauty and richness of the Urdu language! Learning Urdu is a journey of discovery, taking you through the intricate poetry, music, and literature of South Asia. ",
        image:
          "https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1842&q=80",

        isOnline: true,
        isInPerson: true,
      },
    ]);
  });
}

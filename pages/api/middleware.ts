// middleware.ts

import { NextApiResponse, NextApiRequest } from 'next';
import Cors,{CorsOptions} from "cors";

interface CorsRequest extends NextApiRequest {
  cors?: Cors.CorsOptions;
}

// Initialize the cors middleware
const corsMiddleware = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

// Define the typed middleware function
export default function middleware(
  req: CorsRequest,
  res: NextApiResponse,
  next: () => void,
): void {
  // Run the cors middleware
  return corsMiddleware(req, res, next);
}
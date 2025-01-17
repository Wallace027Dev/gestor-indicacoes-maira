import accountController from "@/_controllers/accountController";
import handleError from "@/_error/handleError";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return await accountController.signup(body);
  } catch (error: any) {
    return handleError(error);
  }
}

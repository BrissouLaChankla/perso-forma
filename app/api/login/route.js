import User from "../../../Model/User";
import connectDB from "../../lib/connectDB"
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(req) {
  return NextResponse.json({ error: false, message: 'Heooo!' });
}

export async function POST(req) {

  const {email, password} = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: true, message: 'Veuillez remplir tous les champs 😉' });
  }

  await connectDB();

  try {
    // Recherche l'utilisateur par email
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return NextResponse.json({error: true, message: "Désolé, je n'ai pas trouvé cet email !" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: true, message: 'Mauvais mot de passe' });
    }

    // Évite de renvoyer le mot de passe, même hashé
    delete user.password;
    return NextResponse.json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Internal server error', error: true },
      { status: 500 }
    );
  }

}
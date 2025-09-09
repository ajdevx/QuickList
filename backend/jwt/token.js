import jwt from "jsonwebtoken";

export const generateTokenAndSaveInCookies = (userId, res) => {
  try {
    
    const token = jwt.sign(
      { userId },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" } 
    );

    
    res.cookie("jwt", token, {
      httpOnly: true,     
      secure: false,      
      sameSite: "strict", 
      maxAge: 24 * 60 * 60 * 1000, 
    });

    return token;
  } catch (err) {
    console.error("Error generating JWT:", err.message);
    throw new Error("Token generation failed");
  }
};

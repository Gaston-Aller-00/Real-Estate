import express from "express";
import {
   bookVisit,
   cancelBooking,
  createUser,
   getAllBookings,
   getAllFavorites,
   toFav,
} from "../controllers/userCntrl.js";
// import jwtCheck from "../config/auth0Config.js";
const router = express.Router();
// jwtCheck, meter entre la coma y create user de ABAJO
router.post("/register", createUser);
//jwtCheck, ponero en bookvisit(el de aca abajo)
router.post("/bookVisit/:id",  bookVisit);
router.post("/getAllBookings", getAllBookings);
// jwtCheck,
router.post("/removeBooking/:id", cancelBooking);
//jwtCheck,
 router.post("/toFav/:rid",  toFav);
 //jwtCheck,
 router.post("/allFav/",  getAllFavorites);
export { router as userRoute };
